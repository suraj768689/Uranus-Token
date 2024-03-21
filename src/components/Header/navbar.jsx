import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {

    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

    return (
        <div>
            <div className='navbar'>
                <div className='logo'>
                    <img src="https://meme-token-gilt.vercel.app/assets/29231-B1Z16x30.png" alt="" />
                    <h4 style={{fontWeight: 'bold'}}>$URANUS</h4>
                    <a>Home</a>
                    <a>AboutUs</a>
                </div>
                <div className='right-section'>
                    <form className='form'>
                        <input className='input' type="search" placeholder='search' />
                        <button className='submit'>Search</button>
                    </form>
                    <button className='button'>Designed by Suraj Kumar Shaw</button>
                </div>
                <button className="menu-toggle" aria-expanded="false" onClick={() => setIsOffcanvasOpen(!isOffcanvasOpen)} aria-label="Toggle navigation">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
                <div className={`offcanvas offcanvas-end${isOffcanvasOpen ? ' show' : ''}`} style={{backgroundColor:'light-gray'}} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                  <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">$Uranus</h5>
                      <button type="button" className="btn-close" onClick={() => setIsOffcanvasOpen(false)} aria-label="Close"></button>
                   </div>
                   <div className="offcanvas-body">
                       <form className="d-flex mt-3" role="search">
                          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                          <button className="btn btn-outline-success" type="submit">Search</button>
                       </form>
                       <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                          <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="#">Home</a>
                           </li>
                          <li className="nav-item">
                             <a className="nav-link active" href="#">About us</a>
                           </li>
                           <li>
                              <button className='button' style={{marginTop:'10px'}}>Designed by Suraj Kumar Shaw</button>
                           </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;