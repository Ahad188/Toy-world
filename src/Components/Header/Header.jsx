 import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg'
 import './header.css'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import im from '../../assets/Team/emty.jpg'
import Active from '../Active/Active';
import {FaBars, FaTimes } from "react-icons/fa";
 
 
 
const Header = () => {
      const {user,logOut} = useContext(AuthContext)
      const [open,setOpen] =useState(false)
     //  console.log(user);
     const handelLogout=()=>{
          logOut()
          .then()
         .catch(error => console.log(error));
     }
     return (
           <section className='header-section'>
               <div className='header'>
                    <Link to='/'><img className='logo' src={logo} alt="logo" /></Link>
                    
                    <nav  className={`md:flex absolute md:static duration-700 ${open ? 'top-16 bg-slate-400 text-center ms-96 p-5':'-top-48'}`}>
                    <ul className='md:flex justify-evenly al'>
                         <li><Active className='mr-10 text-2xl font-bold' to="/">Home</Active></li>
                         <li><Active className='mr-10 text-2xl font-bold' to="/allToys">All-Toys</Active></li>
                         <li><Active className='mr-10 text-2xl font-bold' to="/addToys">Add-Toys</Active></li>
                          
                         <li><Active className='mr-10 text-2xl font-bold' to='/blog'>Blog</Active></li>
                         
                         {
                              user? <>
                              <li><Active className='mr-10 text-2xl font-bold' to="/myToys">My-Toys</Active></li>
                              <button className='mr-10 text-2xl font-bold' onClick={handelLogout}>LogOut</button>
                              </>
                              :<li><Active className='mr-10 text-2xl font-bold' to="/login">Login</Active></li>
                         }
                         <li>
                              {
                                   user ? <img className='h-10  w-10 rounded-full' src={user?.photoURL} alt="" /> :
                                   <img className='h-10  w-10 rounded-full' src={im} alt="" />
                              }
                              </li>
                    </ul>
               </nav>
               <div onClick={()=>setOpen(!open)} className='md:hidden'>
               <span>{open === true ? <FaTimes className='h-6 w-6'/>:<FaBars className='h-6 w-6'/>}</span>
                   </div>
               </div>
               
           </section>
          
     );
};

export default Header;