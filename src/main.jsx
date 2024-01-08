import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";
import "./pages/non-shared/ManageMembers/SingleMember/SingleMember.css";
import "./pages/non-shared/PhoneBook/PhoneBook.css";
import "./components/Spinner/Spinner.css";
import "./pages/non-shared/ManageMessCost/AddMessCost/AddMealCost/AddMealCost.css";

import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import SpinnerMain from "./components/Spinner/SpinnerMain.jsx";

// import App from "./App.jsx";
const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<></>}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
