/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const email = form.get('email');
        const photoUrl = form.get('photoUrl');
        const password = form.get('password');

        createUser(email,password)
        .then(res=>{
            // update the profile with current name and photoUrl
            updateProfile(res.user,{
                displayName: name, photoURL: photoUrl
            })
            .then()
            .catch(error=>{
                console.log(error)
            })
            toast("Registration Successful")
            navigate('/')
            // console.log(res.user);
        })
        .catch(error=>{
            console.log(error);
        })

        // console.log(name,email,photoUrl,password);
    }



    return (
        <div>
            <div className="text-center my-7">
                <h1 className="text-[40px]">Register</h1>
            </div>
            <div className="">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Enter name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="Enter email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input name="photoUrl" type="text" placeholder="Enter PhotoUrl" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="Enter password" className="input input-bordered" required />
                                <label className="label">
                                    <p className="pt-2 text-sm">Already have an account? <span className="text-blue-400"><Link to='/login'>Login</Link></span></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Create an account</button>
                            </div>
                        </form>
                    </div>
                </div>
            <ToastContainer />
            </div>
        </div>
    );
};

export default Register;