import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root/Root";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Details from "../pages/details/Details";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/updateProfile/UpdateProfile";
import UserProfile from "../pages/userProfile/UserProfile";
import ErrorElement from "../pages/errorElement/ErrorElement";
import Wishlist from "../pages/wishList/Wishlist";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorElement></ErrorElement>,
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
          path:"/user-profile",
          element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>
        },
        {
          path:'/details/:id',
          element:<PrivateRoute><Details></Details></PrivateRoute>,
          loader:()=>fetch('../estate.json')
        },
        {
          path:'update-profile',
          element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        },
        {
          path:'wishlist',
          element:<PrivateRoute><Wishlist></Wishlist></PrivateRoute>,
          loader:()=>fetch('../estate.json')
        }
      ]
    },
  ]);


export default router;