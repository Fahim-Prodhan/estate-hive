import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root/Root";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Details from "../pages/details/Details";

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
          element:<Details></Details>,
          loader:()=>fetch('../estate.json')
        }
      ]
    },
  ]);


export default router;