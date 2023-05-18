import img1 from '../../assets/Team/img1.jpg'
import img2 from '../../assets/Team/img2.jpg'
import img3 from '../../assets/Team/img3.jpg'
import img4 from '../../assets/Team/img4.jpg'
import './team.css'
const Team = () => {
  return (
    <div className="container mx-auto mb-10 bg">
      <h1 className="text-center text-5xl font-bold p-5 mb-5">Our team </h1>
        <div className="md:grid md:grid-cols-2 grid-cols-1 gap-20 w-[600px] mx-auto">
           <div>
               <img className='h-64 rounded-full' src={img1} alt="" />
               <h2 className='text-center text-gray-700 font-bold text-xl'>Amit</h2>
           </div>
           <div>
           <img className='h-64 rounded-full' src={img2} alt="" />
               <h2 className='text-center text-gray-700 font-bold text-xl'>Sumit</h2>
           </div>
           <div className='mb-10'>
           <img  className='h-64 rounded-full'src={img4} alt="" />
               <h2 className='text-center text-gray-700 font-bold text-xl'>Prodip</h2>
           </div>
           <div className='mb-10'>
           <img className='h-64 rounded-full' src={img3} alt="" />
               <h2 className='text-center text-gray-700 font-bold text-xl'>Jonson</h2>
           </div>
        </div>
    </div>
  );
};

export default Team;
