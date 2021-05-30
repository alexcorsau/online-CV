import { Portrait } from "../../Pages/About/Portrait/Portrait";
import "./Header.css";
import {Navbar, NavbarBrand, NavLink} from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap";
import { useEffect, useState, useRef } from "react";

export function Header(){
    const [navBackground, setNavBackground] = useState(false);
    const navRef = useRef();
    
    const handleScroll = () => {
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
    return(
            <Navbar collapseOnSelect expand="sm" sticky="top" className={navBackground ? "navbar-withbackground" : ""}>
                <NavbarBrand href="/about">
                    <Portrait/>
                </NavbarBrand>
                <Navbar.Toggle aria-controls="menu-buttons"/>
                <Navbar.Collapse id="menu-buttons">
                    <LinkContainer exact to="/">
                        <NavLink active={false}>About Me</NavLink>
                    </LinkContainer>
                    <LinkContainer exact to="/cv">
                        <NavLink active={false}>CV</NavLink>
                    </LinkContainer>
                    <LinkContainer exact to="/personal">
                        <NavLink active={false}>Personal</NavLink>
                    </LinkContainer>
                    <LinkContainer exact to="/contact" >
                        <NavLink active={false}>Contact</NavLink>
                    </LinkContainer>
                </Navbar.Collapse>
            </Navbar>                
    );
}