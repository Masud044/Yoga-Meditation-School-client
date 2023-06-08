import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import AllInstructor from "../pages/shared/AllInstructor/AllInstructor";
import AllClasses from "../pages/shared/AllClasses/AllClasses";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'instructor',
          element:<AllInstructor></AllInstructor>
        },
        {
          path:'class',
          element:<AllClasses></AllClasses>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        }

        
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>
    }
  ]);