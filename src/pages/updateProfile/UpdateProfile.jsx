import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { updateProfile } from "firebase/auth";


const UpdateProfile = () => {

    const { user } = useContext(AuthContext)
    const [edit, setEdit] = useState(false)
    const [photoEdit, setPhotoEdit] = useState(false)
    const handelEdit = () => {
        setEdit(!edit)
    }
    const handelPhotoEdit = () => {
        setPhotoEdit(!photoEdit)
    }

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
        <div className="my-12">
            <div className="card bg-base-100 shadow-xl p-4 md:p-10 grid grid-cols-1 gap-4 md:grid-cols-8 w-full">
                <div className="col-span-3 mx-auto">
                    <div>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <h1 className="font-bold text-3xl mt-3">{user?.displayName}</h1>
                        <div>
                            <button onClick={handelEdit} className="btn bg-[#00b5a5] text-white mt-2">Edit Profile</button>
                        </div>
                    </div>


                </div>

                <div className="flex flex-col w-full lg:flex-row">
                    <div className="divider lg:divider-horizontal"></div>
                </div>

                <div className="col-span-4 space-y-4">
                    <h1><span className="font-bold">Name:</span> {user?.displayName}</h1>
                    <h1><span className="font-bold">Email:</span> {user?.email}</h1>
                    <h1><span className="font-bold">PhotoURL:</span> {user?.photoURL?.slice(0, 40)}...</h1>
                    <h1><span className="font-bold">Verify Status:</span> {user?.emailVerified ? "Verified" : "Not Verified"}</h1>

                    {/* Edit Section */}
                    <div className={`${edit ? 'grid' : 'hidden'}`}>
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
                </div>
            </div>

        </div>
    );
};

export default UpdateProfile;