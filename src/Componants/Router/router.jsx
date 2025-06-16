
import {
  createBrowserRouter,

} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import Works from "../Pages/Works/Works";
import Contact from "../Pages/Contact/Contact";
import Catering from "../Pages/Catering/Catering";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {

    path: "/",
    element: <Home></Home>,
        },
        {

    path: "/Our-Works",
    element: <Works></Works>,
        },
        {
          path: "/Contact",
          element: <Contact></Contact>
        },
        {
          path: "/Catering",
          element: <Catering></Catering>

        }
    ]
  },
]);