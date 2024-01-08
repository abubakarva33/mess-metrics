import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";

import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import SkeletonLoader from "./components/SkeletonLoader/SkeletonLoader.jsx";

// import App from "./App.jsx";
const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<SkeletonLoader />}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
