import { createBrowserRouter } from "react-router-dom";
import { MenusSelect } from "../pages/MenusSelect";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <MenusSelect /> }],
  },
]);
