import React from "react";
import './GuestSection.scss'

function GuestSection() {
  return (
    <div className="guest">
      <div className="guest_container">
        <div className="guest_container_head">
          <div className="text">
            <span>GUESTS SAYS</span>
            <p>Our Satisfied Guests says</p>
          </div>
        </div>
        <div className="guest_container_cards">
          <div className="guest_container_cards_card">
            <img
              src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp"
              alt=""
            />
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className="desc">
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className="bottom">
                <p className="name">Dennis Green</p>
                <p  className="from">Guest from Italy</p>
            </div>
          </div>
          <div className="guest_container_cards_card">
            <img
              src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp"
              alt=""
            />
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className="desc">
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className="bottom">
                <p className="name">Dennis Green</p>
                <p  className="from">Guest from Italy</p>
            </div>
          </div>
          <div className="guest_container_cards_card">
            <img
              src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp"
              alt=""
            />
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className="desc">
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className="bottom">
                <p className="name">Dennis Green</p>
                <p  className="from">Guest from Italy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuestSection;
