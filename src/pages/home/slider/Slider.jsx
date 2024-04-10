import banner from '../../../assets/images/banner1.jpg'
import banner2 from '../../../assets/images/banner2.jpg'
import banner3 from '../../../assets/images/banner3.jpg'
import 'animate.css';

const Slider = () => {


  return (
    <div className='md:mt-12 relative'>
      <div className='absolute md:w-3/4 top-[25%] md:top-[20%] lg:top-[45%] left-[50%] lg:left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10'>
        <p className='text-white text-[14px] md:text-[16px] lg:text-xl animate__animated animate__fadeInLeft'>We Have Over Million Properties For You</p>
        <h1 className='font-bold text-[24px] md:text-[28px] lg:text-[48px] text-white animate__animated  animate__backInLeft'>Find Your Dream Home</h1>
      </div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full ">
          <img
            src={banner}
            className="w-full rounded-[20px] "
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[50%]">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full ">
          <img
            src={banner2}
            className="w-full rounded-[20px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[50%]">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full ">
          <img
            src={banner3}
            className="w-full rounded-[20px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[50%]">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      {/* Search */}
      <div className='my-4'>
        <div className='relative  md:absolute w-full md:w-3/4 top-[90px] md:top-[65%] left-[50%] lg:left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10'>
          <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-6 py-4 px-3 rounded-lg bg-[#008DDA] md:bg-[#ffffff69] w-full">
            <select className='px-2 rounded-lg h-8 lg:h-full'>
              <option value="">Property Type</option>
            </select>
            <select className='px-2 rounded-lg h-8 lg:h-full'>
              <option className='' value="">Location</option>
            </select>
            <input placeholder='Keyword' className='h-8 lg:h-full pl-3  w-full rounded-lg' type="text" name="" id="" />
            <button className="btn text-white border border-none bg-[#41C9E2]"> Find Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
