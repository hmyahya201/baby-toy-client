
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const LayOut = () => {
   return (
      <div>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <div>Footr</div>
      </div>
   );
};

export default LayOut;