import { useEffect, useState } from 'react';

const ShopByCategory = () => {
   const [activeTab, setActiveTab] = useState("sports-car")
   console.log('dd', activeTab)

   const handleActiveTab = (tabStatus)=>{
      setActiveTab(tabStatus)
   }

   useEffect(() => {
      fetch('product.json')
         .then(res => res.json())
         .then(data => setActiveTab(data))
   }, [])
   return (
      <div className='bg-slate-50'>
         <div className='sm:px-10 md:px-16 sm:2 md:py-2 mt-10 text-center'>
            <h2 className='text-4xl text-primary font-medium py-10'>Shop By Category</h2>
            <div className='flex sm:flex-row  gap-3 justify-center'>
               <button onClick={()=>handleActiveTab("sports-car")}  className={` py-2 px-5 rounded-md text-xl text-white hover:bg-primary ${activeTab == "sports-car"?"bg-primary":"bg-background"}`}>Sports Car</button>

               <button onClick={()=>handleActiveTab("truck")}  className={` py-2 px-5 rounded-md text-xl text-white hover:bg-primary ${activeTab == "truck"?"bg-primary":"bg-background"}`}>Truck</button>

               <button onClick={()=>handleActiveTab("regular-car")}  className={` py-2 px-5 rounded-md text-xl text-white hover:bg-primary ${activeTab == "regular-car"?"bg-primary":"bg-background"}`}>Regular Car</button>

               <button onClick={()=>handleActiveTab("fire-truck")}  className={` py-2 px-5 rounded-md text-xl text-white hover:bg-primary ${activeTab == "fire-truck"?"bg-primary":"bg-background"}`}>Fire Truck</button>

               <button onClick={()=>handleActiveTab("police-car")}  className={` py-2 px-5 rounded-md text-xl text-white hover:bg-primary ${activeTab == "police-car"?"bg-primary":"bg-background"}`}>Police Car</button>
            </div>
         </div>
      </div>
   );
};

export default ShopByCategory;