import React from 'react'
import logo from '../Assets/logo.png'
const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav-section-one">
                    <img src={logo} alt="lgog"></img>
                </div>

                <div className="nav-section-two">
                    <ul>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>Delivery</li>
                    </ul>
                </div>

                <div className="nav-section-three">
                    <i class="fas fa-phone-alt"></i>
                    <i class="fas fa-shopping-cart"></i>
                </div>
            </nav>
        </header>
    )}
export default Header;