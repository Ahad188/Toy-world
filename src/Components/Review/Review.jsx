import img1 from '../../assets/Up-comming/img1.jpg'
import img2 from '../../assets/Up-comming/img2.jpg'
import img3 from '../../assets/Up-comming/img3.jpg'
import img4 from '../../assets/Up-comming/img4.jpg'
import img5 from '../../assets/Up-comming/img5.jpg'
import img6 from '../../assets/Up-comming/img6.jpg'
import './review.css'
const Review = () => {
  return (
     <div className="container mx-auto mb-10">
          <h2 className='text-center text-5xl mb-5 font-bold'> Coming Soon</h2>
          <div className="carousel rounded-box">
     <div className="carousel-item">
       <img src= {img5} alt="Burger" />
     </div> 
     <div className="carousel-item">
       <img src={img3} alt="Burger" />
     </div> 
     <div className="carousel-item">
       <img src={img2} alt="Burger" />
     </div> 
     <div className="carousel-item">
       <img src={img4} alt="Burger" />
     </div> 
     <div className="carousel-item">
       <img src={img6} alt="Burger" />
     </div> 
     <div className="carousel-item">
       <img src={img1} alt="Burger" />
     </div> 
      
   </div>
     </div>
  );
};

export default Review;
