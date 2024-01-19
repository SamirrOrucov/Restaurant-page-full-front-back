import React , { useContext, useEffect, useState } from 'react'
import "./DetailPage.scss"
import { useParams } from 'react-router-dom';
import { WishlistContext } from '../../context/WishlistContext';
function DetailPage() {
    const {wishlist,handleWishlist} = useContext(WishlistContext)

    const {id}=useParams()
    const [dbData, setDbData] = useState([]);
    async function getFetch() {
      const response = await fetch("http://localhost:3003/"+id);
      const data = await response.json();
      setDbData(data);
    }
    useEffect(() => {
      getFetch();
    }, []);
  
  return (
    <div className='detail_container'>
         <div className="detail_container_cards">
          {
            <div className="detail_container_cards_card">
              <div className="image">
                <img src={dbData.image} alt="" />
              </div>
              <div className="info">
                <div className="text">
                  <p className="title">{dbData.title}</p>
                  <p className="detail">{dbData.detail}</p>
                </div>
                <p className="price">${dbData.price}</p>
              </div>
              <div className="operations">
                {wishlist.some((x) => x._id === dbData._id) ? (
                  <i onClick={()=>handleWishlist(dbData)} class="fa-solid fa-heart red"></i>
                ) : (
                  <i onClick={()=>handleWishlist(dbData)}  class="fa-regular fa-heart"></i>
                )}
              </div>
            </div>
          }
        </div>
    </div>
  )
}

export default DetailPage