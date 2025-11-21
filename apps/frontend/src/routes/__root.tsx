import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./components/theme-toggle";
import { useAppStore } from "@/lib/store";

function RootComponent() {
  const { sidebarOpen, toggleSidebar } = useAppStore();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card/60 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={toggleSidebar} aria-label="Toggle sidebar">
              {sidebarOpen ? "–" : "+"}
            </Button>
            <Link to="/" className="text-lg font-semibold">
              AI Boilerplate
            </Link>
            <nav className="hidden items-center gap-4 text-sm font-medium sm:flex">
              <Link to="/" activeProps={{ className: "text-primary" }}>
                Dashboard
              </Link>
              <Link to="/about" activeProps={{ className: "text-primary" }}>
                About
              </Link>
            </nav>
          </div>
          <ThemeToggle />
        </div>
      </header>
      <main className="mx-auto flex max-w-5xl flex-1 gap-6 px-6 py-10">
        {sidebarOpen ? (
          <aside className="w-48 rounded-lg border border-border bg-card p-4 text-sm">Sidebar content</aside>
        ) : null}
        <section className="w-full">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
});
