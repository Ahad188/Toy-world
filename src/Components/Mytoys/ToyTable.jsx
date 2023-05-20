import { Link } from "react-router-dom";

 

const ToyTable = ({toy,index}) => {
      

     const {toyName,price,quantity,_id} = toy;
 
     const handelDelate =(_id)=>{
          console.log(_id,"dellet this id");
          // fetch(`http://localhost:5000/toys/${_id}`,{
          //      method:'PATCH',
          //      headers:{
          //           'content-type':'application/json'
          //      },
          //      body: JSON.stringify(data)
          // })
          //  .then(res=>res.json())
          //  .then(data=>console.log(data))

          
     }
     const handelUpdate = (id)=>{
          console.log(id);
     }

     return (
     
          <tr>
               <th>{index + 1}</th>
               <td>{toyName}</td>
               <td>{price}</td>
               <td>{quantity}</td>
               <td className="cursor-pointer" onClick={()=>handelUpdate(_id)}><Link to='/update'>Update</Link></td>
               <td className="cursor-pointer" onClick={()=>handelDelate(_id)}>Dellet</td>

          </tr>
     );
};

export default ToyTable;