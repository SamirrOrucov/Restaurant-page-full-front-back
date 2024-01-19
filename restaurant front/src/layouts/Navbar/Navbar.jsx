import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.scss"
function Navbar() {
  return (
    <div className='navbar'>

        <div className="navbar_container">
            <div className="logo">
             <Link to={"/"}>   <button>Tasty</button></Link>
            </div>
            <div className="list">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/add"}>Add Page</NavLink>
                <NavLink to={"/wishlist"}>Wishlist</NavLink>
                <NavLink to={"/basket"}>Basket</NavLink>
                <NavLink to={"/contact"}>Contact</NavLink>

            </div>
            <div className="burger"><i class="fa-solid fa-bars"></i></div>
        </div>
    </div>
  )
}

export default Navbar