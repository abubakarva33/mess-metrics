import { RouterProvider } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner/Spinner";
import { useGetUserProfileQuery } from "./redux/api/sampleApi/userApi";
import { ConfigProvider, Space, theme } from "antd";
// import { routes } from "./routes/Routes";
import { useDispatch } from "react-redux";
import { authRole } from "./redux/features/UserSlice/UserSlice";
import SkeletonLoader from "./components/SkeletonLoader/SkeletonLoader";
import Routes from "./routes/Routes-dump";
import { routes } from "./routes/Routes";

function App() {
  const { isLoading, data } = useGetUserProfileQuery();

  const dispatch = useDispatch();
  // const routes = Routes()

  useEffect(() => {
    dispatch(authRole({ role: data?.data?.role }));
  }, [data?.data?.role]);

  return (
    <div className="">
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <RouterProvider router={routes}></RouterProvider>
        )}
      </ConfigProvider>
    </div>
  );
}

export default App;
