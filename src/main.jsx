import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n';

import {
 
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import { router } from './Componants/Router/router';


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
