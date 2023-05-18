import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation  } from "react-router-dom";
 
 

 

const Private = ({children}) => {
      const {user,loading} = useContext(AuthContext)
      
      const location = useLocation()
      if(!loading){
          return <div>
          <progress className="progress progress-secondary w-56" value="10" max="100"></progress>
          <progress className="progress progress-secondary w-56" value="40" max="100"></progress>
          <progress className="progress progress-secondary w-56" value="70" max="100"></progress>
     </div>
      }

      if(user){
          return children
      }
     return  <Navigate to='/login' state={{from : location}} replace></Navigate>;
};

export default Private;