import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutRoute,
});

function AboutRoute() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">Architecture notes</h1>
      <p className="text-muted-foreground">
        This monorepo pairs a Vite/React frontend with a FastAPI backend. It includes
        TanStack Router for file-based routing, TanStack Query for data fetching, Zustand for local
        state, Tailwind with shadcn/ui tokens, and placeholders for Supabase + GenAI integrations.
      </p>
      <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
        <li>Use the router devtools in development via the TanStack plugin.</li>
        <li>Theme toggling persists with localStorage and respects system preferences.</li>
        <li>Extend the query client to point at backend routes defined in the FastAPI package.</li>
      </ul>
    </div>
  );
}
