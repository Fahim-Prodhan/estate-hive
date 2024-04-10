/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";



const Login = () => {

    const { signInUser, setLoading } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const location = useLocation();
    const navigate = useNavigate()

    const [eye,setEye] = useState(false)

    const togglePassword = ()=>{
        setEye(!eye)
    }


    const handleGoogleSignIn = () => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(res => {
                // console.log(res.user);
                navigate(location.state ? `${location.state}` : '/')
                toast("Login Successful")
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGithubSignIn = () => {
        setLoading(true)
        signInWithPopup(auth, githubProvider)
            .then(res => {
                // console.log(res.user);
                navigate('/')
                toast("Login Successful")

            })
            .catch(error => {
                console.log(error);
            })
    }


    const handleSingInUser = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');

        signInUser(email, password)
            .then(res => {
                // console.log(res.user);
                toast("Login Successful")
                setTimeout(() => {
                    navigate(location.state ? `${location.state}` : '/')
                }, 2000);
            })
            .catch(error => {
                toast.error('Invalid Details', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                console.log(error);
            })
    }


    return (
        <div>
            <Helmet>
                <title>EstateHive | Login</title>
            </Helmet>
            <div className="text-center py-2">
                <h1 className="text-[40px] text-[#00b5a5]">Please Login</h1>
            </div>
            <div className="">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSingInUser} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2 label">
                                    <input name="password" type={eye?"text":"password"} className="grow" placeholder="Password" />
                                    <span onClick={togglePassword} className="text-xl">{eye?<MdOutlineRemoveRedEye />:<FaRegEyeSlash />}</span>
                                </label>
                                <label className="label">
                                    <p className="pt-2 text-sm">Don't Have any account? <span className="text-blue-400"><Link to='/register'>Register</Link></span></p>
                                </label>
                                <div className="divider">OR</div>
                                <div className="flex justify-center gap-4">
                                    <button onClick={handleGoogleSignIn} className="btn">Google</button>
                                    <button onClick={handleGithubSignIn} className="btn">GitHub</button>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-[#00b5a5] text-white">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;