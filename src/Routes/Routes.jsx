import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <div><Main></Main></div>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        }
      ]
    },
  ]);