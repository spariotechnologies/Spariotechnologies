import { projectExamples } from '../projectsData.js';
import { ArrowIcon, ContactBand, Eyebrow, PageHeading, RouteLink, SectionHeading } from '../components/PageElements.jsx';
import './projects.css';

function ProjectCard({ project }) {
  return <article className="project-card" data-stagger-item data-hover-card>
    <RouteLink to={`/projects/${project.slug}`} className="project-card-link" aria-label={`View illustrative scope: ${project.title}`}>
      <figure className="project-card-image" data-image-reveal>
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
        <span className="project-image-badge">Illustrative scope</span>
        <span className="project-image-arrow"><ArrowIcon diagonal /></span>
      </figure>
      <div className="project-card-copy">
        <div className="project-card-meta"><span>{project.number} / PROJECT EXAMPLE</span><span>{project.sector}</span></div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="project-feature-preview">{project.features.slice(0, 3).map((feature) => <span key={feature}>{feature}</span>)}</div>
        <span className="project-card-action">Review solution scope <ArrowIcon /></span>
      </div>
    </RouteLink>
  </article>;
}

export default function ProjectsPage() {
  return <article className="route-page projects-page">
    <section className="page-hero project-index-hero container">
      <div className="page-hero-copy">
        <Eyebrow>Projects · Illustrative solution scopes</Eyebrow>
        <PageHeading before="Business needs," accent="translated into systems." />
        <p className="page-lead" data-page-intro>Explore representative software and IT project scopes based on Spario Technologies' services. Each engagement is planned around the organization's requirements and operating context.</p>
        <div className="project-truth-note" data-page-intro><span className="project-truth-dot" />These are solution examples, not records of completed client engagements.</div>
        <div className="page-hero-actions" data-page-intro><RouteLink to="/contact" className="button button-dark">Discuss a project <ArrowIcon diagonal /></RouteLink><span className="hero-meta">Software · web · mobile · cloud · AI</span></div>
      </div>
      <figure className="page-hero-image image-frame project-index-image" data-image-reveal>
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=88&w=1400" alt="A technology team planning a digital solution" fetchPriority="high" />
        <figcaption className="hero-image-label"><span className="status-dot" />Representative digital solution work</figcaption>
      </figure>
    </section>

    <section className="page-section container project-listing-section">
      <div className="section-intro-row"><SectionHeading eyebrow="Solution portfolio" title="Examples of what" accent="we can scope and build." description="These examples show the types of systems, integrations and workflows Spario Technologies can discuss with organizations." /></div>
      <div className="project-grid" data-stagger-group>
        {projectExamples.map((project) => <ProjectCard project={project} key={project.slug} />)}
      </div>
    </section>
    <ContactBand eyebrow="Have a project requirement?" title="Let’s shape the" accent="right solution scope." />
  </article>;
}

export { ProjectCard };
