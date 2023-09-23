import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Product from "../Product/Product";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Category></Category>
         <Product></Product>
         <ShopByCategory></ShopByCategory>
      </div>
   );
};

export default Home;