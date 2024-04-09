import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { toast } from "react-toastify";

const Navbar = () => {

    const { user, setLoading } = useContext(AuthContext)

    const handleLogout = () => {
        setLoading(true)
        signOut(auth).then(() => {
            toast("Logout Successful")
        }).catch((error) => {
            console.log(error);
        });
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='update-profile'>Update Profile</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 p-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to={'/'} className="text-2xl cursor-pointer font-bold">EstateHive</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    {
                        user ? <div className="flex gap-4">
                            <div data-tip={user.displayName} className="avatar placeholder tooltip">
                                <div className="bg-neutral text-neutral-content rounded-full w-12">
                                    <div>
                                        <button><img src={user?.photoURL} alt="" /></button>
                                    </div>
                                </div>
                            </div>
                            <a className="btn p-1 md:p-4" onClick={handleLogout}>Logout</a>
                        </div> : <NavLink className="btn" to='/login'>Login</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;