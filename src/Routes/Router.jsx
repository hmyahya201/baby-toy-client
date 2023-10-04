import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../pages/Home/Home/Home";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import Shop from "../pages/Shop/Shop";
import UploadToy from "../pages/UploadToy/UploadToy";
import AllToys from "../pages/AllToys/AllToys";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRout";
import MyToys from "../pages/MyToys/MyToys";
import UpDateToys from "../pages/MyToys/UpDateToys/UpDateToys";
import Blog from "../pages/Blog/Blog";


const router = createBrowserRouter([
   {
     path: "/",
     element: <LayOut></LayOut>,
     children: [
      {
         path:"/",
         element:<Home></Home>
      },
      {
        path:"toydetails/:id",
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://baby-toy.onrender.com/toydetails/${params.id}`)
      },
      {
        path:"shop",
        element: <Shop></Shop>,
      },
      {
        path:"alltoys",
        element: <AllToys></AllToys>,
        loader: ()=>fetch("https://baby-toy.onrender.com/totaltoys")
      },
      {
        path:"addtoy",
        element: <PrivateRoute><UploadToy></UploadToy></PrivateRoute>,
      },
      {
        path:"login",
        element: <Login></Login>,
      },
      {
        path:"signup",
        element: <SignUp></SignUp>,
      },
      {
        path:"mytoys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
      },
      {
        path:"blogs",
        element: <Blog></Blog>,
      },
      {
        path:"updatetoys/:id",
        element: <UpDateToys></UpDateToys>,
        loader : ({params})=>fetch(`https://baby-toy.onrender.com/toyinfo/${params.id}`)
      }
     ]
   },
 ]);

 export default router