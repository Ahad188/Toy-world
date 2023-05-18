import { Link } from "react-router-dom";

const Toycard = ({toy}) => {
console.log(toy);
     const {photo,toyName,price,quantity,details,subcategory,salerName} = toy
  return (
    <div className="card w-96  shadow-xl bg-slate-300">
      <figure>
        <img src={photo} className="p-10" alt="Shoes" />
      </figure>
      <div className="card-body flex justify-between">
        <h2 className="card-title"> <span className="text-2xl">{toyName}</span></h2>
         
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
     
        </div>
      </div>
    </div>
  );
};

export default Toycard;
