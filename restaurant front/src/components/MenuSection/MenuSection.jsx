import React, { useContext, useEffect, useState } from "react";
import "./MenuSection.scss";
import { WishlistContext } from "../../context/WishlistContext";
import { Link } from "react-router-dom";
import { BasketContext } from "../../context/BasketContext";
function MenuSection() {
  const [dbData, setDbData] = useState([]);
  const { wishlist, handleWishlist } = useContext(WishlistContext);
  const { addBasket } = useContext(BasketContext);

  async function getFetch() {
    const response = await fetch("http://localhost:3003/");
    const data = await response.json();
    setDbData(data);
  }
  useEffect(() => {
    getFetch();
  }, []);

  return (
    <div className="menu">
      <div className="menu_container">
        <div className="menu_container_head">
          <div className="text">
            <span>OUR MENU</span>
            <p>Discover Our Exclusive Menu</p>
          </div>
          <div className="category">
            <button>Main</button>
            <button>Dessert</button>
            <button>Drinks</button>
          </div>
        </div>
        <div className="menu_container_cards">
          {dbData.map((item) => (
            <div className="menu_container_cards_card">
              <div className="image">
                <img src={item.image} alt="" />
              </div>
              <div className="info">
                <div className="text">
                  <p className="title">{item.title}</p>
                  <p className="detail">{item.detail}</p>
                </div>
                <p className="price">${item.price}</p>
              </div>
              <div className="operations">
                {wishlist.some((x) => x._id === item._id) ? (
                  <i
                    onClick={() => handleWishlist(item)}
                    class="fa-solid fa-heart red"
                  ></i>
                ) : (
                  <i
                    onClick={() => handleWishlist(item)}
                    class="fa-regular fa-heart"
                  ></i>
                )}
                <Link to={"/detail/" + item._id}>
                  <i class="fa-regular fa-eye"></i>
                </Link>
                <i
                  onClick={() => addBasket(item)}
                  class="fa-solid fa-cart-shopping"
                ></i>
              </div>
            </div>
          ))}
        </div>
        <div className="menu_container_bottom">
          <p>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost
          </p>
          <button>Make a Reserevation</button>
        </div>
      </div>
    </div>
  );
}

export default MenuSection;
