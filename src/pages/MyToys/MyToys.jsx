
import { useContext, useEffect, useState } from 'react';
import banner from '../../assets/detalis.jpg'
import TableCard from '../AllToys/TableCard/TableCard';
import { AuthContext } from '../../Provider/AuthProviders/AuthProviders';
const MyToys = () => {
   const {user} = useContext(AuthContext)
   const [products, setProducts] = useState([]);
   const url = `https://baby-toy.onrender.com/mytoys?email=${user?.email}`
   useEffect(()=>{
      fetch(url, {
         method: "GET",
         headers:{"content-type":"application/json"}
      })
      .then(res=>res.json())
      .then(data=>{
         console.log(data)
         setProducts(data)
      })
   },[url])
   return (
      <div>
          <div className="relative">
            <img src={banner} alt="" />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
               <h2 className="text-5xl text-primary text-center font-medium items-center" >My Toys</h2>
            </div>
         </div>

         <div className="overflow-x-auto sm:px-10 md:px-16 sm:2 md:py-2 mt-10">
            <table className="table">
               {/* head */}
               <thead>
                  <tr className='font-medium text-xl text-black'>
                     <th>Image</th>
                     <th>Toy Name</th>
                     <th>Seller Name</th>
                     <th>Category</th>
                     <th>Sub Category</th>
                     <th>Price</th>
                     <th>Action</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {
                     products.map((product) => <TableCard
                        key={product._id}
                        product={product}
                        mytoys = {true}
                     ></TableCard>)
                  }
               </tbody>

            </table>
         </div>

      </div>
   );
};

export default MyToys;