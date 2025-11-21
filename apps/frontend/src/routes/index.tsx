import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";

const mockFetcher = async () => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return { message: "AI boilerplate scaffolding ready", timestamp: new Date().toISOString() };
};

export const Route = createFileRoute("/")({
  component: IndexRoute,
});

function IndexRoute() {
  const { data, isLoading, refetch } = useQuery({ queryKey: ["status"], queryFn: mockFetcher });
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Frontend scaffold</h1>
      <p className="text-muted-foreground">
        Vite + React 19 + TanStack Router/Query with Zustand state and shadcn/ui.
      </p>
      <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
        <div>
          <p className="text-sm font-medium">Status</p>
          <p className="text-lg">{isLoading ? "Loading..." : data?.message}</p>
          <p className="text-xs text-muted-foreground">{data?.timestamp}</p>
        </div>
        <Button onClick={() => refetch()}>Refresh</Button>
      </div>
    </div>
  );
}
