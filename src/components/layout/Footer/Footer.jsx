import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXing, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import './footer.scss';

const socialLinks = [
    { icon: faFacebookF, url: '#', name: 'Facebook' },
    { icon: faXing, url: '#', name: 'X' },
    { icon: faInstagram, url: 'https://www.instagram.com/gwenael.bret/', name: 'Instagram' },
    { icon: faLinkedinIn, url: 'https://www.linkedin.com/in/gwenael-bret-2153b123a/', name: 'LinkedIn' },
    { icon: faGithub, url: 'https://github.com/bretgwenael/', name: 'GitHub' },
];

function Footer() {
    return (
        <footer>
            <div className="icons">
                {socialLinks.map((link, index) => (
                    <a key={index} href={link.url}>
                        <div className="layer">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className='fab'>
                                <FontAwesomeIcon icon={link.icon} />
                            </span>
                        </div>
                        <div className="text">
                            {link.name}
                        </div>
                    </a>
                ))}
            </div>
            <div className="copyright">
                Copyright © 2024. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;