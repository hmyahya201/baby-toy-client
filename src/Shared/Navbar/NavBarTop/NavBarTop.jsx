import logo from '../../../assets/reguler_car-5.jfif'
import {FaPhoneSquare, FaEnvelope, FaSearch} from "react-icons/fa";
const NavBarTop = () => {
   return (
      <div className="bg-background sm:px-10 md:px-16 sm:2 md:py-3 flex justify-between items-center">
         <h2 className="sm:text-2xl md:text-3xl text-primary font-bold">Baby <span><img className='w-12 h-12 inline rounded-full' src={logo} alt="" /></span> Shop</h2>
         <div className='w-2/6 relative'>
            <input className='w-full sm:py-1 md:py-2 rounded-lg px-3' type="text" name="search"/>
            <button type='submit' className='text-background border-2 border-solid border-primary bg-primary sm:py-1 md:py-2 sm:px-3 md:px-5 rounded-lg absolute right-0 top-0 bottom-0'><FaSearch className='text-2xl text-white'/></button>
         </div>
         <div className='sm:hidden lg:block flex items-center text-slate-300 text-sm'>
            <p className='inline'><FaPhoneSquare className='inline'/> 8801625290235</p>
            <p className='pl-5 inline'><FaEnvelope className='inline'/> hmyahya@gmail.com</p>
         </div>
      </div>
   );
};

export default NavBarTop;