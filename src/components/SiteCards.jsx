import { ArrowIcon, ImageFrame, RouteLink } from './PageElements.jsx';

export function ServiceCard({ service }) {
  return <article className="service-card" data-stagger-item data-hover-card>
    <div className="service-card-top"><span className="service-card-number">{service.number}</span><span className="service-card-category">{service.category}</span></div>
    <h3>{service.title}</h3>
    <p>{service.value}</p>
    <div className="service-card-bottom"><span>{service.application}</span><span className="motion-arrow"><ArrowIcon diagonal /></span></div>
  </article>;
}

export function ProcessCard({ step }) {
  return <article className="process-card" data-stagger-item data-hover-card>
    <ImageFrame src={step.image} alt={step.alt} className="process-image" />
    <div className="process-card-copy"><span>{step.number}</span><h3>{step.title}</h3><p>{step.copy}</p></div>
  </article>;
}

export function SectorCard({ sector }) {
  return <article className="sector-card" data-stagger-item data-hover-card>
    <span className="sector-card-number">{sector.number}</span>
    <h3>{sector.title}</h3>
    <p>{sector.value}</p>
    <div className="sector-card-examples"><small>Relevant capabilities</small><span>{sector.examples}</span></div>
  </article>;
}

export function SolutionCard({ solution }) {
  return <article className="solution-card" data-stagger-item data-hover-card>
    <span className="solution-card-number">{solution.number}</span>
    <h3>{solution.title}</h3>
    <p>{solution.copy}</p>
    <div className="solution-card-fit">{solution.fit}</div>
    <RouteLink to="/contact" className="solution-card-link">Discuss this solution <ArrowIcon diagonal /></RouteLink>
  </article>;
}

export function DeliveryModelCard({ model, index }) {
  return <article className="package-card" data-stagger-item data-hover-card>
    <div className="package-card-top"><span>0{index + 1}</span><span>{model.category}</span></div>
    <h3>{model.name}</h3>
    <p>{model.copy}</p>
    <RouteLink to="/contact" className="package-link">Discuss your requirements <ArrowIcon diagonal /></RouteLink>
  </article>;
}

export function DisciplineCard({ discipline }) {
  return <article className="discipline-card" data-stagger-item data-hover-card>
    <div className="team-card-head"><span className="team-initials">{discipline.number}</span><span className="team-expertise">{discipline.expertise}</span></div>
    <h3>{discipline.title}</h3>
    <p className="team-bio">{discipline.copy}</p>
  </article>;
}
