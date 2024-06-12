import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXing, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import './footer.scss';

function Footer() {
    return (
        <footer>
            <div className="icons">
                <a href="#">
                    <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className='fab'><FontAwesomeIcon icon={faFacebookF} /></span>
                    </div>
                    <div className="text">
                        Facebook
                    </div>
                </a>
                <a href="#">
                    <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className='fab'><FontAwesomeIcon icon={faXing} /></span>
                    </div>
                    <div className="text">
                        X
                    </div>
                </a>
                <a href="#">
                    <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className='fab'><FontAwesomeIcon icon={faInstagram} /></span>
                    </div>
                    <div className="text">
                        Instagram
                    </div>
                </a>
                <a href="#">
                    <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className='fab'><FontAwesomeIcon icon={faLinkedinIn} /></span>
                    </div>
                    <div className="text">
                        LinkedIn
                    </div>
                </a>
                <a href="#">
                    <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className='fab'><FontAwesomeIcon icon={faGithub} /></span>
                    </div>
                    <div className="text">
                        GitHub
                    </div>
                </a>
            </div>
            <div className="copyright">
                 Copyright © 2024 GwenProg. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;