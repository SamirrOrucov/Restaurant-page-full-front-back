import React from 'react'
import "./BlogSection.scss"
function BlogSection() {
  return (
    <div className="blog">
    <div className="blog_container">
      <div className="blog_container_head">
        <div className="text">
          <span>blogS SAYS</span>
          <p>Our Satisfied blogs says</p>
        </div>
      </div>
      <div className="blog_container_cards">
        <div className="blog_container_cards_card">
          <img
            src="https://preview.colorlib.com/theme/tasty/images/image_5.jpg.webp"
            alt=""
          />
          
          <div className="desc">
              <p>Far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
          <div className="bottom">
              <p className="name">Read More..</p>
              <p  className="from"><i class="fa-regular fa-message"></i></p>
          </div>
        </div>
        <div className="blog_container_cards_card">
          <img
            src="https://preview.colorlib.com/theme/tasty/images/image_4.jpg.webp"
            alt=""
          />
          
          <div className="desc">
              <p>Far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
          <div className="bottom">
              <p className="name">Read More..</p>
              <p  className="from"><i class="fa-regular fa-message"></i></p>
          </div>
        </div>
        <div className="blog_container_cards_card">
          <img
            src="https://preview.colorlib.com/theme/tasty/images/image_3.jpg.webp"
            alt=""
          />
          
          <div className="desc">
              <p>Far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
          <div className="bottom">
              <p className="name">Read More..</p>
              <p  className="from"><i class="fa-regular fa-message"></i></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BlogSection