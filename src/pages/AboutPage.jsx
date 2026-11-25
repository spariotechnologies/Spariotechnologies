import { ContactBand, Eyebrow, PageHero, RouteLink, SectionHeading } from '../components/PageElements.jsx';

const values = [
  { number: '01', title: 'Understand the requirement', copy: 'We take time to understand business processes and user needs before recommending a technical direction.' },
  { number: '02', title: 'Build for the operating context', copy: 'We consider integrations, data, security and the organization responsible for using the solution.' },
  { number: '03', title: 'Support continuity', copy: 'We include deployment, knowledge transfer and maintenance in the conversation about long-term use.' },
];

export default function AboutPage() {
  return <article className="route-page about-page">
    <PageHero
      kicker="About Spario Technologies · Software and IT services"
      before="Digital systems"
      accent="with business purpose."
      description="Spario Technologies designs, develops, deploys, licenses, maintains and manages software applications and related information technology solutions."
      image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=88&w=1400"
      imageAlt="A technology work environment for collaborative project delivery"
      imageLabel="Software development · IT consultancy · digital solutions"
      imageClass="about-hero-image"
    />

    <section className="about-overview-section">
      <div className="container about-overview" data-scroll-reveal>
        <Eyebrow>Company overview</Eyebrow>
        <h2>Software development, IT consultancy<br /><em>and digital solutions services.</em></h2>
        <p>Our work includes web-based platforms, mobile applications, enterprise software, business automation, database management, cloud services, systems integration, technology support, digital transformation and software training. We serve government institutions, corporate organizations, SMEs and private businesses.</p>
        <RouteLink to="/services" className="text-link">View our services <span>↗</span></RouteLink>
      </div>
    </section>

    <section className="page-section container">
      <div className="purpose-grid" data-stagger-group>
        <article className="purpose-card" data-stagger-item>
          <span>OUR MISSION</span><h3>Make technology useful to the work organizations need to do.</h3>
          <p>We deliver software and IT services that address practical operational, service and business requirements.</p>
        </article>
        <article className="purpose-card purpose-card-featured" data-stagger-item>
          <span>OUR VISION</span><h3>Be a trusted technology partner for public and private organizations.</h3>
          <p>We aim to help organizations plan, adopt and maintain dependable digital systems as their needs evolve.</p>
        </article>
      </div>
    </section>

    <section className="approach-practices">
      <div className="container values-layout">
        <div data-scroll-reveal><SectionHeading eyebrow="How we work" title="Clear thinking," accent="responsible delivery." description="Our values guide how we scope technology work and support the organizations that use it." /></div>
        <div className="practice-list" data-stagger-group>
          {values.map((value) => <article className="practice-row" data-stagger-item key={value.number}>
            <span>{value.number}</span><div><h3>{value.title}</h3><p>{value.copy}</p></div><i>↗</i>
          </article>)}
        </div>
      </div>
    </section>
    <ContactBand eyebrow="Work with Spario Technologies" title="Let’s discuss your" accent="technology requirements." />
  </article>;
}
