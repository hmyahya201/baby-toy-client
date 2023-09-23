import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
   {
     path: "/",
     element: <LayOut></LayOut>,
     children: [
      {
         path:"/",
         element:<Home></Home>
      }
     ]
   },
 ]);

 export default router