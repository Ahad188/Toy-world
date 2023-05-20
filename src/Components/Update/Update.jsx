import { useLoaderData } from "react-router-dom";

 

const Update = () => {
     const data = useLoaderData()
     console.log(data);
     const {toyName,price,quantity,_id} = data;
     const handelupdate =(e)=>{
          e.preventDefault()
          const from = e.target;
          const name = from.name.value;
          const price = from.price.value;
          const quentity = from.quantity.value;
          const update ={name,price,quentity}
          console.log(update);
           fetch(`http://localhost:5000/toys/${_id}`,{
               method:'PATCH',
               headers:{
                    'content-type':'application/json'
               },
               body:JSON.stringify(update)
           })
           .then(res=>res.json())
           .then(data=>{
               console.log(data);
               if(data.modifiedCount>0){
                    alert('update data')
               }
           })
     }
     return (
          <div className="container mx-auto mt-10 mb-10">
              <form onSubmit={handelupdate}   className="mt-6">
                  <div className="mb-2">
                  <label htmlFor="name" className="block text-xl font-semibold text-gray-800">Toy_Name:</label>
                      <input
                          type="name"
                          id="name"
                          defaultValue={toyName}
                          className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-teal-400 focus:ring-teal-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                  </div>
                  <div className="mb-2">
                       <label htmlFor="price" className="block text-xl font-semibold text-gray-800">Price:</label>
                      <input
                          type="price"
                          id="price"
                          defaultValue={price}
                          className="block w-full px-4 py-2 mt-2 text-teal-700 bg-white border rounded-md focus:border-teal-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                  </div>
                  <div className="mb-2">
                       <label htmlFor="quantity" className="block text-xl font-semibold text-gray-800">Quantity:</label>
                      <input
                          type="quantity"
                          id="quantity"
                          defaultValue={quantity}
                          className="block w-full px-4 py-2 mt-2 text-teal-700 bg-white border rounded-md focus:border-teal-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                  </div>
                      <input type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-teal-400 rounded-md hover:bg-teal-600 focus:outline-none focus:bg-teal-600" value="Submit" />
                  
              </form>
          </div>
     );
};

export default Update;