# AI Boilerplate v2

Monorepo scaffold for a full-stack AI application with a Vite/React 19 frontend and FastAPI backend.

## Structure

- `apps/frontend`: Vite + React 19 + TypeScript with TanStack Router/Query, Zustand, and shadcn/ui styled via Tailwind.
- `apps/backend`: FastAPI service with Supabase integration, GenAI orchestration hooks, and scraping utilities.
- `supabase`: SQL migrations and storage placeholders.
- `docker-compose.yml`: Local orchestration for frontend and backend containers.

## Getting started

1. Install Node 20+ and Python 3.11+.
2. Install frontend dependencies: `npm install --workspace apps/frontend`.
3. Run frontend: `npm run dev --workspace apps/frontend`.
4. Set up backend Python environment:
   - Create a virtual environment: `python3 -m venv apps/backend/.venv` (or `python -m venv apps/backend/.venv`).
   - Activate the virtual environment:
     - On macOS/Linux: `source apps/backend/.venv/bin/activate`
     - On Windows: `apps\backend\.venv\Scripts\activate`
5. Install backend dependencies: `pip install -r <(python - <<'PY'
import tomllib
p = tomllib.load(open('apps/backend/pyproject.toml','rb'))
print('\n'.join(p['project']['dependencies']))
PY
)` (or install via your preferred environment manager).
6. Start backend: `uvicorn app.main:app --reload --app-dir apps/backend`.

Docker builds are available via `docker-compose up --build` (supply Supabase environment variables as needed).
