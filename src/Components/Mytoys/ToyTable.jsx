import { Link, useNavigate } from "react-router-dom";

 

const ToyTable = ({toy,index}) => {
      const navigate = useNavigate()

     const {toyName,price,quantity,_id} = toy;
 
     const handelDelate =(_id)=>{
          console.log(_id,"dellet this id");
          fetch(`http://localhost:5000/de/${_id}`,{
               method: 'DELETE',
                
          })
           .then(res=>res.json())
           .then(data=>{
               console.log(data);
               if(data.deletedCount>0){
                    alert('delate sec')
               }
           })

          
     }
     

     return (
     
          <tr>
               <th>{index + 1}</th>
               <td>{toyName}</td>
               <td>{price}</td>
               <td>{quantity}</td>
               <td className="cursor-pointer" onClick={()=>navigate(`/update/${_id}`)} ><Link to='/update'>Update</Link></td>
               <td className="cursor-pointer" onClick={()=>handelDelate(_id)}>Dellet</td>

          </tr>
     );
};

export default ToyTable;