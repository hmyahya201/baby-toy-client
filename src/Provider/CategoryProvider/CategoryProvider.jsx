import { createContext, useEffect, useState } from "react";
export const CategoryContext = createContext()

const CategoryProvider = ({children}) => {
   const [categories, setCatgories] = useState([])
   useEffect(()=>{
      fetch("category.json")
      .then(res=>res.json())
      .then(data=>{
         setCatgories(data)})
   },[])
   const categoryInfo = {
      categories,
   }
   return (
      <CategoryContext.Provider value={categoryInfo}>
         {children}
      </CategoryContext.Provider>
   );
};

export default CategoryProvider;