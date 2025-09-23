import React from "react";
import banner from "../../../assets/banner/banner.jpg"

const Banner = () => {
  return (
    <div className="hero min-h-[80vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12">
        
        {/* Right Column - Illustration */}
        <img
          src={banner}
          alt="Job Hunt"
          className="w-full max-w-sm rounded-2xl shadow-lg"
        />

        {/* Left Column - Text */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-primary">
            Welcome to Ant Coder 🐜
          </h1>
          <p className="py-6 text-lg text-gray-600 leading-relaxed">
            Your coding journey deserves the right opportunity.  
            Ant Coder connects developers with top companies, helping you land 
            your dream job faster and smarter.  
            🚀 Build your profile, explore jobs, and start your career today!
          </p>
          <div className="flex gap-4">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-outline btn-secondary">Explore Jobs</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
