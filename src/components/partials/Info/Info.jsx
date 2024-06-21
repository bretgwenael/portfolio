import panda from "../../../assets/pandaCoding.jpg"
import './info.scss'

function Info() {
    return (
        <div className="header">
          <div className="content">
            <h2>Bonjour je suis <span>Gwen</span>, Developeur Web</h2>
            <p>
            Je suis en reconversion professionnelle vers le développement web. Actuellement en fin de formation, je suis passionné par la création de solutions numériques innovantes. Découvrez ici mes projets et n'hésitez pas à me contacter pour toute collaboration !
            </p>
        </div>
        <div className="image">
            <img src={panda}/>
        </div>
        </div>
    )
}

export default Info
