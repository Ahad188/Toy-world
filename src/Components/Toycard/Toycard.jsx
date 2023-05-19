import { Link, useNavigate } from "react-router-dom";

const Toycard = ({toy}) => {
     const navigate = useNavigate()
// console.log(toy._id);
     // const {photo,toyName,price,quantity,details,subcategory,salerName,_id} = toy;
     const {photo,toyName,_id} = toy;
     // console.log(_id,'details id');
  return (
    <div className="card w-96  shadow-xl bg-slate-300">
      <figure>
        <img src={photo} className="p-10" alt="Shoes" />
      </figure>
      <div className="card-body flex justify-between">
        <h2 className="card-title"> <span className="text-2xl">{toyName}</span></h2>
         
        <div className="card-actions justify-end">
          
          <button className="btn" onClick={()=>navigate(`/details/${_id}`)}>
          <Link to='/details' className="btn">Details</Link>

          </button>
        </div>
      </div>
    </div>
  );
};

export default Toycard;
