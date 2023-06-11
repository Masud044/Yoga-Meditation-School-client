import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import AllInstructor from "../pages/shared/AllInstructor/AllInstructor";
import AllClasses from "../pages/shared/AllClasses/AllClasses";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layouts/Dashboard";
import MyClass from "../pages/Dashboard/MyClass/MyClass";
import Payment from "../pages/Dashboard/Payment/Payment";
import ManageUser from "../pages/Dashboard/ManageUser/ManageUser";
import AddClass from "../pages/Dashboard/AddClass/AddClass";

import InstructorClass from "../pages/Dashboard/InstructorClass/InstructorClass";
import ManageClass from "../pages/Dashboard/ManageClass/ManageClass";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import EnrollClass from "../pages/Dashboard/EnrollClass/EnrollClass";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";


export const router = createBrowserRouter([
   {
     path:'*',
     element:<NotFoundPage></NotFoundPage>
   },
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
      element:<Dashboard></Dashboard>,
      children:[
         {
          path:'myclass',
          element:<MyClass></MyClass>
         },
         {
           path:'history',
           element:<PaymentHistory></PaymentHistory>
         },
         {
          path:'enroll',
          element:<EnrollClass></EnrollClass>
         },
         {
          path:'payment',
          element:<Payment></Payment>
         },
         {
          path:'manageuser',
          element:<ManageUser></ManageUser>
         },
         {
         path:'manageclass',
         element:<ManageClass></ManageClass>
         },
         {
          path:'addclass',
          element:<AddClass></AddClass>
         },
         {
          path:'instructorclass',
          element:<InstructorClass></InstructorClass>
         }
       
      ]
    }
  ]);