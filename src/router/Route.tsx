import { createBrowserRouter } from "react-router-dom";
import { MenusSelect } from "../pages/MenusSelect";
import App from "../App";
import { BreadSelect } from "../pages/BreadSelect";
import { CheeseSelect } from "../pages/CheeseSelect";
import { SauceSelect } from "../pages/SauceSelect";
import { Result } from "../pages/Result";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MenusSelect /> },
      {
        path: "/bread",
        element: <BreadSelect />,
      },
      {
        path: "/cheese",
        element: <CheeseSelect />,
      },
      {
        path: "/sauce",
        element: <SauceSelect />,
      },
      {
        path: "/result",
        element: <Result />,
      },
    ],
  },
]);
