import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../pages/Home/Home/Home";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import AllToys from "../pages/AllToys/AllToys";
import UploadToy from "../pages/UploadToy/UploadToy";

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
        path:"alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path:"addtoy",
        element: <UploadToy></UploadToy>,
      }
     ]
   },
 ]);

 export default router