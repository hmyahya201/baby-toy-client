
import { Link } from "react-router-dom";
const TableCard = ({ product, mytoys }) => {
   const { _id, sellerName,  name, category, subCategory, price, quantity, img } = product


  

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
         <td>{mytoys ? <Link to={`/updatetoys/${_id}`}><button className="btn bg-background text-primary hover:bg-primary hover:text-white">updata</button></Link> : quantity}</td>
         <th>
            {
               mytoys ? <button className="btn bg-background text-primary hover:bg-primary hover:text-white">Delete</button> : <Link to={`/toydetails/${_id}`}><button className="btn bg-background text-primary hover:bg-primary hover:text-white">details</button></Link>
            }
         </th>
      </tr>
   );
};

export default TableCard;