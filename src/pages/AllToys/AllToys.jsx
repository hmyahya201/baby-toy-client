import { useEffect, useState } from 'react';
import banner from '../../assets/detalis.jpg'
import { FaSearch } from "react-icons/fa";
import TableCard from './TableCard/TableCard';
import { useLoaderData } from 'react-router-dom';
const AllToys = () => {
   const { totalItems } = useLoaderData()
   const [products, setProducts] = useState([]);
   const [currentPage, setCurrentPage] = useState(0)
   const itemsPerPage = 10;

   const totalPage = Math.ceil(totalItems / itemsPerPage)
   const pageNumbers = [...Array(totalPage).keys()]

   const handleSeachSubmit = (event) => {
      event.preventDefault()
      const form = event.target
      const toyName = form.toyName.value;
      fetch(`https://baby-toy.onrender.com/gettoybyname/${toyName}`)
         .then(res => res.json())
         .then(data => setProducts(data))
      form.reset()
   }

   useEffect(() => {
      fetch(`https://baby-toy.onrender.com/all-toys?page=${currentPage}&limit=${itemsPerPage}`)
         .then(res => res.json())
         .then(data => setProducts(data))
   }, [currentPage])
   return (
      <div>
         <div className="relative">
            <img src={banner} alt="" />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
               <h2 className="text-5xl text-primary text-center font-medium items-center" >Search By Toy Name</h2>
               <div className='mt-5 relative'>
                  <form onSubmit={handleSeachSubmit}>
                     <input name="toyName" type="text" className='w-full border-2 border-primary py-2 px-5 rounded-lg bg-white text-black text-xl' />
                     <button type='submit' className='bg-primary rounded-lg absolute top-1/2 right-0 -translate-y-1/2 py-3 px-5'><FaSearch className='text-white text-2xl' /></button>
                  </form>
               </div>
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
                     <th>Qunatity</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {
                     products.map((product) => <TableCard
                        key={product._id}
                        product={product}
                     ></TableCard>)
                  }
               </tbody>

            </table>
         </div>

         <div className='text-center'>
            <div className='join'>
               {
                  pageNumbers.map(number => <button
                     key={number}
                     onClick={() => setCurrentPage(number)}
                     className={`join-item px-5 py-2 text-white ${currentPage == number ? "bg-primary" : "bg-background"}`}
                  >{number + 1}</button>)
               }
            </div>
         </div>
      </div>
   );
};

export default AllToys;