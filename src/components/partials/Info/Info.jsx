import panda from "../../../assets/pandaCoding.jpg"
import './info.scss'

function Info() {
    return (
        <div className="header">
          <div className="content">
            <span className="blur"></span>
            <span className="blur"></span>
            <h4>CREATE YOUR SITE LIKE A PRO</h4>
            <h2>Hi, I'm <span>Gwen</span>, Web Developer</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quas laudantium aliquid! Quos voluptatem consequatur eaque facilis facere aliquid architecto. Aut quidem velit rerum rem odio aliquam quas, ratione vel?
            </p>
            <button className="btn">Get Started </button>
        </div>
        <div className="image">
            <img src={panda}/>
        </div>
        </div>
    )
}

export default Info
