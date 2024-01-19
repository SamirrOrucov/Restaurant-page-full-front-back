import React, { useContext } from 'react'
import "./Wishlist.scss"
import { WishlistContext } from '../../context/WishlistContext'
import { Link } from 'react-router-dom'
function Wishlist() {
    const {wishlist,handleWishlist} = useContext(WishlistContext)
  return (
    <div className='wishlist_container'>
         <div className="wishlist_container_cards">
          {wishlist.map((item) => (
            <div className="wishlist_container_cards_card">
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
                  <i onClick={()=>handleWishlist(item)} class="fa-solid fa-heart red"></i>
                ) : (
                  <i onClick={()=>handleWishlist(item)}  class="fa-regular fa-heart"></i>
                )}
                <Link to={"/detail/"+item._id}><i  class="fa-regular fa-eye"></i></Link>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Wishlist