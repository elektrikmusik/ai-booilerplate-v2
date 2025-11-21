// This file mimics TanStack Router's file-based route generation for tooling.
import { createRouter } from "@tanstack/react-router";
import { Route as RootRoute } from "./routes/__root";
import { Route as IndexRoute } from "./routes/index";
import { Route as AboutRoute } from "./routes/about";

const routeTree = RootRoute.addChildren([IndexRoute, AboutRoute]);

export { routeTree };
export const router = createRouter({ routeTree });
