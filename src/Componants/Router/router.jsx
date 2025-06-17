
import {
  createBrowserRouter,

} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import Works from "../Pages/Works/Works";
import Contact from "../Pages/Contact/Contact";
import Catering from "../Pages/Catering/Catering";
import Stages from "../Pages/Events/Stages";
import GetAQuote from "../Pages/GetAQuote/GetAQuote";
import WeddingDecorPage from "../Pages/WeddingDecorPage/WeddingDecorPage";
import EventManagementPage from "../Pages/EventManagement/EventManagementPage";
import WeddingServices from "../Pages/WeddingServices/WeddingServices";

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
 
        },
        
        
    {
          path: "/Weeding-stages",
          element: <Stages></Stages>
 
        },
        {
path: '/get-a-quote',
element: <GetAQuote></GetAQuote>
        },
        {
          path: '/wedding-decor',
          element: <WeddingDecorPage></WeddingDecorPage>
        },
            {
          path: '/event-management',
          element: <EventManagementPage></EventManagementPage>
        },
              {
          path: '/wedding-services',
          element: <WeddingServices></WeddingServices>
        },
    ]
  },
]);