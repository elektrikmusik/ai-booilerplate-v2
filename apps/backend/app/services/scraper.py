from bs4 import BeautifulSoup
import httpx

async def scrape_title(url: str) -> str:
    async with httpx.AsyncClient(timeout=10) as client:
        response = await client.get(url)
        response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")
    if soup.title:
        return soup.title.string or ""
    return ""
