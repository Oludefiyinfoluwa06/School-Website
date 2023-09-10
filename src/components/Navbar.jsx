import { FaBars } from "react-icons/fa";
import { navLinks } from "../constants";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return ( 
        <nav className="navbar">
            <label>Sch<span style={{color: '#0b8219'}}>ool</span></label>
            <div className="nav-links">
                {navLinks.map(nav => (
                    <NavLink to={nav.link} key={nav.id} className="link">{nav.id}</NavLink>
                ))}
            </div>
            <div className="menu-icons">
                <FaBars 
                    onClick={() => {
                        setToggle(prev => !prev);
                    }}
                />
            </div>
            <div className={`${toggle ? 'show' : 'hidden'}`}>
                {navLinks.map(nav => (
                    <NavLink to={nav.link} key={nav.id}>{nav.id}</NavLink>
                ))}
            </div>
        </nav>
    );
}
 
export default Navbar;