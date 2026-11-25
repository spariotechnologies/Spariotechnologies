import { approachSteps, clientSectors, deliveryModels, services, solutionAreas } from '../siteData.js';
import { DeliveryModelCard, ProcessCard, SectorCard, ServiceCard, SolutionCard } from '../components/SiteCards.jsx';
import { ArrowIcon, ContactBand, Eyebrow, PageHero, RouteLink, SectionHeading } from '../components/PageElements.jsx';

export default function HomePage() {
  return <article className="route-page home-page">
    <PageHero
      kicker="Spario Technologies · Software, consultancy and digital solutions"
      before="Software for"
      accent="the work ahead."
      description="We design, develop, deploy and support software that helps organizations run services, manage operations and serve people through technology."
      image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=88&w=1400"
      imageAlt="Technology professionals collaborating around a table"
      imageLabel="Software development · IT consultancy · digital solutions"
      imageClass="home-hero-image"
    />

    <section className="client-ribbon container" data-scroll-reveal aria-label="Organizations Spario serves">
      <span>Technology services for</span>
      <div className="client-wordmarks"><b>Government institutions</b><b>Corporate organizations</b><b>SMEs</b><b>Private businesses</b></div>
    </section>

    <section className="page-section container">
      <div className="section-intro-row">
        <SectionHeading eyebrow="Software and IT services" title="Technology built" accent="around your needs." description="From custom applications to technology advisory and ongoing support, Spario Technologies helps organizations plan, build and manage digital systems." />
        <RouteLink to="/services" className="text-link">Explore all services <ArrowIcon /></RouteLink>
      </div>
      <div className="service-grid service-grid-3" data-stagger-group>
        {services.slice(0, 6).map((service) => <ServiceCard service={service} key={service.number} />)}
      </div>
      <div className="section-footnote"><span>Software · web · mobile · consultancy · cloud · AI</span><RouteLink to="/services" className="quiet-link">See all eight services <ArrowIcon diagonal /></RouteLink></div>
    </section>

    <section className="story-section">
      <div className="container story-layout">
        <div className="story-image-column" data-scroll-reveal>
          <figure className="image-frame story-image" data-image-reveal>
            <img src={approachSteps[1].image} alt="Technology project planning session" loading="lazy" />
          </figure>
          <div className="image-caption"><span>SP / TECHNOLOGY PARTNER</span><span>From planning through support</span></div>
        </div>
        <div className="story-copy" data-scroll-reveal>
          <Eyebrow>About Spario Technologies</Eyebrow>
          <h2>Practical technology.<br /><em>Clear business purpose.</em></h2>
          <p>We provide software development, IT consultancy and digital solutions to government institutions, corporate organizations, SMEs and private businesses. Our work spans web and mobile platforms, enterprise software, business automation, cloud, data and technical support.</p>
          <RouteLink to="/about" className="text-link">Company overview <ArrowIcon /></RouteLink>
        </div>
      </div>
    </section>

    <section className="page-section container">
      <div className="section-intro-row">
        <SectionHeading eyebrow="Solution areas" title="Solve real operational" accent="and service needs." description="We scope systems around specific users and processes. These are examples of the business solutions we can plan and deliver." />
        <RouteLink to="/projects" className="text-link">View project examples <ArrowIcon /></RouteLink>
      </div>
      <div className="solution-grid" data-stagger-group>
        {solutionAreas.slice(0, 3).map((solution) => <SolutionCard solution={solution} key={solution.number} />)}
      </div>
    </section>

    <section className="story-section approach-preview-section">
      <div className="container">
        <div className="section-intro-row">
          <SectionHeading eyebrow="A clear delivery process" title="Understand. Plan." accent="Build. Support." description="We work through requirements, delivery, deployment and knowledge transfer so the solution fits the organization using it." />
          <RouteLink to="/approach" className="text-link">How we work <ArrowIcon /></RouteLink>
        </div>
        <div className="process-grid process-grid-4" data-stagger-group>
          {approachSteps.map((step) => <ProcessCard step={step} key={step.number} />)}
        </div>
      </div>
    </section>

    <section className="page-section container">
      <div className="section-intro-row">
        <SectionHeading eyebrow="Who we serve" title="Technology for public and" accent="private organizations." description="We adapt the engagement to your environment, whether you are modernizing existing systems or planning a new digital service." />
        <RouteLink to="/clients" className="text-link">See who we support <ArrowIcon /></RouteLink>
      </div>
      <div className="sector-grid sector-grid-4" data-stagger-group>
        {clientSectors.map((sector) => <SectorCard sector={sector} key={sector.number} />)}
      </div>
    </section>

    <section className="delivery-preview">
      <div className="container">
        <div className="section-intro-row">
          <SectionHeading eyebrow="Ways to work with us" title="Support matched" accent="to the requirement." description="Engage Spario Technologies for a defined software project, technology advice or continuing technical support." />
          <RouteLink to="/contact" className="text-link">Request a consultation <ArrowIcon /></RouteLink>
        </div>
        <div className="package-grid" data-stagger-group>
          {deliveryModels.map((model, index) => <DeliveryModelCard model={model} index={index} key={model.name} />)}
        </div>
      </div>
    </section>

    <section className="home-team-callout container" data-scroll-reveal>
      <span className="home-team-callout-number">SP / DELIVERY</span><p>Bring business context together with the technology expertise to act on it.</p><RouteLink to="/team" className="button button-light">Our team <ArrowIcon diagonal /></RouteLink>
    </section>

    <ContactBand eyebrow="Business and technology inquiries" title="Have a system" accent="or service to build?" />
  </article>;
}
