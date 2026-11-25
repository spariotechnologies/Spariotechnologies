import { clientSectors } from '../siteData.js';
import { SectorCard } from '../components/SiteCards.jsx';
import { ContactBand, PageHero, SectionHeading } from '../components/PageElements.jsx';

export default function ClientsPage() {
  return <article className="route-page clients-page">
    <PageHero
      kicker="Who we serve · Public and private sector"
      before="Technology for"
      accent="different needs."
      description="Spario Technologies provides software development, IT consultancy and digital solutions to government institutions, corporate organizations, SMEs and private businesses."
      image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=88&w=1400"
      imageAlt="People collaborating on a technology project"
      imageLabel="Solutions shaped to each operating context"
      imageClass="clients-hero-image"
    />

    <section className="page-section container">
      <div className="section-intro-row">
        <SectionHeading eyebrow="Organizations we support" title="Different environments," accent="shared technology needs." description="The right system depends on the people who use it, the process it supports and the requirements it must meet." />
      </div>
      <div className="sector-grid sector-grid-2" data-stagger-group>
        {clientSectors.map((sector) => <SectorCard sector={sector} key={sector.number} />)}
      </div>
    </section>

    <section className="clients-note-section">
      <div className="container clients-note" data-scroll-reveal>
        <span>SP / ENGAGEMENT PRINCIPLE</span>
        <h2>Start with your context.<br /><em>Then define the technology.</em></h2>
        <p>We begin with organizational goals, current systems, users and constraints. This helps shape a scope that is relevant to the service or business process.</p>
      </div>
    </section>
    <ContactBand eyebrow="Government · Corporate · SME · Private" title="Discuss the needs" accent="of your organization." />
  </article>;
}
