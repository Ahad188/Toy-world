import { useEffect, useState } from "react";
import Toycard from "../Toycard/Toycard";
 

 

 

const AllToys = () => {
      const [toys, setToys] = useState([])
     useEffect(()=>{
          fetch('fake.json')
          .then(res=>res.json())
          .then(data=>{
               console.log(data);
               setToys(data)
          })
     },[])
      
     return (
         <div className="container md:grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-10 mx-auto mt-9 mb-9">
          {
               toys.map(toy=><Toycard
               key={toy.id}
               toy={toy}
               
               ></Toycard>)
          }
         </div>
     );
};

export default AllToys;