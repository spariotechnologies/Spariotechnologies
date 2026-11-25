import { deliveryDisciplines } from '../siteData.js';
import { DisciplineCard } from '../components/SiteCards.jsx';
import { ContactBand, PageHero, SectionHeading } from '../components/PageElements.jsx';

export default function TeamPage() {
  return <article className="route-page team-page">
    <PageHero
      kicker="Our team · Technology disciplines"
      before="The expertise"
      accent="behind the delivery."
      description="Technology projects draw on business analysis, software engineering, cloud and data expertise, and ongoing support. The mix depends on the requirements."
      image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=88&w=1400"
      imageAlt="Technology professionals collaborating on a project"
      imageLabel="Analysis · engineering · cloud · support"
      imageClass="team-hero-image"
    />

    <section className="page-section container">
      <div className="section-intro-row">
        <SectionHeading eyebrow="Delivery capabilities" title="The right skills," accent="for the requirement." description="These are the core disciplines that can contribute to an engagement. Project teams and responsibilities are defined around the agreed scope." />
      </div>
      <div className="team-grid discipline-grid" data-stagger-group>
        {deliveryDisciplines.map((discipline) => <DisciplineCard discipline={discipline} key={discipline.number} />)}
      </div>
    </section>

    <section className="team-values-section">
      <div className="container team-values" data-scroll-reveal>
        <span className="team-values-index">SP / COLLABORATIVE DELIVERY</span>
        <h2>Business context.<br /><em>Technical implementation.</em></h2>
        <p>Clear responsibilities and knowledge transfer help connect project decisions to the people who operate the solution.</p>
      </div>
    </section>
    <ContactBand eyebrow="Talk to our technology team" title="Bring your business" accent="and technical questions." />
  </article>;
}
