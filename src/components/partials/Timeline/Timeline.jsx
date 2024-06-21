import './timeline.scss'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Timeline() {
    return (
        <div>
           <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2023 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Formation OpenClassrooms</h3>
    <p>
    Intégrateur Web - Développeur Front-End - Reconversion professionnelle
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    date="2020 - 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Technicien d'exploitation</h3>
    <h4 className="vertical-timeline-element-subtitle">ASTEO Toulouse</h4>
    <p>
    Pilotage et surveillance en continu des différents process de la station.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    date="2016 - 2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Technicien préleveur</h3>
    <h4 className="vertical-timeline-element-subtitle">Bioclin Ile de france</h4>
    <p>
      Prélèvements d’eau, d'air et de surface sur la region parisienne.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    date="2014 - 2016"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">BTS Métiers de l’eau</h3>
    <h4 className="vertical-timeline-element-subtitle">Lycée Pierre Gilles de Gennes Paris</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    date="2007 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Baccalauréat Scientifique</h3>
    <h4 className="vertical-timeline-element-subtitle">Lycée Gabriel Faure Tournon-sur-Rhône</h4>
  </VerticalTimelineElement>
</VerticalTimeline> 
        </div>
    )
}

export default Timeline
