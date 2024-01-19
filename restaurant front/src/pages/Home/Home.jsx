import React from "react";
import MenuSection from "../../components/MenuSection/MenuSection";
import { Helmet } from "react-helmet-async";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import GuestSection from "../../components/GusetSection/GuestSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import BlogSection from "../../components/BlogSection/BlogSection";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HeaderSection />
      <AboutSection />
      <MenuSection />
      <GuestSection />
      <BlogSection/>
    </div>
  );
}

export default Home;
