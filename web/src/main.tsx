import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./i18n/i18n.ts";
import "./index.css";
import { ErrorBoundary } from "./routes/error-boundary/ErrorBoundary.tsx";
import { Home } from "./routes/home/Home.tsx";
import { Background } from "./routes/layouts/background/Background.tsx";
import PlantInfo from "./routes/plant-info/PlantInfo.tsx";
import { plantQueryService } from "./services/plant-query.service.ts";

const router = createBrowserRouter([
  {
    Component: Background,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/plants",
        loader: async () => {
          const plants = await plantQueryService.getAll();
          return { plants };
        },
        lazy: () =>
          import("./routes/plant-map/PlantMap.tsx").then((module) => ({
            Component: module.PlantMap,
          })),
      },
      {
        path: "/plants/:plantId",
        Component: PlantInfo,
        loader: async ({ params }) => {
          const plantId = params.plantId;
          const plant = await plantQueryService.getById(plantId!);
          return { plant };
        },
      },
    ],
    ErrorBoundary: () => <ErrorBoundary />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
