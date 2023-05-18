import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import Review from "../Review/Review";
import Team from "../Team/Team";

 

const Home = () => {
     return (
          <div className="container mx-auto">
               <Banner></Banner>
               <Catagory></Catagory>
               <AboutUs></AboutUs>
               <Review></Review>
                <Team></Team>
          </div>
     );
};

export default Home;