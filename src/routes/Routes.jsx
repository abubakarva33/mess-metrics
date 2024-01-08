import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import SpinnerMain from "../components/Spinner/SpinnerMain";
// import MainLayout from "../layouts/MainLayout";

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
      {
        path: "/",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/aboutUs",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "/faq",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <FAQ />
          </Suspense>
        ),
      },
      {
        path: "/my-profile",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <MyProfile />
          </Suspense>
        ),
      },
      {
        path: "/notification",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <Notification />
          </Suspense>
        ),
      },
      {
        path: "/helps",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <Help />
          </Suspense>
        ),
      },
      {
        path: "/all-members",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <Members />
          </Suspense>
        ),
      },
      {
        path: "/switch-active-month",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <SwitchActiveMonth />
          </Suspense>
        ),
      },
      {
        path: "/mess-profile",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <MessProfile />
          </Suspense>
        ),
      },
      {
        path: "/phone-book",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <PhoneBook />
          </Suspense>
        ),
      },
      {
        path: "/birthdays",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <Birthdays />
          </Suspense>
        ),
      },
      {
        path: "/request-meal",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <RequestMeal />
          </Suspense>
        ),
      },
      {
        path: "/all-members/:Id",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <SingleMember />
          </Suspense>
        ),
      },
      {
        path: "/active-month-details",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <ActiveMonthDetails />
          </Suspense>
        ),
        children: [
          {
            path: "/active-month-details/meal",
            element: (
              <Suspense fallback={<SpinnerMain />}>
                <ActiveMonthDetails />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/mess-metrics/protected-explore/dashboard",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "/mess-metrics/protected-explore/dashboard/all-users",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <AllUsers />
          </Suspense>
        ),
      },
      {
        path: "/mess-metrics/protected-explore/dashboard/all-admins",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <AllAdmin />
          </Suspense>
        ),
      },
      {
        path: "/mess-metrics/protected-explore/dashboard/all-mess",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <AllMess />
          </Suspense>
        ),
      },
      {
        path: "/mess-metrics/protected-explore/dashboard/all-months",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <AllMonth />
          </Suspense>
        ),
      },
      {
        path: "/add-meal",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <ManagerAuth>
              <AddMeal />
            </ManagerAuth>
          </Suspense>
        ),
      },
      {
        path: "/update-meal",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <ManagerAuth>
              <UpdateMeal />
            </ManagerAuth>
          </Suspense>
        ),
      },
      {
        path: "/add-meal-cost",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <ManagerAuth>
              <AddMealCoast />
            </ManagerAuth>
          </Suspense>
        ),
      },
      {
        path: "/add-shared-cost",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <ManagerAuth>
              <AddSharedOtherCost />
            </ManagerAuth>
          </Suspense>
        ),
      },
      {
        path: "/add-individual-cost",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <ManagerAuth>
              <AddIndividualOtherCost />
            </ManagerAuth>
          </Suspense>
        ),
      },
      {
        path: "/add-member",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <ManagerAuth>
              <AddMember />
            </ManagerAuth>
          </Suspense>
        ),
      },
      {
        path: "/remove-member",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <ManagerAuth>
              <RemoveMember />
            </ManagerAuth>
          </Suspense>
        ),
      },
      {
        path: "/add-members-money",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <ManagerAuth>
              <AddMembersMoney />
            </ManagerAuth>
          </Suspense>
        ),
      },
      {
        path: "/start-new-month",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <ManagerAuth>
              <StartNewMonth />
            </ManagerAuth>
          </Suspense>
        ),
      },
      {
        path: "/delete-old-month",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <ManagerAuth>
              <DeleteOldMonth />
            </ManagerAuth>
          </Suspense>
        ),
      },
      {
        path: "/delete-mess",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <ManagerAuth>
              <DeleteMess />
            </ManagerAuth>
          </Suspense>
        ),
      },
      {
        path: "/change-manager",
        element: (
          <Suspense fallback={<SpinnerMain />}>
            <ManagerAuth>
              <ChangeManager />
            </ManagerAuth>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/user/login",
    element: (
      <Suspense fallback={<SpinnerMain />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/user/register",
    element: (
      <Suspense fallback={<SpinnerMain />}>
        <Register />
      </Suspense>
    ),
  },
  {
    path: "/create-mess",
    element: (
      <Suspense fallback={<SpinnerMain />}>
        <CreateMess />
      </Suspense>
    ),
  },
  {
    path: "/error",
    element: (
      <Suspense fallback={<SpinnerMain />}>
        <ErrorPage />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<SpinnerMain />}>
        <ErrorPage />
      </Suspense>
    ),
  },
]);
