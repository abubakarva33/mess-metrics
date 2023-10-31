import { createBrowserRouter } from "react-router-dom";
import Sample from "../pages/non-shared/Sample/Sample";
import Another from "../pages/non-shared/Another/Another";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "./ErrorPage/ErrorPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/sample", element: <Sample /> },
      { path: "/another", element: <Another /> },
    ],
  },
  {
    path: "*",
    element: <ErrorPage/>
  }
]);