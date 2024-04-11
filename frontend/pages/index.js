import React, { useState, useEffect } from "react";

//Internal import
import {
  Header,
  Footer,
  HeroSection,
  About,
  AboutRight,
  AboutThird,
  Feature,
  Price,
  Info,
  Faq,
  Testimonial,
  Service,
} from "../Components/Home/index";
import { useStateContext } from "../Context/index";

const index = () => {
  const { APP_NAME } = useStateContext();
  return (
    <div>
      <Header />
      <HeroSection />
      <Service />
      <About />
      <AboutRight />
      <AboutThird />
      <Feature />
      <Price />
      <Faq />
      <Info />
      <Footer />
    </div>
  );
};

export default index;
