import { Link } from 'react-router-dom';
import banner1 from '../../../assets/banner1.png'
import banner2 from '../../../assets/banner2.png'
import banner3 from '../../../assets/banner3.png'
const Banner = () => {
   return (
      <div className="carousel w-full">
         <div id="slide1" className="carousel-item relative w-full">
            <img src={banner1} className="w-full" />
            <div className='absolute top-1/2 mt-5 -translate-y-1/2 left-20'>
               <h2 className='my-0 sm:tex-3xl md:text-4xl lg:text-5xl text-background w-1/2 -translate-y-1/2 font-medium'>Rev up the Fun with our Exciting Toy Car Collection!</h2>
               <div className='sm:-mt-8 lg:-mt-12'>
               <Link to="/alltoys"><button className='top-8 sm:py-1 sm:px-5 md:py-2 md:px-7 lg:py-3 lg:px-10 rounded-lg bg-background text-white hover:text-primary transition-colors'>Explore Now</button></Link>
               </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
               <a href="#slide3" className="btn btn-circle bg-primary">❮</a>
               <a href="#slide2" className="btn btn-circle bg-primary">❯</a>
            </div>
         </div>
         <div id="slide2" className="carousel-item relative w-full">
            <img src={banner2} className="w-full" />

            <div className='absolute top-1/2 mt-5 -translate-y-1/2 left-20'>
               <h2 className='my-0 sm:tex-3xl md:text-4xl lg:text-5xl text-background w-1/2 -translate-y-1/2 font-medium'>Discover the Ultimate Toy Car Adventure for Kids!</h2>
               <div className='sm:-mt-8 lg:-mt-12'>
              <Link to="/alltoys"> <button className='top-8 sm:py-1 sm:px-5 md:py-2 md:px-7 lg:py-3 lg:px-10 rounded-lg bg-background text-white hover:text-primary transition-colors'>Explore Now</button></Link>
               </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
               <a href="#slide1" className="btn btn-circle bg-primary">❮</a>
               <a href="#slide3" className="btn btn-circle bg-primary">❯</a>
            </div>
         </div>
         <div id="slide3" className="carousel-item relative w-full">
            <img src={banner3} className="w-full" />

            <div className='absolute top-1/2 mt-5 -translate-y-1/2 left-20'>
               <h2 className='my-0 sm:tex-3xl md:text-4xl lg:text-5xl text-background w-1/2 -translate-y-1/2 font-medium'>Unleash Joy with Our Spectacular Toy Car Selection!!</h2>
               <div className='sm:-mt-8 lg:-mt-12'>
               <Link to="/alltoys"><button className='top-8 sm:py-1 sm:px-5 md:py-2 md:px-7 lg:py-3 lg:px-10 rounded-lg bg-background text-white hover:text-primary transition-colors'>Explore Now</button></Link>
               </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
               <a href="#slide2" className="btn btn-circle bg-primary">❮</a>
               <a href="#slide1" className="btn btn-circle bg-primary">❯</a>
            </div>
         </div>
      </div>
   );
};

export default Banner;