import { NavLink, Link } from "react-router-dom";
import "./Header.css";


export function Header(){
    return(
        <div className="header-menu">           
            <div className="header-buttons">
                <NavLink to="/" activeClassName="selected-link" exact>About Me</NavLink>
                <NavLink to="/cv" activeClassName="selected-link" exact>CV</NavLink>
                <NavLink to="/personal" activeClassName="selected-link" exact>Who I really am</NavLink>
                <NavLink to="/contact" activeClassName="selected-link" exact>Contact</NavLink>
            </div>
        </div>
    );
}