import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./i18n/i18n.ts";
import "./index.css";
import { Background } from "./routes/layouts/background/Background.tsx";
import { Home } from "./routes/home/Home.tsx";

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
        // todo: add loader for plants data
        lazy: () =>
          import("./routes/plant-list/PlantList.tsx").then((module) => ({
            Component: module.PlantList,
          })),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
