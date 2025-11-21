from datetime import datetime
from pydantic import BaseModel, Field
from typing import Optional

class DocumentBase(BaseModel):
    title: str
    summary: Optional[str] = None

class DocumentCreate(DocumentBase):
    id: Optional[int] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)

class DocumentResponse(DocumentBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True
