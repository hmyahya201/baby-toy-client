import logo from '../../../assets/reguler_car-5.jfif'
const NavBarTop = () => {
   return (
      <div className="bg-background px-16 py-3 flex justify-between items-center">
         <h2 className="text-4xl text-primary font-bold">Baby <span><img className='w-12 h-12 inline rounded-full' src={logo} alt="" /></span> Shop</h2>
         <div className='w-1/2 relative'>
            <input className='w-full py-3 rounded-lg' type="text" name="search"/>
            <button type='submit' className='text-background border-2 border-solid border-primary bg-primary py-3 px-8 rounded-lg absolute right-0'>Search</button>
         </div>
         <div className='flex items-center text-slate-300 text-xl'>
            <p>call: 8801625290235</p>
            <p className='pl-5'>email: hmyahya@gmail.com</p>
         </div>
      </div>
   );
};

export default NavBarTop;