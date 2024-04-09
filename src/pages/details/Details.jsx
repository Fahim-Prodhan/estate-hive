import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {

    const estates = useLoaderData()
    const { id } = useParams()
    const intId = parseInt(id)

    const estate = estates.find(estate => estate.id === intId)
    console.log(estate);

    return (
        <div className="grid grid-cols-1 gap-6 my-12 ">
            <div className="bg-[#39393917] grid items-center justify-center p-9 ">
                <img className="w-[560px] rounded-lg" src={estate.image} alt="" />
            </div>
            <div>
                <h1 className="font-bold text-5xl">{estate.estate_title}</h1>
                <p className="text-xl text-[#00b5a5]">#{estate.segment_name}</p>
                <div className="my-6"><hr /></div>
                <div className="flex gap-2">
                <p className="font-bold text-xl">Facilities:</p>
                <div className="flex gap-4 items-center text-[#E8751A]"> {estate.facilities.map((facility,index)=> <p key={index}>{facility}</p>)}</div>
                </div>
                <div className="my-6"><hr /></div>
                <p><span className="font-bold">Description:</span> {estate.description}</p>
                <div className="my-6"><hr /></div>
                <div className='grid gap-2'>
                    <div className='grid grid-cols-4 md:grid-cols-8'><p className="font-bold">Price:</p><p className=" col-span-3 md:col-span-4">{estate.price}</p></div>
                    <div className='grid grid-cols-4 md:grid-cols-8'><p className="font-bold">Status:</p><p className=" col-span-3 md:col-span-4">{estate.status}</p></div>
                    <div className='grid grid-cols-4 md:grid-cols-8'><p className="font-bold">Area:</p><p className=" col-span-3 md:col-span-4">{estate.area}</p></div>
                    <div className='grid grid-cols-4 md:grid-cols-8'><p className="font-bold">Location:</p><p className=" col-span-3 md:col-span-4">{estate.location}</p></div>
                </div>

            </div>
        </div>
    );
};

export default Details;