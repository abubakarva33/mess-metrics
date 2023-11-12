import { RouterProvider } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner/Spinner";
import { useGetUserProfileQuery } from "./redux/api/sampleApi/userApi";
import { ConfigProvider, Space, theme } from "antd";
import Routes from "./routes/Routes";

function App() {
  const { isLoading } = useGetUserProfileQuery();
  const routes = Routes();

  return (
    <div className="">
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        {isLoading ? <Spinner /> : <RouterProvider router={routes}></RouterProvider>}
      </ConfigProvider>
    </div>
  );
}

export default App;
