import { createBrowserRouter } from "react-router-dom";
import { MenusSelect } from "../pages/MenusSelect";
import App from "../App";
import { BreadSelect } from "../pages/BreadSelect";
import { CheeseSelect } from "../pages/CheeseSelect";
import { SauceSelect } from "../pages/SauceSelect";
import { Result } from "../pages/Result";

const BASE_URL = import.meta.env.BASE_URL;

export const router = createBrowserRouter([
  {
    path: `${BASE_URL}/`,
    element: <App />,
    children: [
      { path: `${BASE_URL}/`, element: <MenusSelect /> },
      {
        path: `${BASE_URL}/bread`,
        element: <BreadSelect />,
      },
      {
        path: `${BASE_URL}/cheese`,
        element: <CheeseSelect />,
      },
      {
        path: `${BASE_URL}/sauce`,
        element: <SauceSelect />,
      },
      {
        path: `${BASE_URL}/result`,
        element: <Result />,
      },
    ],
  },
]);
