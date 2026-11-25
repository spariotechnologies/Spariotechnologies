export function ArrowIcon({ diagonal = false }) {
  return diagonal
    ? <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
    : <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function BrandArtwork() {
  return <>
    <svg className="brand-symbol" viewBox="0 0 72 84" fill="none" aria-hidden="true">
      <path d="M5 5c21-.4 39 13.5 45 34C27.8 35.5 11.8 23.1 5 5Z" />
      <path d="M35 5h11c13.4 0 22 7.3 22.6 18.1.6 10.7-7.1 17.7-20.5 17.7H37" />
      <circle cx="8" cy="43" r="5.3" />
      <path d="M5 79c1.2-20.3 17.5-34.6 45-37C44.8 62.3 27.6 76.4 5 79Z" />
      <path d="M36.5 43h9.8c13.1 0 22 7 22.3 17.7.3 11.2-8 18.3-22.2 18.3H35" />
    </svg>
    <span>spario</span>
  </>;
}

export function BrandMark({ compact = false }) {
  return <a className={`brand${compact ? ' brand-compact' : ''}`} href="#/" data-route-link aria-label="Spario home">
    <BrandArtwork />
  </a>;
}

export function BrandVisual({ className = '' }) {
  return <span className={`brand brand-visual ${className}`} aria-hidden="true"><BrandArtwork /></span>;
}

export function RouteLink({ to, className = '', children, ...props }) {
  return <a href={`#${to}`} data-route-link className={className} {...props}>{children}</a>;
}

export function SectionLink({ to, className = '', children, ...props }) {
  return <a href={`#${to}`} data-section-scroll className={className} {...props}>{children}</a>;
}

export function Eyebrow({ children, light = false }) {
  return <div className={`eyebrow${light ? ' eyebrow-light' : ''}`}><span className="eyebrow-line" />{children}</div>;
}

function Word({ word, accent = false }) {
  return <span className="word-mask"><span className={`page-word${accent ? ' page-word-accent' : ''}`} data-title-word>{word}</span></span>;
}

export function PageHeading({ before, accent }) {
  const label = [before, accent].filter(Boolean).join(' ');
  return <h1 className="page-title" aria-label={label}>
    <span className="screen-reader-only">{label}</span>
    <span aria-hidden="true">
      {before.split(/\s+/).map((word, index) => <Word key={`before-${index}`} word={word} />)}
      {accent && <span className="page-title-accent">{accent.split(/\s+/).map((word, index) => <Word key={`accent-${index}`} word={word} accent />)}</span>}
    </span>
  </h1>;
}

export function PageHero({ kicker, before, accent, description, image, imageAlt, imageLabel, imageClass = '' }) {
  return <section className="page-hero container">
    <div className="page-hero-copy">
      <Eyebrow>{kicker}</Eyebrow>
      <PageHeading before={before} accent={accent} />
      <p className="page-lead" data-page-intro>{description}</p>
      <div className="page-hero-actions" data-page-intro>
        <RouteLink to="/contact" className="button button-dark">Start a project <ArrowIcon diagonal /></RouteLink>
        <span className="hero-meta">Software · IT consultancy · digital solutions</span>
      </div>
    </div>
    <figure className={`page-hero-image image-frame ${imageClass}`} data-page-artwork data-image-reveal>
      <img src={image} alt={imageAlt} fetchPriority="high" />
      {imageLabel && <figcaption className="hero-image-label"><span className="status-dot" />{imageLabel}</figcaption>}
      <span className="image-index">S / 0{imageClass.includes('team') ? 5 : 1}</span>
    </figure>
  </section>;
}

export function SectionHeading({ eyebrow, title, accent, description, light = false }) {
  return <div className={`section-heading${light ? ' section-heading-light' : ''}`} data-scroll-reveal>
    <Eyebrow light={light}>{eyebrow}</Eyebrow>
    <h2>{title} {accent && <em>{accent}</em>}</h2>
    {description && <p>{description}</p>}
  </div>;
}

export function ImageFrame({ src, alt, className = '', ...props }) {
  return <figure className={`image-frame ${className}`} data-image-reveal {...props}>
    <img src={src} alt={alt} loading="lazy" />
  </figure>;
}

export function Reveal({ as: Tag = 'div', children, className = '', ...props }) {
  return <Tag className={`page-reveal ${className}`} data-scroll-reveal {...props}>{children}</Tag>;
}

export function ContactBand({ eyebrow = 'Business and technology inquiries', title = 'Have a system', accent = 'or service to build?' }) {
  return <section className="contact-band container" id="contact" data-scroll-reveal>
    <div className="contact-band-orbit" aria-hidden="true"><span /><span /></div>
    <div className="contact-band-copy">
      <Eyebrow light>{eyebrow}</Eyebrow>
      <h2>{title} <em>{accent}</em></h2>
      <p>Discuss software development, IT consultancy or digital solutions for your organization.</p>
      <RouteLink to="/contact" className="button button-light">Request a consultation <ArrowIcon diagonal /></RouteLink>
    </div>
    <div className="contact-band-mark" aria-hidden="true">✳</div>
  </section>;
}
