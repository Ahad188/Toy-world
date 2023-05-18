import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import Blog from "../Components/Blog/Blog";

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
               path:'/blog',
               element:<Blog></Blog>
          }
       ]
     },
   ]);








   export default router;