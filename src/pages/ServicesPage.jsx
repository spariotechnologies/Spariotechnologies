import { services } from '../siteData.js';
import { ServiceCard } from '../components/SiteCards.jsx';
import { ContactBand, Eyebrow, PageHero, RouteLink, SectionHeading } from '../components/PageElements.jsx';

const deliveryPrinciples = [
  { number: '01', title: 'Start with requirements', copy: 'We clarify users, workflows, existing technology, constraints and the outcomes the system needs to support.' },
  { number: '02', title: 'Fit the solution to the environment', copy: 'We consider integrations, data, access, security and operating context as part of the technical plan.' },
  { number: '03', title: 'Support use over time', copy: 'Deployment can include documentation, training, technical support, upgrades and maintenance.' },
];

export default function ServicesPage() {
  return <article className="route-page services-page">
    <PageHero
      kicker="Spario Technologies · Core services"
      before="Software and IT"
      accent="for real operations."
      description="Custom software, web and mobile development, consultancy and support for organizations delivering services and managing business processes."
      image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=88&w=1400"
      imageAlt="Technology professionals discussing a project plan"
      imageLabel="From technology advice to software support"
      imageClass="services-hero-image"
    />

    <section className="page-section container">
      <div className="section-intro-row">
        <SectionHeading eyebrow="Eight connected capabilities" title="Choose a service," accent="or combine them." description="Bring us a defined requirement or an early technology challenge. We will help identify the right scope and capabilities." />
        <div className="services-page-aside"><span>01—08</span><p>Software · web · mobile · IT · automation · cloud · AI · support</p></div>
      </div>
      <div className="service-grid service-grid-3" data-stagger-group>
        {services.map((service) => <ServiceCard service={service} key={service.number} />)}
      </div>
    </section>

    <section className="services-detail-section">
      <div className="container services-detail-layout">
        <div className="services-detail-intro" data-scroll-reveal>
          <Eyebrow>How the services fit together</Eyebrow>
          <h2>One technology partner.<br /><em>From plan to support.</em></h2>
          <p>Software projects often involve more than development. Consultancy, integration, data, deployment and training can all shape how well a solution works in its operating environment.</p>
          <RouteLink to="/contact" className="text-link">Discuss your requirements <span className="arrow-nudge">↗</span></RouteLink>
        </div>
        <div className="services-principles" data-stagger-group>
          {deliveryPrinciples.map((item) => <article className="principle-row" data-stagger-item key={item.number}>
            <span className="principle-number">{item.number}</span><div><h3>{item.title}</h3><p>{item.copy}</p></div><span className="principle-arrow">↗</span>
          </article>)}
        </div>
      </div>
    </section>

    <ContactBand eyebrow="Software and IT inquiries" title="Tell us what your" accent="organization needs." />
  </article>;
}
