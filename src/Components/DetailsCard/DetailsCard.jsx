import { Link, useLoaderData } from "react-router-dom";

const DetailsCard = () => {
  const data = useLoaderData();
  const { photo, toyName, price, quantity, details, subcategory, salerName, } = data;
//   console.log(data);
  return (
    <div className="container mx-auto mt-10 mb-40">
      <div className="card w-[600px] bg-base-100 shadow-xl mx-auto image-full">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body text-center">
        <h2 className=" text-5xl text-center text-black font-bold"> {toyName}</h2>
               <h2 className="text-4xl text-teal-200 font-bold">SalerName : {salerName}</h2>
               <h3 className="text-3xl">subcategory : <span className="text-red-400 font-bold">{subcategory}</span></h3>
           <div className="">
               <h3 className="text-2xl">Price : <span className="text-orange-400 font-bold"> ${price}</span></h3>
               <h3 className="text-2xl">Quantity : <span className="text-orange-400 font-bold">{quantity}</span></h3>
           </div>
           <p className="text-xl">{details}</p>
          <div className="card-actions justify-end">
          <button className="btn bg-teal-400">
               <Link to='/alltoys'>Go Back</Link>
               </button>
            <button className="btn  bg-teal-400">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
