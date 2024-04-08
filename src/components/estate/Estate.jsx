
import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

Estate.propTypes = {
    estate: PropTypes.object
};

function Estate({ estate }) {   
    useEffect(()=>{
        Aos.init()
    },[])

    const { id, image, status, price, estate_title, location, segment_name, area } = estate
    // console.log(estate);
    return (
        <div  data-aos="fade-up">
            <div className="card bg-[#fffaf265] shadow-xl">
                <div className='relative'>
                    <figure className="">
                        <img src={image} alt="Shoes" className="rounded-lg" />
                        <div className='absolute top-1 right-1 bg-[#FDA403] text-[#ffff] px-4 rounded-md'>
                            <p>{status}</p>
                        </div>
                        <div className='absolute bottom-1 left-1 bg-[#00b5a5] text-white px-4 rounded-md'>
                            <p>{price}</p>
                        </div>
                    </figure>
                </div>
                <div className="card-body ">
                    <div>
                        <h2 className="card-title pb-1">{estate_title}</h2>
                        <p className='flex gap-2 items-center'><span><CiLocationOn /></span>{location}</p>
                    </div>

                    <div className='flex justify-between items-center'>
                        <p className='text-[#00b5a5]'>#{segment_name}</p>
                        <button className="bg-[#d9d9d9] text-[#585858] px-4 py-1 rounded-md">{area}</button>
                    </div>
                    <div className='my-4'>
                        <hr />
                    </div>
                    <div className="card-actions ">
                        <Link to={`details/${id}`}> <button className="btn bg-[#E8751A] text-white">View Property</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Estate;