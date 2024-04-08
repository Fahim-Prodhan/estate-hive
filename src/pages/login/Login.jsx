/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const { signInUser } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                console.log(res.user);
                toast("Login Successful")
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGithubSignIn = ()=>{
        signInWithPopup(auth,githubProvider)
        .then(res=>{
            console.log(res.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }


    const handleSingInUser = (e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');

        signInUser(email,password)
        .then(res=>{
            console.log(res.user);
        })
        .catch(error=>{console.log(error);})
    }


    return (
        <div>
            <div className="text-center my-7">
                <h1 className="text-[40px]">Please Login</h1>
            </div>
            <div className="">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
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
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
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
                                <button onClick={handleSingInUser} type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Login;