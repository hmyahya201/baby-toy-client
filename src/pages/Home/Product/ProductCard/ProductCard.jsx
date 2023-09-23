
const ProductCard = ({product}) => {
   console.log("product", product)
   const {img} = product
   return (
      <div className="card w-auto bg-base-200 shadow-xl">
         <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl" />
         </figure>
         <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
               <button className="btn bg-background text-primary hover:bg-primary hover:text-white">Buy Now</button>
            </div>
         </div>
      </div>
   );
};

export default ProductCard;