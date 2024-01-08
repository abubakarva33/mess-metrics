import { RouterProvider } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { useGetUserProfileQuery } from "./redux/api/sampleApi/userApi";
import { ConfigProvider, theme } from "antd";
import { useDispatch } from "react-redux";
import { authRole } from "./redux/features/UserSlice/UserSlice";
import { routes } from "./routes/Routes";
import Swal from "sweetalert2";

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
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      {isLoading ? (
        // <SpinnerMain />
        <></>
      ) : (
        <RouterProvider router={routes}></RouterProvider>
      )}
    </ConfigProvider>
  );
}

export default App;
