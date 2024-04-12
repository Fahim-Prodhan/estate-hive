import { Helmet } from "react-helmet";
import { getStoredEstate } from "../../utils/localStorage";
import { Link, useLoaderData } from "react-router-dom";


Wishlist.propTypes = {

};

function Wishlist() {
    const getStoredEstates = getStoredEstate();
    const allJsonEstates = useLoaderData()
    const estates = allJsonEstates.filter(estate => getStoredEstates.includes(estate.id))
    // console.log(estates);

    if (estates.length < 1) {
        return (
            <div className="md:h-[500px]">
            <Helmet>
                <title>EstateHive | Wishlist</title>
            </Helmet>

            <div className="py-4 text-center bg-base-100 shadow-sm">
                <h1 className="font-bold text-3xl">Wishlists</h1>
            </div>
            <div className="text-center">
                <h1 className="text-red-500 text-4xl py-10">
                    Wishlist Empty
                </h1>
            </div>
        </div>
        )
    }

    return (
        <div>
            <Helmet>
                <title>EstateHive | Wishlist</title>
            </Helmet>

            <div className="py-4 text-center bg-base-100 shadow-sm">
                <h1 className="font-bold text-3xl">Wishlists</h1>
            </div>


            <div className="grid gap-4 my-7">
                {
                    estates.map((estate, index) => <div key={index}>
                        <div className="card flex-col md:flex-row card-side bg-base-100 shadow-xl">
                            <figure><img className="md:w-96" src={estate.image} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{estate.estate_title}</h2>
                                <p className="text-[#00b5a5]">#{estate.segment_name}</p>
                                <hr />
                                <p><span className="text-[#E8751A]">price:</span> {estate.price}</p>
                                <p><span className="text-[#E8751A]">Status:</span> {estate.status}</p>
                                <p><span className="text-[#E8751A]">Location:</span> {estate.location}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/details/${estate.id}`}> <button className="btn bg-[#41C9E2] text-white">View Property</button> </Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
}

export default Wishlist;