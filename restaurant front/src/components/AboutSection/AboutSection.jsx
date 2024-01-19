import React from "react";
import "./AboutSection.scss";
function AboutSection() {
  return (
    <div className="about">
      <div className="about_container">
        <div className="image">
          <img
            src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg.webp"
            alt=""
          />
        </div>
        <div className="text">
          <div className="top">
            <span>ABOUT TASTY</span>
            <p>Our chef cooks the most delicious food for you</p>
          </div>
          <div className="bottom">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
