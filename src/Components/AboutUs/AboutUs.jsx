 import img from '../../assets/about (2).jpg'
import './aboutUs.css'
const AboutUs = () => {
     return (
          <div className="hero min-h-[600] mb-11 bg-base-200 thinking ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src= {img} className="rounded-lg shadow-2xl " />
            <div>
              <h1 className="text-5xl font-bold">Our Thinking</h1>
              <p className="py-6 text-xl text-gray-950">We provide educational, adventure, toys from different countries, <br /> our products are durable and strong, we are working day and <br /> night to make your child's development <br /> and childhood enjoyable.</p>
               
            </div>
          </div>
        </div>
     );
};

export default AboutUs;