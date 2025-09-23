import React from "react";
import Banner from "./Banner/Banner";
import HowItWorks from "./HowItWorks/HowItWorks";
import Features from "./Features/Features";
import CallToAction from "./CallToAction/CallToAction";
import Testimonials from "./Testimonial/Testimonials";
import Newsletter from "./Newsletter/Newsletter";
import Stats from "./Stats/Stats";

const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <Features />
      <Stats />
      <CallToAction />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
