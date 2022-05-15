import React from "react";
import chair from '../../assets/images/chair.png';
import background from '../../assets/images/bg.png';


const Banner = () => {
  return (
    <div className="hero min-h-full  lg:min-h-screen md:px-12 lg:px-24" style={{ backgroundImage: `url(${background})` }} >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-xs md:max-w-lg lg:max-w-lg xl:max-w-2xl rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary text-white font-bold px-8 bg-gradient-to-r from-secondary to-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
