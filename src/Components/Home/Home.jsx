import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";

 

const Home = () => {
     return (
          <div className="container mx-auto">
               <Banner></Banner>
               <Catagory></Catagory>
               <AboutUs></AboutUs>
          </div>
     );
};

export default Home;