import { useRef, useState } from 'react';
import Modal from 'react-modal';
import '@fortawesome/fontawesome-free/css/all.min.css';
import items from '../../../Database/data';
import './slider.scss';

function Slider() {
  const slideRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null); // Ajout de l'état selectedItem

  const handleNextClick = () => {
    const firstItem = slideRef.current.firstElementChild;
    slideRef.current.appendChild(firstItem);
  };

  const handlePrevClick = () => {
    const items = slideRef.current.children;
    const lastItem = items[items.length - 1];
    slideRef.current.insertBefore(lastItem, items[0]);
  };

  const openModal = (item) => {
    setSelectedItem(item); // Met à jour l'élément sélectionné
  };

  const closeModal = () => {
    setSelectedItem(null); // Réinitialise l'élément sélectionné
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'black',
      width: '50%',
      height: '50%',
      overflow: 'auto'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  };

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
              <button onClick={() => openModal(item)}>Infos supplementaires</button>
            </div>
          </div>
        ))}
      </div>
      <div className="button">
        <button className="prev" onClick={handlePrevClick}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next" onClick={handleNextClick}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      {selectedItem && ( // Affiche la modal si un élément est sélectionné
        <Modal isOpen={true} onRequestClose={closeModal} style={customStyles}>
          <button onClick={closeModal}>X</button>
          <h2>{selectedItem.name}</h2>
          <p>Objectifs</p>
          <p>langage utilise</p>
        </Modal>
      )}
    </div>
  );
}

export default Slider;