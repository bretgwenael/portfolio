import panda from "../../../assets/pandaCoding.webp"
import './info.scss'

function Info() {
    return (
        <div className="presentation">
          <div className="presentation__text">
            <h2>Bonjour je suis <span>Gwen</span>, Developpeur Web</h2>
            <p>
            Je suis en reconversion professionnelle vers le développement web. Actuellement en fin de formation, je suis passionné par la création de solutions numériques innovantes. Découvrez ici mes projets et n'hésitez pas à me contacter pour toute collaboration !
            </p>
        </div>
        <div className="presentation__image">
            <img src={panda} alt="panda futuriste avec amelioration mecanique"/>
        </div>
        </div>
    )
}

export default Info