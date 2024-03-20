import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <div>
            <div className='navbar'>
                <div className='logo'>
                    <img src="https://meme-token-gilt.vercel.app/assets/29231-B1Z16x30.png" alt="" />
                    <a>$URANUS</a>
                </div>
                <div className='right-section'>
                    <form className='form'>
                        <input className='input' type="search" placeholder='search' />
                        <button className='submit'>Submit</button>
                    </form>
                    <button className='button'>Designed by Suraj Kumar Shaw</button>
                </div>
                <button className="menu-toggle" aria-label="Menu" aria-expanded="false">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
