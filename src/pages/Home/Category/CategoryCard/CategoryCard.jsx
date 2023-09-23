
const CategoryCard = ({ category }) => {
   
   return (
      <div className="card w-auto bg-base-200 shadow-xl">
         <figure className="px-10 pt-10">
            <img src={category.img} alt="category-image" className="rounded-xl" />
         </figure>
         <div className="card-body items-center text-center">
            <h2 className="card-title">{category.name}</h2>
         </div>
      </div>
   );
};

export default CategoryCard;