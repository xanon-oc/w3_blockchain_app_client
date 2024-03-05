import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import DashboardContainer from "../pages/Dashboard/DashboardContainer";
import FaqPage from "../pages/FaqPage";
import SuperAdmin from "./superAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: (
          <SuperAdmin>
            <DashboardContainer />
          </SuperAdmin>
        ),
      },
      {
        path: "/faq",
        element: <FaqPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign_up",
    element: <SignUp />,
  },
]);

export default router;
