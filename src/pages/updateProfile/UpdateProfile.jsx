import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";


const UpdateProfile = () => {

    const { user } = useContext(AuthContext)
  

    const handleUpdateProfile = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name');

        updateProfile(user, {
            displayName: name
        })
            .then(res => {
                toast("Profile is Updated")
                setTimeout(() => {
                    window.location.reload();
                }, 1500)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleUpdateProfilePic = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const photoUrl = form.get('photoUrl');

        updateProfile(user, {
            photoURL: photoUrl
        })
            .then(res => {
                toast("Profile is Updated")
                setTimeout(() => {
                    window.location.reload();
                }, 1500)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="w-1/2 mx-auto h-[60vh]">
             <Helmet>
                <title>EstateHive | UpdateProfile</title>
            </Helmet>
            <div className="">
                <div className="card shadow-md gap-4 p-10">
                    <h1 className="font-semibold text-2xl">Edit Profile</h1>
                    <form onSubmit={handleUpdateProfile}>
                        <div className="relative">
                            <label className="input input-bordered flex items-center gap-2">
                                <input name="name" type="text" className="grow" placeholder={user.displayName} />
                            </label>
                            <button className="badge text-white badge-info btn absolute right-0 top-0">Save</button>
                        </div>
                    </form>
                    <form onSubmit={handleUpdateProfilePic}>
                        <div className="relative">
                            <label className="input input-bordered flex items-center gap-2">
                                <input name="photoUrl" type="text" className="grow" placeholder='photoURL' />
                            </label>
                            <button className="badge text-white badge-info btn absolute right-0 top-0">Save</button>
                        </div>
                    </form>

                </div>
                <ToastContainer />
            </div>
        </div>

    );

};

export default UpdateProfile;