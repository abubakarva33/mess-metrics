import { RouterProvider } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useGetUserProfileQuery } from "./redux/api/sampleApi/userApi";
import { ConfigProvider, Space, theme } from "antd";
import { useDispatch } from "react-redux";
import { authRole } from "./redux/features/UserSlice/UserSlice";
import SkeletonLoader from "./components/SkeletonLoader/SkeletonLoader";
import { routes } from "./routes/Routes";
import Swal from "sweetalert2";
import ErrorPage from "./routes/ErrorPage/ErrorPage";

function App() {
  const { isLoading, data } = useGetUserProfileQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!navigator.onLine) {
      Swal.fire({
        icon: "error",
        title: "No Internet Connection!",
        text: "Please make sure your internet connection on and try again",
        confirmButtonText: "Try again",
      }).then(async (result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    }
  }, []);

  useEffect(() => {
    dispatch(authRole({ role: data?.data?.role }));
  }, [data?.data?.role]);

  return (
    <div className="">
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        {isLoading ? <SkeletonLoader /> : <RouterProvider router={routes}></RouterProvider>}
      </ConfigProvider>
    </div>
  );
}

export default App;
