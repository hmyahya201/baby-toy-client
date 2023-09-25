import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../pages/Home/Home/Home";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import Shop from "../pages/Shop/Shop";
import UploadToy from "../pages/UploadToy/UploadToy";
import AllToys from "../pages/AllToys/AllToys";


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
        element: <ToyDetails></ToyDetails>,
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
        element: <UploadToy></UploadToy>,
      }
     ]
   },
 ]);

 export default router