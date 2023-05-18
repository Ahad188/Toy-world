 import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg'
 import './header.css'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
 
 
 
const Header = () => {
      const {user} = useContext(AuthContext)
      console.log(user);
     return (
           <section className='header-section'>
               <div className='header'>
                    <Link to='/'><img className='logo' src={logo} alt="logo" /></Link>
                    
                    <nav>
                    <ul className='md:flex justify-evenly al'>
                         <li><Link className='mr-10 text-2xl font-bold' to="/">Home</Link></li>
                         <li><Link className='mr-10 text-2xl font-bold' to="/allToys">All-Toys</Link></li>
                         <li><Link className='mr-10 text-2xl font-bold' to='/blog'>Blog</Link></li>
                         <li><Link className='mr-10 text-2xl font-bold' to="/login">Login</Link></li>
                    </ul>
               </nav>
               </div>
               
           </section>
          
     );
};

export default Header;