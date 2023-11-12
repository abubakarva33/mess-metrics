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
import Members from "../pages/non-shared/ManageMembers/Members/Members";
import { useGetUserProfileQuery } from "../redux/api/sampleApi/userApi";
import { useEffect, useState } from "react";
import ManagerAuth from "../components/Auth/ManagerAuth";

const mainLayoutChildInit = [
  { path: "/", element: <Home /> },
  { path: "/aboutUs", element: <ContactUs /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/my-profile", element: <MyProfile /> },
  { path: "/notification", element: <Notification /> },
  { path: "/helps", element: <Help /> },
  { path: "/all-members", element: <Members /> },
  { path: "/switch-active-month", element: <SwitchActiveMonth /> },
  { path: "/mess-profile", element: <MessProfile /> },
];

const Routes = () => {
  const { data, status } = useGetUserProfileQuery();

  const [mainLayoutChild, setMainLayoutChild] = useState(mainLayoutChildInit);

  const managerRoutes = [
    {
      path: "/add-meal",
      element: (
        <ManagerAuth>
          <AddMeal />
        </ManagerAuth>
      ),
    },
    {
      path: "/update-meal",
      element: (
        <ManagerAuth>
          <UpdateMeal />
        </ManagerAuth>
      ),
    },
    {
      path: "/add-meal-cost",
      element: (
        <ManagerAuth>
          <AddMealCoast />
        </ManagerAuth>
      ),
    },
    {
      path: "/add-shared-cost",
      element: (
        <ManagerAuth>
          <AddSharedOtherCost />
        </ManagerAuth>
      ),
    },
    {
      path: "/add-individual-cost",
      element: (
        <ManagerAuth>
          <AddIndividualOtherCost />
        </ManagerAuth>
      ),
    },
    {
      path: "/update-cost",
      element: (
        <ManagerAuth>
          <UpdateMessCost />
        </ManagerAuth>
      ),
    },
    {
      path: "/add-member",
      element: (
        <ManagerAuth>
          <AddMember />
        </ManagerAuth>
      ),
    },
    {
      path: "/remove-member",
      element: (
        <ManagerAuth>
          <RemoveMember />
        </ManagerAuth>
      ),
    },
    {
      path: "/add-members-money",
      element: (
        <ManagerAuth>
          <AddMembersMoney />
        </ManagerAuth>
      ),
    },
    {
      path: "/active-month-details",
      element: (
        <ManagerAuth>
          <ActiveMonthDetails />
        </ManagerAuth>
      ),
    },
    {
      path: "/start-new-month",
      element: (
        <ManagerAuth>
          <StartNewMonth />
        </ManagerAuth>
      ),
    },
    {
      path: "/delete-old-month",
      element: (
        <ManagerAuth>
          <DeleteOldMonth />
        </ManagerAuth>
      ),
    },
    {
      path: "/delete-mess",
      element: (
        <ManagerAuth>
          <DeleteMess />
        </ManagerAuth>
      ),
    },
    {
      path: "/change-manager",
      element: (
        <ManagerAuth>
          <ChangeManager />
        </ManagerAuth>
      ),
    },
  ];

  useEffect(() => {
    if (status === "fulfilled" && data?.data?.role === "manager") {
      setMainLayoutChild([...mainLayoutChildInit, ...managerRoutes]);
    } else {
      setMainLayoutChild(mainLayoutChildInit);
    }
  }, [data]);

  const routes = [
    {
      path: "/",
      element: <MainLayout />,
      children: mainLayoutChild,
    },
    { path: "/user/login", element: <Login /> },
    { path: "/user/register", element: <Register /> },
    { path: "/create-mess", element: <CreateMess /> },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  return createBrowserRouter(routes);
};

export default Routes;
