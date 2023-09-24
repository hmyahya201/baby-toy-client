import { useLoaderData } from "react-router-dom";
import banner from '../../assets/detalis.jpg'

const ToyDetails = () => {
   const singleToy = useLoaderData()
   const { img, name, sellerName, sellerEmail, price, rating, quantity, description } = singleToy

   return (
      <div>
         <div className="relative">
            <img src={banner} alt="" />
            <h2 className="text-6xl text-primary text-center font-medium items-center absolute top-1/2 left-1/2 -translate-x-1/2">Product Details</h2>
         </div>

         <div className="min-h-screen bg-base-200 sm:px-10 md:px-16 sm:2 md:py-2">
            <div className="hero-content flex-col lg:flex-row">
               <img src={img} className="max-w-lg rounded-lg shadow-2xl" />
               <div className="flex sm:flex-col md:flex-row">
                  <div className="px-5">
                     <h1 className="text-5xl font-bold text-background">{name}</h1>
                     <p className="py-6 text-2xl">Price: {'$'+ price}</p>
                     <p className="text-2xl">{description}</p>
                     <button className="btn btn-primary mt-3">Order Now</button>
                  </div>
                  <div className="border-l-2 p-5 pt-12">
                     <p className="text-2xl">Raing: {rating}</p>
                     <p className="text-2xl">Quantity: {quantity}</p>
                     <p className="text-2xl">Seller Name: {sellerName}</p>
                     <p className="text-2xl">Seller Email: {sellerEmail}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ToyDetails;