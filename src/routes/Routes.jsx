import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root/Root";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Details from "../pages/details/Details";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/updateProfile/UpdateProfile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:'/details/:id',
          element:<PrivateRoute><Details></Details></PrivateRoute>,
          loader:()=>fetch('../estate.json')
        },
        {
          path:'update-profile',
          element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        }
      ]
    },
  ]);


export default router;