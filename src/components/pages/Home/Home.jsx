import Slider from "../../partials/Slider/Slider"
import Info from "../../partials/Info/Info";
import LogoScroll from "../../partials/LogoScroll/LogoScroll";
import './home.scss';

function Home() {
    return (
        <main className='main-container'>
          <section className='presentation-container'>
            <h1>Presentations</h1>
          <Info />
          </section>
          <section className='projects-container'>
            <h1>Mes Projets</h1>
            <Slider />
          </section>
          <section className='skills-container'>
          <h1>Competences</h1>
          <LogoScroll />
          </section>
        </main>
    )
}

export default Home
