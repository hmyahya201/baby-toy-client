import { useEffect, useState } from 'react';
import ProductCard from '../Product/ProductCard/ProductCard';

const ShopByCategory = () => {
   const [activeTab, setActiveTab] = useState("sports-car")
   const [products, setProducts] = useState([]);
   console.log('dd', products)

   const handleActiveTab = (tabStatus)=>{
      setActiveTab(tabStatus)
   }

   useEffect(() => {
      fetch(`http://localhost:5000/by-category/${activeTab}`)
         .then(res => res.json())
         .then(data => setProducts(data))
   }, [activeTab])
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {
               products.slice(0, 4).map((product)=><ProductCard
               key={product._id}
               product = {product}
               ></ProductCard>)
            }
         </div>
         </div>
      </div>
   );
};

export default ShopByCategory;