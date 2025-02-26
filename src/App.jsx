import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import NavbarBanner from "./Components/Navbar/NavbarBanner";
import Hero from "./Components/Hero/Hero";
import NumberCounter from "./Components/NumberCounter/NumberCounter";
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs";
import Img1 from "./assets/banner1.png";
import Img2 from "./assets/banner2.png";
import Banner from "./Components/Banner/Banner";

const BannerData = {
  image: Img1,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Personalized Professional Online Tutor on Your Schedule",
  subtitle:
    "Our scheduling system allows you to select based on your free time. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, tempore quod ipsa debitis repellendus distinctio libero quo perferendis dolor sit amet consectetur adipisicing elit. Error, tempore quod ipsa debitis repellendus distinctio libero quo perferendis blanditiis porro modi,porro modi, animi voluptates ratione excepturi.",
  link: "#",
};

const BannerData2 = {
  image: Img2,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Talented and Qualified Tutors to Serve You for Help",
  subtitle:
    "Our scheduling system allows you to select based on your free time. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, tempore quod ipsa debitis repellendus distinctio libero quo perferendis dolor sit amet consectetur adipisicing elit. Error, tempore quod ipsa debitis repellendus distinctio libero quo perferendis blanditiis porro modi,porro modi, animi voluptates ratione excepturi.",
  link: "#",
};

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <NavbarBanner />
      <Hero />
      <NumberCounter />
      <WhyChooseUs />
      <Banner {...BannerData} />
      <Banner {...BannerData2} reverse={true} />
    </main>
  );
};

export default App;
