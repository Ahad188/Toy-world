import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useEffect } from "react";
import ToyTable from "./ToyTable";
 

 

const Mytoys = () => {
     const {user} = useContext(AuthContext);
     const [toys, setToys] =useState([])
     // console.log(user.email);
     const url = `http://localhost:5000/alltoys/${user?.email}`
     useEffect(()=>{
          fetch(url)
          .then(res=>res.json())
          .then(data=>{
               // console.log(data);
               setToys(data)
          })

     },[url])
     // console.log(toys);
     return (
          <div className="container mx-auto mt-10 mb-10">
                <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>price</th>
        <th>Quantity</th>
        <th>Update</th>
        <th>Delate</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
       
      {
          toys.map((toy,index)=><ToyTable
          key={toy._id}
          index={index}
          toy={toy}
          ></ToyTable> )
      }
         
        
      
    </tbody>
  </table>
</div> 
          </div>
     );
};

export default Mytoys;