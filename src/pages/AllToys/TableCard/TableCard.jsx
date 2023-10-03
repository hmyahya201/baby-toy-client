import { Link } from "react-router-dom";

const TableCard = ({ product, mytoys }) => {
   const { _id, sellerName, name, category, subCategory, price, quantity, img } = product

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
   }
   
   return (
      <tr className="text-sm text-black">
         <th>
            <div className="avatar">
               <div className="mask mask-squircle w-12 h-12">
                  <img src={img} alt="product" />
               </div>
            </div>
         </th>
         <td>{name}</td>
         <td>{sellerName}</td>
         <td>{category}</td>
         <td>{subCategory}</td>
         <td>{"$" + price}</td>
         <td>{mytoys ? <button onClick={() => document.getElementById('my_modal_3').showModal()} className="btn bg-background text-primary hover:bg-primary hover:text-white">updata</button> : quantity}</td>
         <th>
            {
               mytoys ? <button className="btn bg-background text-primary hover:bg-primary hover:text-white">Delete</button> : <Link to={`/toydetails/${_id}`}><button className="btn bg-background text-primary hover:bg-primary hover:text-white">details</button></Link>
            }
         </th>

         <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
               <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
               </form>
               <h3 className="font-bold text-lg">Hello!</h3>
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
         </dialog>

      </tr>
   );
};

export default TableCard;