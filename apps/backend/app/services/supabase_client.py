from typing import Any, Dict, List
from supabase import create_client, Client
from ..core.config import get_settings

_settings = get_settings()
_supabase: Client | None = None

def get_supabase_client() -> Client:
    global _supabase
    if _supabase is None:
        if not _settings.supabase_url or not _settings.supabase_key:
            raise RuntimeError("Supabase credentials are missing. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.")
        _supabase = create_client(_settings.supabase_url, _settings.supabase_key)
    return _supabase

async def fetch_documents(limit: int = 10) -> List[Dict[str, Any]]:
    client = get_supabase_client()
    response = client.table("documents").select("id,title,summary,created_at").limit(limit).execute()
    return response.data or []

async def upsert_document(payload: Dict[str, Any]) -> Dict[str, Any]:
    client = get_supabase_client()
    response = client.table("documents").upsert(payload).execute()
    return response.data[0] if response.data else payload
