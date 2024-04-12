
import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useContext, useEffect } from 'react';
import { FaHeartCirclePlus } from "react-icons/fa6";
import { addEstateToLS, getStoredEstate } from '../../utils/localStorage';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


Estate.propTypes = {
    estate: PropTypes.object
};

function Estate({ estate }) {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
        Aos.init()
    }, [])

    const handleWishList = (id) => {
        const getExistingEstate = getStoredEstate()
        if (!user) {
            navigate('/login')
        }else if (getExistingEstate.includes(id)) {
            Swal.fire('Oops...', 'Already Exist in Wishlist', 'error')
            // alert("Already Exist!")
            console.log('ache');

        } else {
            addEstateToLS(id)
            Swal.fire('Success', 'Added to Wishlist', 'success')
        }
    }



    const { id, image, status, price, estate_title, location, segment_name, area } = estate
    // console.log(estate);
    return (
        <div data-aos="fade-up">
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
                    <div className="card-actions justify-between">
                        <Link to={`details/${id}`}> <button className="btn bg-[#E8751A] text-white">View Property</button></Link>
                        <button onClick={() => handleWishList(id)} className="btn bg-[#41C9E2] text-white">Add wish <span className='text-xl'><FaHeartCirclePlus /></span></button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Estate;