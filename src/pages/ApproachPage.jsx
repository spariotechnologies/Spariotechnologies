import { approachSteps } from '../siteData.js';
import { ProcessCard } from '../components/SiteCards.jsx';
import { ContactBand, PageHero, RouteLink, SectionHeading } from '../components/PageElements.jsx';

const practices = [
  { number: '01', title: 'Document decisions and scope', copy: 'Keep requirements, responsibilities, integrations and delivery stages clear for everyone involved.' },
  { number: '02', title: 'Consider security and data early', copy: 'Include access, privacy, data handling and operational constraints in solution planning.' },
  { number: '03', title: 'Prepare teams to use the system', copy: 'Plan deployment, documentation, training and ongoing support alongside the build.' },
];

export default function ApproachPage() {
  return <article className="route-page approach-page">
    <PageHero
      kicker="Our approach · Understand through support"
      before="A clear route"
      accent="from need to system."
      description="We connect business requirements to technical decisions, build in reviewable stages and prepare the organization for deployment and continued use."
      image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=88&w=1400"
      imageAlt="A workspace for planning and delivering a technology project"
      imageLabel="Requirements · Delivery · Knowledge transfer"
      imageClass="approach-hero-image"
    />

    <section className="page-section container">
      <div className="section-intro-row">
        <SectionHeading eyebrow="A practical delivery lifecycle" title="Four stages," accent="one joined-up process." description="The work is scaled to the project, but these steps help keep requirements, implementation and handover connected." />
        <span className="step-count">01 <i /> 04</span>
      </div>
      <div className="approach-progress" aria-hidden="true"><span data-process-progress /></div>
      <div className="process-grid process-grid-4" data-stagger-group>
        {approachSteps.map((step) => <ProcessCard step={step} key={step.number} />)}
      </div>
    </section>

    <section className="approach-practices">
      <div className="container approach-practices-layout">
        <div className="approach-practices-heading" data-scroll-reveal>
          <SectionHeading eyebrow="Delivery considerations" title="Technology work" accent="must work in context." description="A system has to fit the people, processes and information around it. We keep those needs visible during delivery." />
        </div>
        <div className="practice-list" data-stagger-group>
          {practices.map((practice) => <article className="practice-row" data-stagger-item key={practice.number}>
            <span>{practice.number}</span><div><h3>{practice.title}</h3><p>{practice.copy}</p></div><i>↗</i>
          </article>)}
        </div>
      </div>
    </section>

    <ContactBand eyebrow="Plan a technology project" title="Start with the" accent="business requirement." />
  </article>;
}
