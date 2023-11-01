import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "./ErrorPage/ErrorPage";
import Home from "../pages/non-shared/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
    ],
  },
  {
    path: "*",
    element: <ErrorPage/>
  }
]);