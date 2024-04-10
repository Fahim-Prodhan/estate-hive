import { useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet";


const UserProfile = () => {

    const { user } = useContext(AuthContext)




    if(!user){
        return(<>
        <div className="flex justify-center"><span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span></div>
        </>)
    }
   
    return (
        <div className="my-12 h-[50vh]">
             <Helmet>
                <title>EstateHive | User Profile</title>
            </Helmet>
            <div className="card bg-base-100 shadow-xl p-4 md:p-10 grid grid-cols-1 gap-4 md:grid-cols-8 w-full">
                <div className="col-span-3 mx-auto">
                    <div className="">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 animate__animated animate__bounceInDown">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <h1 className="font-bold text-3xl mt-3 animate__animated animate__lightSpeedInLeft">{user?.displayName}</h1>
                        <div>
                            <Link to='/update-profile'>
                                <button className="btn bg-[#00b5a5] text-white mt-2">Edit Profile</button>
                            </Link>
                        </div>
                    </div>


                </div>

                <div className="flex flex-col w-full lg:flex-row">
                    <div className="divider lg:divider-horizontal"></div>
                </div>

                <div className="col-span-4 space-y-4">
                    <h1><span className="font-bold">Name:</span> <span className="animate__animated animate__flipInX">{user?.displayName}</span></h1>
                    <h1><span className="font-bold">Email:</span> <span className="animate__animated animate__flipInX">{user?.email}</span></h1>
                    <h1><span className="font-bold">PhotoURL:</span> <span className="animate__animated animate__flipInX">{user?.photoURL?.slice(0, 40)}...</span></h1>
                    <h1><span className="font-bold">Verify Status:</span> <span className="animate__animated animate__flipInX">{user?.emailVerified ? "Verified" : "Not Verified"}</span></h1>
                </div>
            </div>

        </div>
    );
};

export default UserProfile;