import React, { useState, useEffect } from 'react';
import { FaSearch, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import { onAuthStateChanged, signOut } from 'firebase/auth'; 
import { auth } from '../config/firebase'; 
import './Navbar.css';
import Profile from './Profile';

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); 
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false); 
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user); 
        });

        return unsubscribe;
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    const handleUserIconClick = () => {
        setIsProfileModalOpen(true); 
    };

    const handleCloseModal = () => {
        setIsProfileModalOpen(false); 
    };

    const handleLogout = async () => {
        await signOut(auth);
        setIsAuthenticated(false);
    };

    return (
        <nav className={`navbar ${visible ? "" : "hidden"}`}>
            <div className="navbar-logo">
                <h1>SunThread Market</h1>
            </div>
            
            <div className="navbar-links">
                <a href='/'>HOME</a>
                <a href="/new-release">NEW RELEASE</a>
                {/* <div className="brands-container">
                    <a href="/brands">BRANDS</a>
                    <div className="brands-dropdown">
                        <a href="/brands/nike">Nike</a>
                        <a href="/brands/adidas">Adidas</a>
                        <a href="/brands/puma">Puma</a>
                        <a href="/brands/reebok">Reebok</a>
                        <a href="/brands/new-balance">New Balance</a>
                        <a href="/brands/asics">ASICS</a>
                        <a href="/brands/vans">Vans</a>
                        <a href="/brands/converse">Converse</a>
                        <a href="/brands/fila">Fila</a>
                        <a href="/brands/jordan">Jordan</a>
                        <a href="/brands/balenciaga">Balenciaga</a>
                    </div>
                </div> */}
                <a href="/men">MEN</a>
                <a href="/women">WOMEN</a>
                <a href="/kids">KIDS</a>
                <a href="/about-us">ABOUT US</a>
                <a href="#">CONTACT</a>
            </div>
            
            <div className="navbar-icons">
                <FaSearch className="icon" />
                <FaMapMarkerAlt className="icon" />
                {isAuthenticated ? (
                    <>
                        <div className="user-icon" onClick={handleUserIconClick}>
                            <FaUser className="icon" />
                        </div>
                        <button onClick={handleLogout}>Logout</button> 
                    </>
                ) : (
                    <div className="auth-links">
                        <a href="/login">Login</a>
                        <a href="/signup">Sign Up</a>
                    </div>
                )}
            </div>

            {isProfileModalOpen && (
                <div className="profile-modal">
                    <div className="profile-modal-content">
                        <button onClick={handleCloseModal}>Close</button>
                        <Profile />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
