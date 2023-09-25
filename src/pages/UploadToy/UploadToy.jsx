import banner from '../../assets/detalis.jpg'
const UploadToy = () => {
   return (
      <div>
         <div className="relative">
            <img src={banner} alt="" />
            <h2 className="text-6xl text-primary text-center font-medium items-center absolute top-1/2 left-1/2 -translate-x-1/2">Add A Toy</h2>
         </div>
      </div>
   );
};

export default UploadToy;