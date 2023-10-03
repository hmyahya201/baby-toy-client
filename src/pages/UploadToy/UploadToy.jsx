import { useContext } from 'react';
import banner from '../../assets/detalis.jpg'
import { AuthContext } from '../../Provider/AuthProviders/AuthProviders';
const UploadToy = () => {
   const {user} = useContext(AuthContext)
   const handleUploadToy = event=>{
      event.preventDefault()
      const form = event.target
      const name = form.toyName.value
      const category = form.category.value
      const subCategory = form.subCategory.value
      const price = form.price.value
      const img = form.image.value
      const quantity = form.quantity.value
      const rating = form.rating.value
      const sellerName = form.sellerName.value
      const sellerEmail = form.sellerEmail.value
      const description = form.description.value

      const toyInfo = {
         name, category, subCategory, price, img, quantity, rating, sellerName, sellerEmail, description
      }
      console.log(toyInfo)
      fetch("http://localhost:5000/upload-toy",{
         method:"POST",
         headers: {"content-type": "application/json"},
         body: JSON.stringify(toyInfo)
      })
      .then(res=>res.json())
      .then(data=>{
         if(data.insertedId){
            alert("your product is uploaded")
         }else{
            alert("something is wrong")
         }
      })
   }
   return (
      <div>
         <div className="relative">
            <img src={banner} alt="" />
            <h2 className="text-6xl text-primary text-center font-medium items-center absolute top-1/2 left-1/2 -translate-x-1/2">Add A Toy</h2>
         </div>

         <div className='grid place-items-center mt-10'>
            <form onSubmit={handleUploadToy}>
               <div className="card w-full shadow-2xl bg-base-100">
               <h2 className='text-center py-4 text-background text-3xl font-medium'>Product Info</h2>
                  <div className="card-body">
                     <div className='grid grid-cols-3 gap-6'>

                        <div className="form-control">
                           <label className="label">
                              <span className="label-text">Toy Name</span>
                           </label>
                           <input type="text" name="toyName" placeholder="Toy Name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                           <label className="label">
                              <span className="label-text">Category Name</span>
                           </label>
                           <input type="text" name="category" placeholder="category" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                           <label className="label">
                              <span className="label-text">Sub Category Name</span>
                           </label>
                           <input type="text" name="subCategory" placeholder="sub category" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                           <label className="label">
                              <span className="label-text">Price</span>
                           </label>
                           <input type="text" name="price" placeholder="price" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                           <label className="label">
                              <span className="label-text">Image</span>
                           </label>
                           <input type="url" name="image" placeholder="url" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                           <label className="label">
                              <span className="label-text">Quantity</span>
                           </label>
                           <input type="number" name="quantity" placeholder="quantity" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                           <label className="label">
                              <span className="label-text">Rating</span>
                           </label>
                           <input type="text" name="rating" placeholder="rating" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                           <label className="label">
                              <span className="label-text">Seller Name</span>
                           </label>
                           <input type="text" name="sellerName" placeholder="your name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                           <label className="label">
                              <span className="label-text">Seller Email</span>
                           </label>
                           <input type="email" name="sellerEmail" defaultValue={user?.email} className="input input-bordered" />
                        </div>

                        <div className="form-control">
                           <label className="label">
                              <span className="label-text">Description</span>
                           </label>
                           <textarea name="description" placeholder="about your product" className="textarea textarea-bordered textarea-xs w-full max-w-xs" ></textarea>
                        </div>
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary">upload</button>
                     </div>
                  </div>
               </div>
            </form>

         </div>
      </div>
   );
};

export default UploadToy;