import React, { useState, useEffect  } from "react";
import { NavLink } from 'react-router-dom';
import "../../css/Style.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import {
    faPhone,
    faBars,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/logo.png";

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const [mobDropDown, setMobDropDown] = useState(false)
    const [mobDropDown2, setMobDropDown2] = useState(false)
    const [mobDropDown3, setMobDropDown3] = useState(false)


    const openMenu = () => {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true)
    }

    const openMobMenu = () => {
        mobDropDown ? setMobDropDown(false) : setMobDropDown(true)
    }

    const openMobMenu2 = () => {
        mobDropDown2 ? setMobDropDown2(false) : setMobDropDown2(true)
    }

    const openMobMenu3 = () => {
        mobDropDown3 ? setMobDropDown3(false) : setMobDropDown3(true)
    }

    

    useEffect(() => {
        function myFunction(x) {
            if (x.matches) { // If media query matches
              document.getElementById('hamburger').style.display = "block"
            } else {
                document.getElementById('hamburger').style.display = "none"
            }
          }
          
          var x = window.matchMedia("(max-width: 991px)")
          myFunction(x)
          x.addListener(myFunction)
      }, [])


    return (
        <>
            <header>
                <Container>
                    <div className="header-top">
                        <div className="brand-logo">
                            <NavLink to='/'>
                                <img src={logo} alt="brand-logo" />
                            </NavLink>
                        </div>
                        <div id="hamburger" onClick={() => openMenu(false)} style={{ display: menuOpen ? 'none' : 'block' }} className="responsive-menu-icon">
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                        <div id="CloseMenu" onClick={() => openMenu(false)} style={{ display: menuOpen ? 'block' : 'none' }} className="responsive-menu-icon">
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                        <div className="header-social">
                            <div className="header-language">
                                <span>language : </span>
                                <select>
                                    <option>english</option>
                                </select>
                            </div>
                            <div className="social-icons">
                                <NavLink to="#">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </NavLink>
                                <NavLink to="#">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </NavLink>
                                <NavLink to="#">
                                    <FontAwesomeIcon icon={faGooglePlusG} />
                                </NavLink>
                            </div>
                        </div>
                        <div className="header-menu">
                            <ul>
                                <li>
                                    <NavLink to="/">home</NavLink>
                                </li>
                                <li className="menu-divider">/</li>
                                <li className="sub-menu">
                                    <NavLink to="#">
                                        jordan tours
                                        <span>+</span>
                                        <ul className="sub-menus">
                                            <li>
                                                <NavLink to='#'>
                                                    Submenu1
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='#'>
                                                    Submenu1
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </NavLink>
                                </li>
                                <li className="menu-divider">/</li>
                                <li className="sub-menu">
                                    <NavLink to="#">
                                        about jordan
                                        <span>+</span>
                                        <ul className="sub-menus">
                                            <li>
                                                <NavLink to='#'>
                                                    Submenu1
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='#'>
                                                    Submenu1
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </NavLink>
                                </li>
                                <li className="menu-divider">/</li>
                                <li className="sub-menu">
                                    <NavLink to="/agency">
                                        agency
                                        <span>+</span>
                                        <ul className="sub-menus">
                                            <li>
                                                <NavLink to='#'>
                                                    Submenu1
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='#'>
                                                    Submenu1
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </NavLink>
                                </li>
                                <li className="menu-divider">/</li>
                                <li>
                                    <NavLink to="/customer-feedback">client feedback</NavLink>
                                </li>
                                <li className="menu-divider">/</li>
                                <li>
                                    <NavLink to="/blog">blog</NavLink>
                                </li>
                                <li className="menu-divider">/</li>
                                <li>
                                    <NavLink to="/contact-us">contact us</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">
                                        <FontAwesomeIcon icon={faPhone} />
                                        (962)-78-53-11117
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>

                <div className="responsive-menus"
                    style={{ transform: menuOpen ? 'translateX(0)' : 'translateX(-1005px)' }}>
                    <ul>
                        <li>
                            <NavLink to="/">home</NavLink>
                        </li>
                        <li onClick={() => openMobMenu(false)}>
                            <NavLink to="#">
                                jordan tours
                                <span>+</span>
                                <ul className="mobile-sub-menus"
                                    style={{
                                        transform: mobDropDown ? 'scaleY(1)' : 'scaleY(0)',
                                        height: mobDropDown ? 'fit-content' : '0',
                                    }}
                                    >
                                    <li>
                                        <NavLink to='#'>
                                            Submenu1
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='#'>
                                            Submenu1
                                        </NavLink>
                                    </li>
                                </ul>
                            </NavLink>
                        </li>
                        <li onClick={() => openMobMenu2(false)}>
                            <NavLink to="#">
                                about jordan
                                <span>+</span>
                                <ul className="mobile-sub-menus"
                                style={{
                                    transform: mobDropDown2 ? 'scaleY(1)' : 'scaleY(0)',
                                    height: mobDropDown2 ? 'fit-content' : '0',
                                }}
                                    >
                                    <li>
                                        <NavLink to='#'>
                                            Submenu1
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='#'>
                                            Submenu1
                                        </NavLink>
                                    </li>
                                </ul>
                            </NavLink>
                        </li>
                        <li onClick={() => openMobMenu3(false)}>
                            <NavLink to="/agency">
                                agency
                                <span>+</span>
                                <ul className="mobile-sub-menus"
                                style={{
                                    transform: mobDropDown3 ? 'scaleY(1)' : 'scaleY(0)',
                                    height: mobDropDown3 ? 'fit-content' : '0',
                                }}
                                    >
                                    <li>
                                        <NavLink to='#'>
                                            Submenu1
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='#'>
                                            Submenu1
                                        </NavLink>
                                    </li>
                                </ul>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/customer-feedback">client feedback</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact-us">contact us</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">
                                <FontAwesomeIcon icon={faPhone} />
                                (962)-78-53-11117
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}


export default NavBar;