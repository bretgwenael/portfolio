import Slider from "../../partials/Slider/Slider";
import Info from "../../partials/Info/Info";
import LogoScroll from "../../partials/LogoScroll/LogoScroll";
import Timeline from "../../partials/Timeline/Timeline";
import './home.scss';

function Home() {
    return (
        <main className='main-container'>
            <section id="presentation-section" className='presentation-container'>
                <h1>Présentations</h1>
                <Info />
            </section>
            <section id="projects-section" className='projects-container'>
                <h1>Mes Projets</h1>
                <Slider />
            </section>
            <section id="skills-section" className='skills-container'>
                <h1>Compétences</h1>
                <Timeline />
                <LogoScroll />
            </section>
        </main>
    )
}

export default Home;
