import React from "react";
import { createBrowserRouter } from "react-router-dom";

const MainLayout = React.lazy(() => import("../layouts/MainLayout"));
const ErrorPage = React.lazy(() => import("./ErrorPage/ErrorPage"));
const Home = React.lazy(() => import("../pages/non-shared/Home/Home"));
const ContactUs = React.lazy(() =>
  import("../pages/non-shared/ContactUs/ContactUs")
);
const FAQ = React.lazy(() => import("../pages/non-shared/FAQ/FAQ"));
const MyProfile = React.lazy(() =>
  import("../pages/non-shared/MyProfile/MyProfile")
);
const Notification = React.lazy(() =>
  import("../pages/non-shared/Notification/Notification")
);
const Help = React.lazy(() => import("../pages/non-shared/Help/Help"));
const AddMeal = React.lazy(() =>
  import("../pages/non-shared/ManageMeal/AddMeal/AddMeal")
);
const UpdateMeal = React.lazy(() =>
  import("../pages/non-shared/ManageMeal/UpdateMeal/UpdateMeal")
);
const AddMealCoast = React.lazy(() =>
  import(
    "../pages/non-shared/ManageMessCost/AddMessCost/AddMealCost/AddMealCost"
  )
);
const AddSharedOtherCost = React.lazy(() =>
  import(
    "../pages/non-shared/ManageMessCost/AddMessCost/AddSharedOtherCost/AddSharedOtherCost"
  )
);
const AddIndividualOtherCost = React.lazy(() =>
  import(
    "../pages/non-shared/ManageMessCost/AddMessCost/AddIndividualOtherCost/AddIndividualOtherCost"
  )
);
const UpdateMessCost = React.lazy(() =>
  import("../pages/non-shared/ManageMessCost/UpdateMessCost/UpdateMessCost")
);
const AddMember = React.lazy(() =>
  import("../pages/non-shared/ManageMembers/AddMember/AddMember")
);
const RemoveMember = React.lazy(() =>
  import("../pages/non-shared/ManageMembers/RemoveMember/RemoveMember")
);
const AddMembersMoney = React.lazy(() =>
  import("../pages/non-shared/ManageMembers/AddMembersMoney/AddMembersMoney")
);
const ActiveMonthDetails = React.lazy(() =>
  import(
    "../pages/non-shared/ManageMonths/ActiveMonthDetails/ActiveMonthDetails"
  )
);
const SwitchActiveMonth = React.lazy(() =>
  import("../pages/non-shared/ManageMonths/SwitchActiveMonth/SwitchActiveMonth")
);
const StartNewMonth = React.lazy(() =>
  import("../pages/non-shared/ManageMonths/StartNewMonth/StartNewMonth")
);
const DeleteOldMonth = React.lazy(() =>
  import("../pages/non-shared/ManageMonths/DeleteOldMonth/DeleteOldMonth")
);
const MessProfile = React.lazy(() =>
  import("../pages/non-shared/ManageMess/MessProfile/MessProfile")
);
const DeleteMess = React.lazy(() =>
  import("../pages/non-shared/ManageMess/DeleteMess/DeleteMess")
);
const ChangeManager = React.lazy(() =>
  import("../pages/non-shared/ManageMess/ChangeManager/ChangeManager")
);
const Login = React.lazy(() => import("../pages/non-shared/Login/Login"));
const Register = React.lazy(() =>
  import("../pages/non-shared/Register/Register")
);
const CreateMess = React.lazy(() =>
  import("../pages/non-shared/CreateMess/CreateMess")
);
const Members = React.lazy(() =>
  import("../pages/non-shared/ManageMembers/Members/Members")
);
const ManagerAuth = React.lazy(() => import("../components/Auth/ManagerAuth"));
const Birthdays = React.lazy(() =>
  import("../pages/non-shared/Birthdays/Birthdays")
);
const PhoneBook = React.lazy(() =>
  import("../pages/non-shared/PhoneBook/PhoneBook")
);
const RequestMeal = React.lazy(() =>
  import("../pages/non-shared/RequestMeal/RequestMeal")
);
const SingleMember = React.lazy(() =>
  import("../pages/non-shared/ManageMembers/SingleMember/SingleMember")
);
const Dashboard = React.lazy(() =>
  import("../pages/adminPanel/Dashboard/Dashboard")
);
const AllUsers = React.lazy(() =>
  import("../pages/adminPanel/AllUsers/AllUsers")
);
const AllAdmin = React.lazy(() =>
  import("../pages/adminPanel/AllAdmin/AllAdmin")
);
const AllMess = React.lazy(() => import("../pages/adminPanel/AllMess/AllMess"));
const AllMonth = React.lazy(() =>
  import("../pages/adminPanel/AllMonth/AllMonth")
);

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
      { path: "/all-members", element: <Members /> },
      { path: "/switch-active-month", element: <SwitchActiveMonth /> },
      { path: "/mess-profile", element: <MessProfile /> },
      { path: "/phone-book", element: <PhoneBook /> },
      { path: "/birthdays", element: <Birthdays /> },
      { path: "/request-meal", element: <RequestMeal /> },
      { path: "/all-members/:Id", element: <SingleMember /> },
      {
        path: "/active-month-details",
        element: <ActiveMonthDetails />,
        children: [
          {
            path: "/active-month-details/meal",
            element: <ActiveMonthDetails />,
          },
        ],
      },
      {
        path: "/mess-metrics/protected-explore/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/mess-metrics/protected-explore/dashboard/all-users",
        element: <AllUsers />,
      },
      {
        path: "/mess-metrics/protected-explore/dashboard/all-admins",
        element: <AllAdmin />,
      },
      {
        path: "/mess-metrics/protected-explore/dashboard/all-mess",
        element: <AllMess />,
      },
      {
        path: "/mess-metrics/protected-explore/dashboard/all-months",
        element: <AllMonth />,
      },
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
      // {
      //   path: "/update-cost",
      //   element: (
      //     <ManagerAuth>
      //       <UpdateMessCost />
      //     </ManagerAuth>
      //   ),
      // },
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
    ],
  },
  { path: "/user/login", element: <Login /> },
  { path: "/user/register", element: <Register /> },
  { path: "/create-mess", element: <CreateMess /> },
  {
    path: "/error",
    element: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
