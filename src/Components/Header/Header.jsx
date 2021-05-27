import { Portrait } from "../../Pages/About/Portrait/Portrait";
import "./Header.css";
import {Navbar, NavbarBrand, NavLink} from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap";

export function Header(){
    return(
            <Navbar collapseOnSelect expand="md" sticky="top">
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