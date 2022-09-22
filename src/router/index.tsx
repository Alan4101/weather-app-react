import {
  createBrowserRouter,
} from "react-router-dom";
import { App } from "../App";
import { Cities } from "../pages";
import { ErrorPage404 } from "../pages/ErrorPage404/ErrorPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage404/>
  },
  {
    path: 'cities',
    element: <Cities/>,
    errorElement: <ErrorPage404/>
  }
])