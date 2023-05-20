import { NavLink } from "react-router-dom";

 

const Active = ({to,children}) => {
     return (
          <NavLink to={to}
          className={({isActive}) =>
            isActive ? 'underline text-white mr-4 text-3xl font-bold' : " mr-4 text-2xl"
         }
          >
              {children}
          </NavLink>
     );
};

export default Active;