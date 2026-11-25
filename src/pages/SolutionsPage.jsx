import { solutionAreas } from '../siteData.js';
import { SolutionCard } from '../components/SiteCards.jsx';
import { ContactBand, PageHero, SectionHeading } from '../components/PageElements.jsx';

export default function SolutionsPage() {
  return <article className="route-page solutions-page">
    <PageHero
      kicker="Digital solutions · Software for organizations"
      before="Systems for"
      accent="everyday business."
      description="We plan and build web platforms, enterprise applications, automation systems and cloud solutions around defined organizational needs."
      image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=88&w=1400"
      imageAlt="A team working together on digital systems"
      imageLabel="Business systems · Digital services · Automation"
      imageClass="solutions-hero-image"
    />

    <section className="page-section container">
      <div className="section-intro-row">
        <SectionHeading eyebrow="Solution areas" title="Start with the process," accent="then shape the system." description="These examples describe common types of software and digital solutions. Scope, integrations and implementation are defined for each organization." />
      </div>
      <div className="solution-grid solution-grid-3" data-stagger-group>
        {solutionAreas.map((solution) => <SolutionCard solution={solution} key={solution.number} />)}
      </div>
    </section>

    <section className="services-detail-section">
      <div className="container solution-approach" data-scroll-reveal>
        <span>FROM REQUIREMENT TO DEPLOYMENT</span>
        <h2>Integrate with the systems<br /><em>and teams already in place.</em></h2>
        <p>Solutions may include custom software, third-party integrations, cloud infrastructure, data management, user training and ongoing maintenance. We clarify the appropriate scope during discovery.</p>
      </div>
    </section>
    <ContactBand eyebrow="Explore a business solution" title="Tell us what the" accent="system needs to do." />
  </article>;
}
