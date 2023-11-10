import { RouterProvider } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { routes } from "./routes/Routes";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner/Spinner";
import { useGetUserProfileQuery } from "./redux/api/sampleApi/userApi";
import { ConfigProvider, Space, theme } from "antd";

function App() {
  const { isLoading } = useGetUserProfileQuery();

  return (
    <div className="">
      <ConfigProvider
        theme={{
          // 1. Use dark algorithm
          algorithm: theme.darkAlgorithm,

          // 2. Combine dark algorithm and compact algorithm
          // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
        }}
      >
        {isLoading ? <Spinner /> : <RouterProvider router={routes}></RouterProvider>}
      </ConfigProvider>

      {/* {isLoading ? <Spinner /> : <RouterProvider router={routes}></RouterProvider>} */}
    </div>
  );
}

export default App;
