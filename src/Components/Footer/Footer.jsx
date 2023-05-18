import { Link } from "react-router-dom";

 
import { FaFacebook,FaInstagram,FaTwitter,FaWhatsappSquare} from "react-icons/fa";
const Footer = () => {
     return (
          <footer className="footer p-10 bg-neutral text-neutral-content container mx-auto">
          <div>
            <span className="footer-title">Menu</span> 
            <Link to='/' className="link link-hover">Home</Link>
            <Link to='/alltoys' className="link link-hover">ALLTOYS</Link>
            <Link to='/blog' className="link link-hover">BLOG</Link>
            <Link to='/login' className="link link-hover">LOGIN</Link>
          </div> 
         <div>
         <span className="footer-title">Social Media</span> <br />
         <div className="flex justify-evenly items-center">
             <FaFacebook className="mr-2 text-2xl cursor-pointer"/>
             <FaInstagram className="mr-2 text-2xl cursor-pointer"/>
             <FaTwitter className="mr-2 text-2xl cursor-pointer"/>
             <FaWhatsappSquare className="mr-2 text-2xl cursor-pointer"/>
          </div>
         </div>
          <div>
            <span className="footer-title cursor-pointer">address</span> 
             <address className="text-xl">
               Mirpur:10, Road:01, Len :16; Dhaka.
               <h2>House : #504</h2>
               <h2>postal Code : #12312</h2>
               <p>Ariea code : ###0987</p>
             </address>
            <a className="link link-hover">Main Branch</a>
             
          </div> 
        </footer>
     );
};

export default Footer;