import { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from "../../../assets/CyberPunkPanda.png";
import "./header.scss";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className='header-logo'>
                <Link to="/" aria-label='Go to home page'>
                    <img src={logo} alt="logo panda du site" />
                </Link>
            </div>
            <nav>
                <ul className={`navbar ${isOpen ? 'open' : ''}`}>
                    <li><Link className='nav-link'>Presentation</Link></li>
                    <li><Link className='nav-link'>Projets</Link></li>
                    <li><Link className='nav-link'>Competences</Link></li>
                </ul>   
            </nav>
            <span 
                    className='toggle-span' 
                    onClick={toggleNavbar} 
                    aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
                >
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </span>
        </header>
    )
}

export default Header;
