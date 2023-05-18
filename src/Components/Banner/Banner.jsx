
import './banner.css'
const Banner = () => {
  return (
    <div
      className="hero min-h-[400px] mb-10 banner "
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5 text-2xl">
          Here is a kind of toys, which helps to develop your baby, and cheerful childhood
          </p>
          <button className="btn bg-teal-400">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
