import { useRef, useState, useEffect } from 'react';
import Modal from 'react-modal';
import '@fortawesome/fontawesome-free/css/all.min.css';
import items from '../../../Database/data';
import './slider.scss';

function Slider() {
  const slideRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

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
    setSelectedItem(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsOpen(false);
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
      width: '80%',
      height: '90%',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  };

  return (
    <div className="container">
      <div className="slide" ref={slideRef}>
        {items.map((item) => (
          <div
            key={item.id}
            className="item"
            style={{ backgroundImage: `url(${item.cover})` }}
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
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        appElement={document.getElementById('root')}
      >
        {selectedItem && (
          <>
            <button className="close-button" onClick={closeModal}>X</button>
            <div className="modal-content">
              <div className="images-column">
                {selectedItem.images.map((img, index) => (
                  <img key={index} src={img} alt={`Image ${index + 1}`} />
                ))}
              </div>
              <div className="text-column">
                <h2>{selectedItem.name}</h2>
                {selectedItem.scenario && (
                  <div>
                    <h3>Scenario</h3>
                    <p>{selectedItem.scenario}</p>
                  </div>
                )}
                {selectedItem.objectifs && (
                  <div>
                    <h3>Objectifs</h3>
                    <ul>
                      {selectedItem.objectifs.map((objectif, index) => (
                        <li key={index}>{objectif}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {selectedItem.Langages && (
                  <div>
                    <h3>Langages utilisés</h3>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                      {selectedItem.Langages.map((langage, index) => (
                        <li key={index}>{langage}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {selectedItem.githubLink && (
                  <div className="github-link">
                    <a className="github-link-button" href={selectedItem.githubLink} target="_blank" rel="noopener noreferrer">
                      Voir sur GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}

export default Slider;