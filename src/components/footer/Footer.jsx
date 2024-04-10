import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-gray-900  text-white justify-around">

                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Find Home</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact Us</h6>
                    <a className="link link-hover flex gap-2"><span><FaPhone /></span> 1-800-700-6200</a>
                    <a className="link link-hover flex gap-2"><span><IoMail /></span>info@estatehive.org</a>
                    <a className="link link-hover flex gap-2"><span><FaLocationDot /></span>3015 Grand Ave, Coconut
                        Grove, <br />Merrick Way, FL 12345 </a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Media</h6>
                    <a className="link link-hover flex gap-3 text-[28px]"><span><FaFacebook /></span> <span><FaSquareXTwitter /></span><span><FaInstagramSquare/></span></a>

                </nav>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="username@site.com" className="input input-bordered join-item " />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;