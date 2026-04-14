import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import { AddTree } from "./pages/AddTree";
import { MapView } from "./pages/MapView";
import { TreeDetails } from "./pages/TreeDetails";
import { AdminDashboard } from "./pages/AdminDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/app",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "add-tree",
        element: <AddTree />,
      },
      {
        path: "map",
        element: <MapView />,
      },
      {
        path: "tree/:id",
        element: <TreeDetails />,
      },
      {
        path: "admin",
        element: <AdminDashboard />,
      },
    ],
  },
]);
