 

const ToyTable = ({toy,index}) => {
     // console.log(toy);

     const {toyName,price,quantity,_id} = toy;
// console.log(toyName, price, quantity, _id);
     const handelDelate =(_id)=>{
          console.log(_id,"dellet this id");
           

          
     }

     return (
     
          <tr>
               <th>{index + 1}</th>
               <td>{toyName}</td>
               <td>{price}</td>
               <td>{quantity}</td>
               <td>update</td>
               <td className="cursor-pointer" onClick={()=>handelDelate(_id)}>Dellet</td>

          </tr>
     );
};

export default ToyTable;