import { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";


const Product = () => {
   const [products, setProducts] = useState([]);
   useEffect(()=>{
      fetch('http://localhost:5000/all-toys')
      .then(res=>res.json())
      .then(data=>setProducts(data))
   },[])
   return (
      <div className="sm:px-10 md:px-16 sm:2 md:py-2 mt-10">
         <h2 className="text-center text-4xl text-primary font-medium bg-background p-5 rounded-2xl">Shopping Gallery</h2>
         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {
               products.slice(0, 8).map((product, i)=><ProductCard
               key={i}
               product = {product}
               ></ProductCard>)
            }
         </div>
      </div>
   );
};

export default Product;