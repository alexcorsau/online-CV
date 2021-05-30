import { Portrait } from "../../Pages/About/Portrait/Portrait";
import "./Header.css";
import {Navbar, NavbarBrand, NavLink} from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap";
import { useEffect, useState, useRef } from "react";

export function Header(){
    // const [navbarBackground,setNavbarBackground] = useState(false);
    // const changeNavbarBackground = ()=> {
    //     console.log(window.scrollY);
    //     window.scrollY>=30 ? setNavbarBackground(true) : setNavbarBackground(false);
    // }
    // window.addEventListener("scroll",changeNavbarBackground);
    // window

    const [navBackground, setNavBackground] = useState(false);
    const navRef = useRef();
    // navRef.current = navBackground;
    
    const handleScroll = () => {
        // console.log(document.getElementById("app").scrollTop);
        const show = document.getElementById("app").scrollTop > 50;
        console.log(show);
        if (navRef.current !== show) {
          setNavBackground(show);
        }
      }
    useEffect(() => {
      document.getElementById("app").addEventListener('scroll', handleScroll)
      return () => {
        document.getElementById("app").removeEventListener('scroll', handleScroll)
      }
    }, []);
    // console.log((document.getElementById("app")).scrollTop);
    return(
            <Navbar collapseOnSelect expand="sm" sticky="top" className={navBackground ? "navbar-withbackground" : ""}>
                <NavbarBrand href="/">
                    <Portrait/>
                </NavbarBrand>
                <Navbar.Toggle aria-controls="menu-buttons"/>
                <Navbar.Collapse id="menu-buttons">
                    <LinkContainer to="/about">
                        <NavLink>About Me</NavLink>
                    </LinkContainer>
                    <LinkContainer to="/cv">
                        <NavLink >CV</NavLink>
                    </LinkContainer>
                    <LinkContainer to="/personal">
                        <NavLink>Personal</NavLink>
                    </LinkContainer>
                    <LinkContainer to="/contact" >
                        <NavLink>Contact</NavLink>
                    </LinkContainer>
                </Navbar.Collapse>
            </Navbar>

                
    );
}