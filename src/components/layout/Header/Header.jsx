import { Link } from 'react-scroll';
import { useState } from "react";
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
                <a href="/" aria-label='Go to home page'>
                    <img src={logo} alt="logo panda du site" />
                </a>
            </div>
            <nav>
                <ul className={`navbar ${isOpen ? 'open' : ''}`}>
                    <li><Link to="presentation-section" spy={true} smooth={true} duration={700} onClick={toggleNavbar} className='nav-link'>Présentations</Link></li>
                    <li><Link to="projects-section" spy={true} smooth={true} duration={700} onClick={toggleNavbar} className='nav-link'>Projets</Link></li>
                    <li><Link to="skills-section" spy={true} smooth={true} duration={700} onClick={toggleNavbar} className='nav-link'>Compétences</Link></li>
                </ul>
                <span
                    className={`toggle-span ${isOpen ? 'open' : ''}`}
                    onClick={toggleNavbar}
                    aria-label={isOpen ? 'Fermer la navigation' : 'Ouvrir la navigation'}
                >
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </span>
            </nav>
        </header>
    );
}

export default Header;