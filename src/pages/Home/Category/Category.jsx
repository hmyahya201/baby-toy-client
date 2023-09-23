import { useContext } from "react";
import { CategoryContext } from "../../../Provider/CategoryProvider/CategoryProvider";
import CategoryCard from "./CategoryCard/CategoryCard";

const Category = () => {
   const {categories} = useContext(CategoryContext)
   return (
      <div className="sm:px-10 md:px-16 sm:2 md:py-2 mt-10">
         <div className="grid sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-6">
         {
            categories.slice(1, 5).map((category, i)=><CategoryCard
            key= {i}
            category = {category}
            ></CategoryCard>)
         }
         </div>
      </div>
   );
};

export default Category;