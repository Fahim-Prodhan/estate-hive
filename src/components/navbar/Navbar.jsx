import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
// import { toast } from "react-toastify";
import 'react-notifications-component/dist/theme.css'
import toast from "react-hot-toast";


const Navbar = () => {

    const { user, setLoading } = useContext(AuthContext);

    const handleLogout = () => {
        setLoading(true)
        signOut(auth).then(() => {
            toast.success("Logout Successful",{
                position: "top-right",
                duration:2000,
                style:{width:'200px', height:'70px'},
                
            })
           
        }).catch((error) => {
            console.log(error);
            toast.error("Logout Successful",{
                position: "top-right",
                duration:2000,
                style:{width:'200px', height:'70px'},
            });
        });
    }


    const links = <>
        <li><NavLink to='/'  style={({ isActive }) => ({
            color: isActive ? '#ffff' : '#282828ea',
            background: isActive ? '#41C9E2' : '#ffff',
        })}>Home</NavLink></li>
        <li><NavLink to='wishlist' style={({ isActive }) => ({
            color: isActive ? '#ffff' : '#282828ea',
            background: isActive ? '#41C9E2' : '#ffff',
        })}>Wishlist</NavLink></li>
        <li><NavLink to='update-profile' style={({ isActive }) => ({
            color: isActive ? '#ffff' : '#282828ea',
            background: isActive ? '#41C9E2' : '#ffff',
        })}>Update Profile</NavLink></li>
    </>

    return (
        <div >
            <div className="navbar bg-base-100 p-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                            {
                                user && <li><NavLink to='/user-profile' style={({ isActive }) => ({
                                    color: isActive ? '#ffff' : '#282828ea',
                                    background: isActive ? '#41C9E2' : '#ffff',
                                })}>User Profile</NavLink></li>
                            }
                        </ul>
                    </div>
                    <Link to={'/'} className="text-[28px] cursor-pointer font-bold">EstateHive</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                        {
                            user && <li><NavLink to='/user-profile' style={({ isActive }) => ({
                                color: isActive ? '#ffff' : '#282828ea',
                                background: isActive ? '#41C9E2' : '#ffff',
                            })}>User Profile</NavLink></li>
                        }
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
                            <a className="btn btn-error text-white p-1 md:p-4" onClick={handleLogout}>Logout</a>
                        </div> : <NavLink className="btn text-white bg-[#00b5a5]" to='/login'>Login</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;