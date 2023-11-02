import { RouterProvider } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { routes } from "./routes/Routes";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
          // Here is my asynchronous operation (e.g., data fetching)
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return <div className="">{loading ? <Spinner /> : <RouterProvider router={routes}></RouterProvider>}</div>;
}

export default App;
