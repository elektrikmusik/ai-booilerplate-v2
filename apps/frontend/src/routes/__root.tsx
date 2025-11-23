import { Outlet, createRootRoute, useLocation } from "@tanstack/react-router";
import { AppLayout } from "@/components/layouts/app-layout";

function RootComponent() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/signin" || location.pathname === "/signup";
  const isHomePage = location.pathname === "/";

  if (isAuthPage || isHomePage) {
    return <Outlet />;
  }

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
});
