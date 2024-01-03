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

function App() {
  const { isLoading, data } = useGetUserProfileQuery();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  console.log({ isOnline, navi: navigator.onLine });

  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    console.log({ isOnline });

    if (isOnline) {
      Toast.fire({
        icon: "success",
        title: `You are connected`,
      });
    } else {
      Toast.fire({
        icon: "error",
        title: `You are not connected`,
      });
    }
  }, [isOnline]);
  const dispatch = useDispatch();

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
