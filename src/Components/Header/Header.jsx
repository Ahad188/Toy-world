 import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg'
 import './header.css'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import im from '../../assets/Team/emty.jpg'
 
 
 
const Header = () => {
      const {user,logOut} = useContext(AuthContext)
      console.log(user);
     const handelLogout=()=>{
          logOut()
          .then()
         .catch(error => console.log(error));
     }
     return (
           <section className='header-section'>
               <div className='header'>
                    <Link to='/'><img className='logo' src={logo} alt="logo" /></Link>
                    
                    <nav>
                    <ul className='md:flex justify-evenly al'>
                         <li><Link className='mr-10 text-2xl font-bold' to="/">Home</Link></li>
                         <li><Link className='mr-10 text-2xl font-bold' to="/allToys">All-Toys</Link></li>
                         <li><Link className='mr-10 text-2xl font-bold' to="/addToys">Add-Toys</Link></li>
                         <li><Link className='mr-10 text-2xl font-bold' to='/blog'>Blog</Link></li>
                         <li>
                              {
                                   user ? <img className='h-10  w-10 rounded-full' src={user?.photoURL || im} alt="" /> :
                                   <img className='h-10  w-10 rounded-full' src={im} alt="" />
                              }
                              </li>
                         {
                              user? <button className='mr-10 text-2xl font-bold' onClick={handelLogout}>LogOut</button>:<li><Link className='mr-10 text-2xl font-bold' to="/login">Login</Link></li>
                         }
                    </ul>
               </nav>
               </div>
               
           </section>
          
     );
};

export default Header;