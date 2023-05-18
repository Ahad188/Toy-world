import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import Blog from "../Components/Blog/Blog";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import AllToys from "../Components/AllToys/AllToys";
import DetailsCard from "../Components/DetailsCard/DetailsCard";
import Private from "../Private/Private";

const router = createBrowserRouter([
     {
       path: "/",
       element: <App></App>,
       children:[
          {
               path:'/',
               element:<Home></Home>
          },
          {
               path:'allToys',
               element:<AllToys></AllToys>,
               loader:()=>fetch('http://localhost:5000/alltoys')
          },
          {
               path:'/details/:id',
               element:<Private><DetailsCard></DetailsCard></Private>,
               loader:({params})=>fetch(`http://localhost:5000/alltoys/${params.id}`)
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