import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { CategoryContext } from "../../../Provider/CategoryProvider/CategoryProvider";
import { Link } from "react-router-dom";
const NavBarBottom = () => {
   const {categories} = useContext(CategoryContext)
   return (
      <div className="flex items-center justify-between sm:px-10 md:px-16 sm:2 md:py-2 bg-primary">
         <div className="w-60">
            <select className="select select-bordered w-full max-w-xs bg-background text-black md:text-xl sm:text-sm">
               {
                  categories? categories.map((category, i) => <option key={i} value={category.name}>{category.name}</option>):""
               }
            </select>
         </div>
         <div className="sm:hidden lg:block">
            <ul className="flex me-36 text-white text-xl font-medium">
              <Link to="/" className="px-3 py-2 cursor-pointer">Home</Link>
              <Link to="shop" className="px-3 py-2 cursor-pointer">Shop</Link>
              <Link to="alltoys" className="px-3 py-2 cursor-pointer">All Toys</Link>
              <Link to="/" className="px-3 py-2 cursor-pointer">My Toys</Link>
              <Link to="addtoy" className="px-3 py-2 cursor-pointer">Add A Toy</Link>
              <Link to="/" className="px-3 py-2 cursor-pointer">Blogs</Link>
            </ul>
         </div>
         <div className="flex">
            <div className="relative">
            <FaCartPlus className="text-background text-2xl mt-2 z-10"/>
            <span className="absolute -mt-10 ml-4 text-white text-xl font-medium">0</span>
            </div>
            <div className="avatar online sm:hidden lg:block ml-10">
               <div className="w-10 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
               </div>
            </div>
            <div className="lg:hidden ml-10"><FaBars className="text-2xl mt-1 text-background"/></div>
         </div>
      </div>
   );
};

export default NavBarBottom;