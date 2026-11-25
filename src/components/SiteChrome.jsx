import { ArrowIcon, BrandMark, RouteLink, SectionLink } from './PageElements.jsx';

const navigation = [
  { to: '/services', label: 'Services' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/projects', label: 'Projects' },
  { to: '/approach', label: 'Our approach' },
  { to: '/team', label: 'Our team' },
  { to: '/about', label: 'About' },
  { to: '/clients', label: 'Who we serve' },
];

export function SiteHeader({ route, menuOpen, onToggleMenu, onNavigate }) {
  return <header className="site-header">
    <div className="header-inner container">
      <BrandMark />
      <button className={`menu-toggle${menuOpen ? ' is-open' : ''}`} type="button" onClick={onToggleMenu} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="site-navigation">
        <span /><span />
      </button>
      <nav className={`site-nav${menuOpen ? ' is-open' : ''}`} id="site-navigation" aria-label="Main navigation">
        {navigation.map(({ to, label }) => <RouteLink key={to} to={to} aria-current={route === to || (to === '/projects' && route.startsWith('/projects/')) ? 'page' : undefined} onClick={onNavigate}>{label}</RouteLink>)}
      </nav>
      <RouteLink to="/contact" className="button button-dark header-cta" onClick={onNavigate} aria-label="Request a consultation"><span className="header-cta-full">Request consultation</span><span className="header-cta-short" aria-hidden="true">Contact</span><ArrowIcon diagonal /></RouteLink>
    </div>
  </header>;
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div className="footer-brand-block">
        <BrandMark light />
        <p>Spario Technologies provides software development, IT consultancy and digital solutions for public and private organizations.</p>
        <a className="footer-email" href="mailto:hello@spario.studio">hello@spario.studio <ArrowIcon diagonal /></a>
      </div>
      <div className="footer-column"><h2>Explore</h2>{navigation.map(({ to, label }) => <RouteLink key={to} to={to}>{label}</RouteLink>)}</div>
      <div className="footer-column"><h2>Company</h2><RouteLink to="/team">Our team</RouteLink><RouteLink to="/clients">Who we serve</RouteLink><RouteLink to="/contact">Business inquiries</RouteLink><a href="mailto:hello@spario.studio">Email Spario</a></div>
      <div className="footer-note"><span>SP / SOFTWARE · IT · DIGITAL SOLUTIONS</span><p>Technology aligned to business requirements.</p></div>
    </div>
    <div className="container footer-bottom"><span>© 2026 Spario Technologies</span><SectionLink to="top" className="back-top">Back to top <span>↑</span></SectionLink></div>
  </footer>;
}
