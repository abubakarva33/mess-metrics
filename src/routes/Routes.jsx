import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "./ErrorPage/ErrorPage";
import Home from "../pages/non-shared/Home/Home";
import ContactUs from "../pages/non-shared/ContactUs/ContactUs";
import FAQ from "../pages/non-shared/FAQ/FAQ";
import MyProfile from "../pages/non-shared/MyProfile/MyProfile";
import Notification from "../pages/non-shared/Notification/Notification";
import Help from "../pages/non-shared/Help/Help";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/aboutUs", element: <ContactUs /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/my-profile", element: <MyProfile /> },
      { path: "/notification", element: <Notification /> },
      { path: "/helps", element: <Help /> },
    ],
  },
  {
    path: "*",
    element: <ErrorPage/>
  }
]);