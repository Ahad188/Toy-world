import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase";

 

 export const AuthContext = createContext()
 
 const AuthProvider = ({children}) => {
     const auth = getAuth(app)
     const [user, setUser] = useState(null);
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
     const logOut =()=>{
          return signOut(auth)
     }
     useEffect(()=>{
          const unsubscribe = onAuthStateChanged(auth, loggedUser => {
              console.log('logged in user inside auth state observer', loggedUser)
              setUser(loggedUser);
               // setLoading(false)
          })
  
          return () => {
              unsubscribe();
          }
      }, [])
      
     const authinfo = {
          user,
          createUser,
          singIn,
          googleSing,
          logOut,
     }
     return (
          <AuthContext.Provider value={authinfo}>
               {children}
          </AuthContext.Provider>
     );
 };
 
 export default AuthProvider;