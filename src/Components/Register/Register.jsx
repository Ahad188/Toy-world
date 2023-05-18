 
import { FaEnvelope, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Register = () => {
     return (
          <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
          <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
              <h1 className="text-3xl font-semibold text-center text-teal-400 ">
                  Please Register
              </h1>
              <form  className="mt-6">
                  <div className="mb-2">
                  <label htmlFor="email" className="block text-xl font-semibold text-gray-800">Email:</label>
                      <input
                          type="email"
                          id="email"
                          className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-teal-400 focus:ring-teal-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                  </div>
                  <div className="mb-2">
                       <label htmlFor="password" className="block text-xl font-semibold text-gray-800">Password:</label>
                      <input
                          type="password"
                          id="password"
                          className="block w-full px-4 py-2 mt-2 text-teal-700 bg-white border rounded-md focus:border-teal-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                  </div>
                  <a
                      href="#"
                      className="text-xl text-teal-600 hover:underline"
                  >
                      Forget Password?
                  </a>
                  <div className="mt-6">
                      <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-teal-400 rounded-md hover:bg-teal-600 focus:outline-none focus:bg-teal-600">
                          Login
                      </button>
                  </div>
              </form>
              <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                  <div className="absolute px-5 bg-white">Or</div>
              </div>
              <div className="flex mt-4 gap-x-2">
                  <button
                      type="button"
                      className="flex text-3xl items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-teal-600"
                  >
                    <FaEnvelope/> Email
                  </button>
                  <button
                      type="button"
                      className="flex text-3xl items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-teal-600"
                  >
                     <FaGoogle/>Google
                  </button>
                   
                 
              </div>

              <p className="mt-8 text-xl font-light text-center text-gray-700">
                   
                  I have an account? 
                  <Link
                      to="/login"
                      className="font-medium text-teal-400 hover:underline"
                  >
                      Login
                  </Link>
              </p>
          </div>
      </div>
     );
};

export default Register;