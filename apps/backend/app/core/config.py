from functools import lru_cache
from pydantic import BaseModel, Field
import os

class Settings(BaseModel):
    app_name: str = "ai-boilerplate-backend"
    supabase_url: str = Field(default_factory=lambda: os.getenv("SUPABASE_URL", ""))
    supabase_key: str = Field(default_factory=lambda: os.getenv("SUPABASE_SERVICE_ROLE_KEY", ""))
    genai_model: str = Field(default_factory=lambda: os.getenv("GENAI_MODEL", "gpt-4o-mini"))

    class Config:
        frozen = True

@lru_cache(maxsize=1)
def get_settings() -> Settings:
    return Settings()
