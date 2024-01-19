import React, { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import { BasketContext } from "../../context/BasketContext";

import "./Basket.scss";
import { Link } from "react-router-dom";
function Basket() {
  const { wishlist, handleWishlist } = useContext(WishlistContext);
  const { deleteBasket, basket,incDecCount } = useContext(BasketContext);

  return (
    <div className="basket_container">
      <div className="basket_container_cards">
        {basket.map((item) => (
          <div className="basket_container_cards_card">
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
              <i onClick={() => deleteBasket(item)} class="fa-regular fa-x"></i>
              <Link to={"/detail/"+item._id}><i  class="fa-regular fa-eye"></i></Link>

            </div>
            <div className="count">
                <button onClick={()=>incDecCount(item,"dec")}>-</button>
{item.count}
                <button  onClick={()=>incDecCount(item,"inc")}>+</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Basket;
