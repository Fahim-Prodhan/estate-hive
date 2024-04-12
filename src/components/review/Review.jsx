import Aos from "aos";
import { useEffect } from "react";

const Review = () => {

    useEffect(()=>{
        Aos.init();
    },[])

    return (
        <div className="mb-12">
            <h1 className="font-bold text-4xl text-center pb-8">Customer Review</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                <div className="card card-side bg-base-100 shadow-xl" data-aos="fade-right">
                    <div className="card-body">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://i.ibb.co/PhY5yPp/1.png" />
                            </div>
                        </div>
                        <h2 className="card-title">Clarissa Muir</h2>
                        <p className="text-[10px] text-[#0000009e]">MARCH 15, 2021</p>
                        <p>Your property managers have been active in their response to repairs and always patient with our frustrations. You have always found us wonderful tenants.</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl" data-aos="fade-down">
                    <div className="card-body">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://i.ibb.co/M9d1dzr/3.png" />
                            </div>
                        </div>
                        <h2 className="card-title">Aimee Bradshaw</h2>
                        <p className="text-[10px] text-[#0000009e]">APRIL 4, 2022</p>
                        <p>We recently rented an apartment through your site, and have been looked after by James Thompson. He provided us with utmost support on every property issue.</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl" data-aos="fade-left">
                    <div className="card-body">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://i.ibb.co/4KBGLTQ/4.png" />
                            </div>
                        </div>
                        <h2 className="card-title">Lukasz Mitchell</h2>
                        <p className="text-[10px] text-[#0000009e]">JULY 7, 2021</p>
                        <p>I have always found your team to be extremely prompt and professional with all dealings I have had with them. You always keep me updated on the progress.</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;