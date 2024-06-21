import { useEffect } from 'react';
import './logoscroll.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3Alt, faSass, faGithub, faJs } from '@fortawesome/free-brands-svg-icons';

const logos = [
    faSass, faReact, faHtml5, faCss3Alt, faGithub, faJs
];

function LogoScroll() {
    useEffect(() => {
        const scroller = document.querySelector(".scroller");

        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            scroller.setAttribute("data-animated", true);

            const scrollerInner = scroller.querySelector('.scroller__inner');
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach(item => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute('aria-hidden', true);
                scrollerInner.appendChild(duplicatedItem);
            });
        }
    }, []);

    return (
        <div className='skills'>
          <h2>Skills</h2>
            <div className="scroller" data-direction="right" data-speed="slow">
                <div className="scroller__inner">
                    {logos.map((icon, index) => (
                        <FontAwesomeIcon key={index} icon={icon} size="3x" />
                    ))}
                </div>
            </div>
        </div>
        
    );
}

export default LogoScroll;
