import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Flip, ToastContainer, toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";


const UpdateProfile = () => {

    const { user, setReload } = useContext(AuthContext)
    const navigate = useNavigate()
    const [name, setName] = useState(user.displayName)
    const [photoURL, setPhotoURL] = useState(user.photoURL)

    const handleNameOnChange = (e) => {
        setName(e.target.value)
    }

    const handlePhotoURLOnChange = (e) => {
        setPhotoURL(e.target.value)
    }


    const handleUpdateProfile = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const photoUrl = form.get('photoUrl');


        updateProfile(user, {
            displayName: name, photoURL: photoUrl
        })
            .then(() => {
                toast.success('Profile update is successful', {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Flip,
                });
                setTimeout(() => {
                    setReload(true)
                    navigate('/user-profile')
                }, 1700);
            })
            .catch(error => {
                toast.error('Something is went wrong!', {
                    position: "top-right",
                    autoClose: 1200,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                console.log(error)
            })
    }


    return (
        <div className="md:w-1/2 mx-auto my-6">
            <Helmet>
                <title>EstateHive | UpdateProfile</title>
            </Helmet>
            <div className="">
                <div className="card shadow-md gap-4 p-10">
                    <div className="grid gap-4">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <h1 className="font-semibold text-2xl">Edit Profile</h1>
                    </div>
                    <form onSubmit={handleUpdateProfile}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email"  value={user?.email} type="text" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" value={name} onChange={handleNameOnChange} type="text" placeholder="Enter Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input name="photoUrl" value={photoURL} onChange={handlePhotoURLOnChange} type="text" placeholder="Enter PhotoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#008DDA] text-white">Save</button>
                        </div>
                    </form>


                </div>
                <ToastContainer />
            </div>
        </div>

    );

};

export default UpdateProfile;