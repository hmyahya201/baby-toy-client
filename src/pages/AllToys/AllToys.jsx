import { useEffect, useState } from 'react';
import banner from '../../assets/detalis.jpg'
import ProductCard from '../Home/Product/ProductCard/ProductCard';
const AllToys = () => {
   const [products, setProducts] = useState([]);
   useEffect(()=>{
      fetch('http://localhost:5000/all-toys')
      .then(res=>res.json())
      .then(data=>setProducts(data))
   },[])
   return (
      <div>
          <div className="relative">
            <img src={banner} alt="" />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2'>
            <h2 className="text-6xl text-primary text-center font-medium items-center" >All Toys</h2>
            <div className='mt-5 relative'>
            <input type="text" className='w-auto py-2 px-5 rounded-lg bg-background text-white text-xl' />
            <button className='bg-primary rounded-lg absolute top-1/2 right-0 -translate-y-1/2 py-2 px-5'>Search</button>
            </div>
            </div>
         </div>
         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {
               products.map((product)=><ProductCard
               key={product._id}
               product = {product}
               ></ProductCard>)
            }
         </div>
      </div>
   );
};

export default AllToys;