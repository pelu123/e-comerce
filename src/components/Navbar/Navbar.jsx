import React from 'react';
import './navbar.css';
import LogoBtn from './LogoBtn/LogoBtn';
import NavbarBtns from './NavbarBtns/NavbarBtns';
import CartWidget from './CartWidget/CartWidget';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <LogoBtn/>
                <NavbarBtns/>
                <CartWidget/>
            </div>
        </nav>

    );
}

export default Navbar;
