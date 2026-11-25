import { findProjectExample, projectExamples } from '../projectsData.js';
import { ArrowIcon, ContactBand, Eyebrow, ImageFrame, PageHero, RouteLink, SectionHeading } from '../components/PageElements.jsx';
import { ProjectCard } from './ProjectsPage.jsx';
import './projects.css';

export default function ProjectDetailPage({ slug }) {
  const project = findProjectExample(slug);
  if (!project) {
    return <article className="route-page project-not-found container">
      <Eyebrow>Project examples</Eyebrow>
      <h1>That solution example is not available.</h1>
      <p>Browse the current set of illustrative project scopes.</p>
      <RouteLink to="/projects" className="button button-dark">View projects <ArrowIcon /></RouteLink>
    </article>;
  }

  const relatedProjects = projectExamples.filter((item) => item.slug !== project.slug).slice(0, 2);

  return <article className="route-page project-detail-page">
    <PageHero
      kicker={`Illustrative project scope · ${project.sector}`}
      before={project.title}
      accent="Solution example"
      description={project.summary}
      image={project.image}
      imageAlt={project.imageAlt}
      imageLabel="Representative concept · Scope defined per organization"
      imageClass="project-detail-hero-image"
    />

    <section className="project-detail-truth container" data-scroll-reveal>
      <span className="project-truth-dot" />
      <p>This page describes an illustrative solution scope. It is not presented as a completed client project or a measured project result.</p>
    </section>

    <section className="project-detail-overview container">
      <div className="project-detail-context" data-scroll-reveal>
        <SectionHeading eyebrow="Project context" title="Start from the" accent="way work happens." description={project.context} />
      </div>
      <div className="project-detail-feature-panel" data-stagger-group>
        <div className="project-detail-feature-heading"><span>ILLUSTRATIVE SCOPE</span><h2>Potential system features</h2></div>
        <ul>{project.features.map((feature, index) => <li data-stagger-item key={feature}><span>0{index + 1}</span>{feature}</li>)}</ul>
      </div>
    </section>

    <section className="project-detail-support-section">
      <div className="container project-detail-support">
        <div data-scroll-reveal><Eyebrow>Relevant services</Eyebrow><h2>Capabilities that may support this scope.</h2></div>
        <div className="project-service-tags" data-stagger-group>{project.serviceAreas.map((service) => <span data-stagger-item key={service}>{service}</span>)}</div>
        <RouteLink to="/contact" className="button button-dark">Discuss your requirements <ArrowIcon diagonal /></RouteLink>
      </div>
    </section>

    <section className="page-section container related-projects-section">
      <div className="section-intro-row"><SectionHeading eyebrow="More solution examples" title="Other needs we can" accent="help plan for." /></div>
      <div className="project-grid project-grid-related" data-stagger-group>{relatedProjects.map((item) => <ProjectCard project={item} key={item.slug} />)}</div>
      <RouteLink to="/projects" className="text-link project-back-link">Browse all solution examples <ArrowIcon /></RouteLink>
    </section>
    <ContactBand eyebrow="Business and technology inquiry" title="Discuss a system" accent="for your organization." />
  </article>;
}

export { findProjectExample };
