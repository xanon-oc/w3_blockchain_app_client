import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import DashboardContainer from "../pages/Dashboard/DashboardContainer";
import FaqPage from "../pages/FaqPage";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign_up",
        element: <SignUp />,
      },
      {
        path: "/dashboard",
        element: <DashboardContainer />,
      },
      {
        path: "/faq",
        element: <FaqPage />,
      },
    ],
  },
]);

export default router;
