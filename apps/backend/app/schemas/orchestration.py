from pydantic import BaseModel

class PromptRequest(BaseModel):
    prompt: str

class OrchestrationResponse(BaseModel):
    model: str
    prompt: str
    message: str
