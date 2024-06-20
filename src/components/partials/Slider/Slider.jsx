import { useState, useEffect, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SophieBluel from '../../../assets/sophie-bluel.png'
import BankTree from '../../../assets/bank-tree.webp'
import Nina from '../../../assets/nina.png'
import OhMyFood from '../../../assets/ohmyfood.jpg'
import './slider.scss'

function Slider() {
    const [items] = useState([
        { id: 1, image: SophieBluel , name: 'Sophie Bluel', description: "Architecte d'interieur a son compte" },
        { id: 2, image: BankTree, name: 'Argent Bank', description: 'Site de visualisation de comptes et transactions bancaires' },
        { id: 3, image: Nina, name: 'Nina Carducci', description: 'Photographe passionne a son compte pour evenements' },
        { id: 4, image: 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg', name: 'Kasa', description: 'Location appartements entre particuliers' },
        { id: 5, image: OhMyFood, name: 'OhMyFood', description: 'Startup de restauration gastronomique' },
      ]);
    
      const slideRef = useRef(null);
    
      useEffect(() => {
        const handleNextClick = () => {
          const firstItem = slideRef.current.firstElementChild;
          slideRef.current.appendChild(firstItem);
        };
    
        const handlePrevClick = () => {
          const items = slideRef.current.children;
          const lastItem = items[items.length - 1];
          slideRef.current.insertBefore(lastItem, items[0]);
        };
    
        const nextButton = document.querySelector('.next');
        const prevButton = document.querySelector('.prev');
    
        nextButton.addEventListener('click', handleNextClick);
        prevButton.addEventListener('click', handlePrevClick);
    
        return () => {
          nextButton.removeEventListener('click', handleNextClick);
          prevButton.removeEventListener('click', handlePrevClick);
        };
      }, []);
    
      return (
        <div className="container">
          <div className="slide" ref={slideRef}>
            {items.map((item) => (
              <div
                key={item.id}
                className="item"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="content">
                  <div className="name">{item.name}</div>
                  <div className="des">{item.description}</div>
                  <button>Infos supplementaires</button>
                </div>
              </div>
            ))}
          </div>
          <div className="button">
            <button className="prev">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button className="next">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      );
    };
    

export default Slider
