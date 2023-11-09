import { RouterProvider } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { routes } from "./routes/Routes";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner/Spinner";
import { useGetUserProfileQuery } from "./redux/api/sampleApi/userApi";

function App() {
  const { isLoading } = useGetUserProfileQuery();

  return (
    <div className="">
      {isLoading ? <Spinner /> : <RouterProvider router={routes}></RouterProvider>}
    </div>
  );
}

export default App;
