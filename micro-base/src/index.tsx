import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/home";

import { registerMicroApps, start } from "qiankun/es";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "*",
        element: <></>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

const microApps = [
  {
    name: "sub-react",
    entry: "//localhost:3001",
    container: "#sub-app",
    activeRule: "/react",
  },
  {
    name: "sub-vue2",
    entry: "//localhost:3002",
    container: "#sub-app",
    activeRule: "/vue2",
  },
  {
    name: "sub-vue3",
    entry: "//localhost:3003",
    container: "#sub-app",
    activeRule: "/vue3",
  },
  {
    name: "sub-umi",
    entry: "//localhost:3004",
    container: "#sub-app",
    activeRule: "/umi",
  },
];

registerMicroApps(microApps, {
  beforeLoad: [
    async (app) => {
      console.log("before load", app);
    },
  ],
  beforeMount: [
    async (app) => {
      console.log("before mount", app);
    },
  ],
  beforeUnmount: [
    async (app) => {
      console.log("before unmount", app);
    },
  ],
});
debugger;
start();
