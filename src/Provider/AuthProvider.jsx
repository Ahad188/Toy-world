import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase";

 

 export const AuthContext = createContext()
 
 const AuthProvider = ({children}) => {
     const auth = getAuth(app)
     const user = {name :"asbas"}
     const googleProvider = new GoogleAuthProvider();

     const createUser = (email,password)=>{
          return createUserWithEmailAndPassword(auth,email,password)
     }
     const singIn = (email,password)=>{
          return signInWithEmailAndPassword(auth,email,password)
     }
     const googleSing=()=>{
          return signInWithPopup(auth,googleProvider)
     }
      
     const authinfo = {
          user,
          createUser,
          singIn,
          googleSing,
     }
     return (
          <AuthContext.Provider value={authinfo}>
               {children}
          </AuthContext.Provider>
     );
 };
 
 export default AuthProvider;