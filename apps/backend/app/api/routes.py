from fastapi import APIRouter, HTTPException
from ..schemas.document import DocumentCreate, DocumentResponse
from ..schemas.orchestration import OrchestrationResponse, PromptRequest
from ..services.supabase_client import fetch_documents, upsert_document
from ..services.genai import run_orchestration
from ..services.scraper import scrape_title

router = APIRouter()

@router.get("/health")
async def health_check():
    return {"status": "ok"}

@router.get("/documents", response_model=list[DocumentResponse])
async def list_documents(limit: int = 5):
    try:
        records = await fetch_documents(limit=limit)
        return records
    except Exception as exc:  # pragma: no cover - placeholder logging
        raise HTTPException(status_code=500, detail=str(exc)) from exc

@router.post("/documents", response_model=DocumentResponse)
async def create_document(payload: DocumentCreate):
    record = await upsert_document(payload.model_dump())
    return record

@router.post("/orchestrate", response_model=OrchestrationResponse)
async def orchestrate(prompt: PromptRequest):
    result = await run_orchestration(prompt.prompt)
    message = result.get("choices", [{}])[0].get("message", {}).get("content", "")
    return {
        "model": result.get("model"),
        "prompt": prompt.prompt,
        "message": message,
    }

@router.get("/scrape")
async def scrape(url: str):
    title = await scrape_title(url)
    return {"url": url, "title": title}
