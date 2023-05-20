import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import Blog from "../Components/Blog/Blog";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import AllToys from "../Components/AllToys/AllToys";
import DetailsCard from "../Components/DetailsCard/DetailsCard";
import Private from "../Private/Private";
import AddToy from "../Components/AddToy/AddToy";
import Mytoys from "../Components/Mytoys/Mytoys";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Update from "../Components/Update/Update";

const router = createBrowserRouter([
     {
       path: "/",
       element: <App></App>,
       errorElement:<ErrorPage></ErrorPage>,
       children:[
          {
               path:'/',
               element:<Home></Home>
          },
          {
               path:'allToys',
               element:<AllToys></AllToys>,
               loader:()=>fetch('https://toy-server-sigma.vercel.app/alltoys')
          },
          {
               path:'/addtoys',
               element:<Private><AddToy></AddToy></Private>,
          },
          {
               path:'/update/:id',
               element:<Update></Update>,
               loader:({params})=>fetch(`https://toy-server-sigma.vercel.app/toys/${params.id}`)
          },
          {
               path:'/mytoys',
               element:<Private><Mytoys></Mytoys></Private>,
          },
          {
               path:'/details/:id',
               element:<Private><DetailsCard></DetailsCard></Private>,
               loader:({params})=>fetch(`https://toy-server-sigma.vercel.app/toys/${params.id}`)
                
          },
          {
               path:'/blog',
               element:<Blog></Blog>
          },
          {
               path:'/login',
               element:<Login></Login>
          },
          {
               path:'/register',
               element:<Register></Register>
          }
       ]
     },
   ]);








   export default router;