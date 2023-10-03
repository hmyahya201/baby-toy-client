import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProviders/AuthProviders";

const ProductCard = ({product}) => {
   const {user} = useContext(AuthContext)
   const {_id, img, name, price, rating} = product
   const alertHandle = ()=>{
      if(!user){
         alert("You have to log in first to view details")
      }
   }
   return (
      <div className="card bg-base-200 shadow-xl sm:w-auto sm:h-auto">
         <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl" />
         </figure>
         <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <div className="flex justify-between mt-2">
               <p>Price:{"$"+price}</p>
               <p className="ml-10">Rating:{rating}</p>
            </div>
            <div className="card-actions">
               <Link  onClick={alertHandle } to={`/toydetails/${_id}`}><button className="btn bg-background text-primary hover:bg-primary hover:text-white">View Details</button></Link>
            </div>
         </div>
      </div>
   );
};

export default ProductCard;