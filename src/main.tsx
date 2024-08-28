import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import ActivityPage from "./pages/ActivityPage.tsx";
import SettingsPage from "./pages/SettingsPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import PageNotFoundPage from "./pages/PageNotFoundPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "home",
    element: <HomePage />,
    children: [
      {
        path:'',
        element: <Navigate to={'dashboard'}/>,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "activity",
        element: <ActivityPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "*",
        element: <PageNotFoundPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
