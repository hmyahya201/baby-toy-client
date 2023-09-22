import logo from '../../../assets/reguler_car-5.jfif'
const NavBarTop = () => {
   return (
      <div className="bg-background sm:px-10 md:px-16 sm:2 md:py-3 flex justify-between items-center">
         <h2 className="sm:text-2xl md:text-3xl text-primary font-bold">Baby <span><img className='w-12 h-12 inline rounded-full' src={logo} alt="" /></span> Shop</h2>
         <div className='w-2/6 relative'>
            <input className='w-full sm:py-1 md:py-2 rounded-lg' type="text" name="search"/>
            <button type='submit' className='text-background border-2 border-solid border-primary bg-primary sm:py-1 md:py-2 sm:px-3 md:px-5 rounded-lg absolute right-0 top-0 bottom-0'>Search</button>
         </div>
         <div className='sm:hidden md:flex md:items-centertext-slate-300 md:text-sm'>
            <p>call: 8801625290235</p>
            <p className='pl-5'>email: hmyahya@gmail.com</p>
         </div>
      </div>
   );
};

export default NavBarTop;