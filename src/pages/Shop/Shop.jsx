import { useEffect, useState } from 'react';
import banner from '../../assets/detalis.jpg'
import ProductCard from '../Home/Product/ProductCard/ProductCard';
const Shop = () => {
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
            <h2 className="text-6xl text-primary text-center font-medium items-center absolute top-1/2 left-1/2 -translate-x-1/2">All Toys</h2>
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

export default Shop;