import React from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = () => {

    return(
        <>
        <div className="container-fluid nav_bg">
            <div className='row'>
                <div className="col-10 mx-auto">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
   <NavLink exact className="navbar-brand mt-4" to="/">Manjulata Organic <br /> Farming & Nursery </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <NavLink exact activeClassName="menu_active" className="nav-link" to="/"> HOME </NavLink>
      </li>
      <li class="nav-item">
        <NavLink exact activeClassName="menu_active" className="nav-link" to="/products"> PRODUCTS </NavLink>
      </li>
      <li class="nav-item">
        <NavLink exact activeClassName="menu_active" className="nav-link" to="/about"> ABOUT US </NavLink>
      </li>
      <li class="nav-item">
        <NavLink exact activeClassName="menu_active" className="nav-link" to="/contact"> CONTACT </NavLink>
      </li>
    </ul>
  </div>
</nav>
                </div>
            </div>
        </div>
        </>
    )
}


export default Navbar;