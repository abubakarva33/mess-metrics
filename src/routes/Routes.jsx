import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "./ErrorPage/ErrorPage";
import Home from "../pages/non-shared/Home/Home";
import ContactUs from "../pages/non-shared/ContactUs/ContactUs";
import FAQ from "../pages/non-shared/FAQ/FAQ";
import MyProfile from "../pages/non-shared/MyProfile/MyProfile";
import Notification from "../pages/non-shared/Notification/Notification";
import Help from "../pages/non-shared/Help/Help";
import AddMeal from "../pages/non-shared/ManageMeal/AddMeal/AddMeal";
import UpdateMeal from "../pages/non-shared/ManageMeal/UpdateMeal/UpdateMeal";
import AddMealCoast from "../pages/non-shared/ManageMessCost/AddMessCost/AddMealCost/AddMealCost";
import AddSharedOtherCost from "../pages/non-shared/ManageMessCost/AddMessCost/AddSharedOtherCost/AddSharedOtherCost";
import AddIndividualOtherCost from "../pages/non-shared/ManageMessCost/AddMessCost/AddIndividualOtherCost/AddIndividualOtherCost";
import UpdateMessCost from "../pages/non-shared/ManageMessCost/UpdateMessCost/UpdateMessCost";
import AddMember from "../pages/non-shared/ManageMembers/AddMember/AddMember";
import RemoveMember from "../pages/non-shared/ManageMembers/RemoveMember/RemoveMember";
import AllMembers from "../pages/non-shared/ManageMembers/AllMembers/AllMembers";
import AddMembersMoney from "../pages/non-shared/ManageMembers/AddMembersMoney/AddMembersMoney";
import ActiveMonthDetails from "../pages/non-shared/ManageMonths/ActiveMonthDetails/ActiveMonthDetails";
import SwitchActiveMonth from "../pages/non-shared/ManageMonths/SwitchActiveMonth/SwitchActiveMonth";
import StartNewMonth from "../pages/non-shared/ManageMonths/StartNewMonth/StartNewMonth";
import DeleteOldMonth from "../pages/non-shared/ManageMonths/DeleteOldMonth/DeleteOldMonth";
import MessProfile from "../pages/non-shared/ManageMess/MessProfile/MessProfile";
import DeleteMess from "../pages/non-shared/ManageMess/DeleteMess/DeleteMess";
import ChangeManager from "../pages/non-shared/ManageMess/ChangeManager/ChangeManager";
import Login from "../pages/non-shared/Login/Login";
import Register from "../pages/non-shared/Register/Register";
import CreateMess from "../pages/non-shared/CreateMess/CreateMess";



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
      { path: "/add-meal", element: <AddMeal /> },
      { path: "/update-meal", element: <UpdateMeal /> },
      { path: "/add-meal-cost", element: <AddMealCoast /> },
      { path: "/add-shared-cost", element: <AddSharedOtherCost /> },
      { path: "/add-individual-cost", element: <AddIndividualOtherCost /> },
      { path: "/update-cost", element: <UpdateMessCost /> },
      { path: "/add-member", element: <AddMember /> },
      { path: "/remove-member", element: <RemoveMember /> },
      { path: "/all-members", element: <AllMembers /> },
      { path: "/add-members-money", element: <AddMembersMoney /> },
      { path: "/active-month-details", element: <ActiveMonthDetails /> },
      { path: "/switch-active-month", element: <SwitchActiveMonth /> },
      { path: "/start-new-month", element: <StartNewMonth /> },
      { path: "/delete-old-month", element: <DeleteOldMonth /> },
      { path: "/mess-profile", element: <MessProfile /> },
      { path: "/delete-mess", element: <DeleteMess /> },
      { path: "/delete-mess", element: <DeleteMess /> },
    ],
  },
  { path: "/user/login", element: <Login /> },
  { path: "/user/register", element: <Register /> },
  { path: "/create-mess", element: <CreateMess /> },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
