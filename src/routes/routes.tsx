import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RegisterUser from "../pages/Register";
import { RoutePath } from "./paths";

const Router = () => {
  return useRoutes([
    {
      path: RoutePath.HOME,
      element: <Home />,
    },
    {
      path: RoutePath.LOGIN,
      element: <Login />,
    },
    {
      path: RoutePath.RESGISTER,
      element: <RegisterUser />,
    },
  ]);
};

export default Router