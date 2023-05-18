import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import Blog from "../Components/Blog/Blog";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import AllToys from "../Components/AllToys/AllToys";

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
               // loader:()=>fetch('../../public/fake.json')
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