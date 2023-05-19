import { useContext } from "react";
import { AuthContext } from '../../Provider/AuthProvider';
 

const AddToy = () => {
     const {user} = useContext(AuthContext)
     const handelAdd = (e)=>{
          e.preventDefault()
          const form  = e.target;
          const toyName = form.name.value;
          const email = form.email.value;
          const subcategory = form.subcategory.value;
          const price = form.price.value;
          const quantity = form.quantity.value;
          const details = form.scrip.value;
          const photo = form.photo.value;
          const addProduct = {toyName,subcategory,price,quantity,photo,details,email}
          console.log(addProduct);
          fetch('http://localhost:5000/alltoys',{
               method:'POST',
               headers:{
                    "content-type" :"application/json"
               },
               body: JSON.stringify(addProduct)
          })
          .then(res=>res.json())
          .then(data=>{
               console.log(data);
               if(data.insertedId){
                    alert('data added successful')
               }
          })

     }
     return (
          <div className="container mx-auto mt-10 mb-40">
               <h1 className="text-5xl text-center font-bold">Add_toy for sell</h1>
               <div className="w-[600px] mx-auto p-10 mt-11 border border-red-500">
               <form onSubmit={handelAdd}  className="mt-6">
                  <div className="mb-2">
                  <label htmlFor="name" className="block text-xl font-semibold text-gray-800">Toy_Name:</label>
                      <input
                          type="name"
                          id="name"
                          className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-teal-400 focus:ring-teal-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                  </div>
                  <div className="mb-2">
                  <label htmlFor="sellerName" className="block text-xl font-semibold text-gray-800">Seller-Name:</label>
                      <input
                          type="sellerName"
                          id="sellerName"
                          className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-teal-400 focus:ring-teal-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                  </div>
                  <div className="mb-2">
                  <label htmlFor="email" className="block text-xl font-semibold text-gray-800">Seller-Email:</label>
                      <input
                          type="email"
                          id="email"
                          defaultValue={user.email}
                          className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-teal-400 focus:ring-teal-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                  </div>
                  <div className="mb-2">
                  <label htmlFor="subcategory" className="block text-xl font-semibold text-gray-800">subcategory:</label>
                      <input
                          type="subcategory"
                          id="subcategory"
                          className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-teal-400 focus:ring-teal-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                  </div>
                  <div className="mb-2">
                       <label htmlFor="price" className="block text-xl font-semibold text-gray-800">Price:</label>
                      <input
                          type="price"
                          id="price"
                          className="block w-full px-4 py-2 mt-2 text-teal-700 bg-white border rounded-md focus:border-teal-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                  </div>
                  <div className="mb-2">
                       <label htmlFor="quantity" className="block text-xl font-semibold text-gray-800">Quantity:</label>
                      <input
                          type="quantity"
                          id="quantity"
                          className="block w-full px-4 py-2 mt-2 text-teal-700 bg-white border rounded-md focus:border-teal-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                  </div>
                  <div className="mb-2">
                       <label htmlFor="scrip" className="block text-xl font-semibold text-gray-800">Scrip:</label>
                      <input
                          type="scrip"
                          id="scrip"
                          className="block w-full px-4 py-2 mt-2 text-teal-700 bg-white border rounded-md focus:border-teal-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                  </div>
                  <div className="mb-2">
                       <label htmlFor="photo" className="block text-xl font-semibold text-gray-800">Photo url:</label>
                      <input
                          type="url"
                          id="photo"
                          className="block w-full px-4 py-2 mt-2 text-teal-700 bg-white border rounded-md focus:border-teal-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                  </div>
                 
               
                      
                      <input type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-teal-400 rounded-md hover:bg-teal-600 focus:outline-none focus:bg-teal-600" value="Submit" />
                  
              </form>
               </div>
          </div>
     );
};

export default AddToy;