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
        loader:({params})=>fetch(`http://localhost:5000/toydetails/${params.id}`)
      },
      {
        path:"shop",
        element: <Shop></Shop>,
      },
      {
        path:"alltoys",
        element: <AllToys></AllToys>,
        loader: ()=>fetch("http://localhost:5000/totaltoys")
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
      }
     ]
   },
 ]);

 export default router