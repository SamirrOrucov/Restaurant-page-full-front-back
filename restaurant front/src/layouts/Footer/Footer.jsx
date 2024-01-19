import React from "react";
import "./Footer.scss"
function Footer() {
  return (
    <div className="footer">
      <div className="footer_container">
      <div className="footer_container_top">
      <div className="tasty a">
          <p className="head">Tasty</p>
          <div className="content">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="icons">
              <div className="icn">
                <i class="fa-brands fa-twitter"></i>
              </div>
              <div className="icn">
                <i class="fa-brands fa-facebook-f"></i>
              </div>
              <div className="icn">
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="open a">
          <p className="head">Opening Hours</p>

          <div className="days">
            <p>
              Monday:<span>08-22:00</span>
            </p>
            <p>
              Tuesday:<span>08-22:00</span>
            </p>
            <p>
              Wednesday:<span>08-22:00</span>
            </p>
            <p>
              Monday:<span>08-22:00</span>
            </p>
            <p>
              Friday:<span>08-22:00</span>
            </p>
            <p>
              Saturday:<span>08-22:00</span>
            </p>
            <p>
              Sunday:<span>08-22:00</span>
            </p>
          </div>
        </div>
        <div className="contact a">
          <p className="head">Contact Information</p>

          <div className="content">
            <p className="location">
              198 West 21th Street, Suite 721 New York NY 10016
            </p>
            <span className="number">+ 1235 2355 98</span>
            <span className="email">info@yoursite.com</span>
            <span className="email">info@yoursite.com</span>
          </div>
        </div>
        <div className="newsletter a">
          <p className="head">Newsletter</p>
          <div className="content">
            <p>
              Far far away, behind the word mountains, far from the countries.
            </p>
            <div className="input">
              <input type="text" name="" id="" />
              <i class="fa-solid fa-paper-plane"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_container_bottom">
        <p>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
      </div>
      </div>
    </div>
  );
}

export default Footer;
