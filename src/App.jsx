import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { SiteFooter, SiteHeader } from './components/SiteChrome.jsx';
import { ArrowIcon, BrandVisual } from './components/PageElements.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ApproachPage from './pages/ApproachPage.jsx';
import ClientsPage from './pages/ClientsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import HomePage from './pages/HomePage.jsx';
import ProjectDetailPage from './pages/ProjectDetailPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import SolutionsPage from './pages/SolutionsPage.jsx';
import TeamPage from './pages/TeamPage.jsx';
import { findProjectExample } from './projectsData.js';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

const routePages = {
  '/': {
    component: HomePage,
    title: 'Spario Technologies | Software Development and IT Consultancy',
    description: 'Spario Technologies provides custom software development, web and mobile applications, IT consultancy, business automation, cloud, AI and software support.',
  },
  '/services': {
    component: ServicesPage,
    title: 'Software Development and IT Services | Spario Technologies',
    description: 'Explore custom software, web and mobile development, IT consultancy, business automation, cloud and database solutions, AI integration and software maintenance from Spario Technologies.',
  },
  '/solutions': {
    component: SolutionsPage,
    title: 'Business Software and Digital Solutions | Spario Technologies',
    description: 'Explore business management systems, HR and recruitment platforms, portals, CRM and ERP, cloud and database foundations, and AI-enabled workflows.',
  },
  '/projects': {
    component: ProjectsPage,
    title: 'Illustrative Software Project Scopes | Spario Technologies',
    description: 'Explore illustrative software project scopes for portals, recruitment systems, e-commerce, business operations, cloud infrastructure and AI-enabled workflows.',
  },
  '/approach': {
    component: ApproachPage,
    title: 'Our Approach | Spario Technologies',
    description: 'See how Spario Technologies moves from requirements and solution planning through software development, integration, deployment and support.',
  },
  '/about': {
    component: AboutPage,
    title: 'About Spario Technologies | Software and IT Consultancy',
    description: 'Learn about Spario Technologies, a software development, IT consultancy and digital solutions company serving public and private organizations.',
  },
  '/clients': {
    component: ClientsPage,
    title: 'Who We Serve | Spario Technologies',
    description: 'Spario Technologies provides software and IT services to government institutions, corporate organizations, SMEs and private businesses.',
  },
  '/team': {
    component: TeamPage,
    title: 'Our Team and Technology Expertise | Spario Technologies',
    description: 'Explore the analysis, software engineering, cloud, data, support and knowledge-transfer capabilities that contribute to Spario Technologies projects.',
  },
  '/contact': {
    component: ContactPage,
    title: 'Contact Spario Technologies | Business Inquiries',
    description: 'Contact Spario Technologies about custom software, web and mobile apps, IT consultancy, business automation, cloud, AI or software maintenance.',
  },
};

function routePageFor(route) {
  if (route.startsWith('/projects/')) {
    const slug = route.slice('/projects/'.length);
    const project = findProjectExample(slug);
    return {
      component: ProjectDetailPage,
      props: { slug },
      title: project ? `${project.title} | Illustrative Project Scope | Spario Technologies` : 'Project Example | Spario Technologies',
      description: project ? `${project.summary} This page presents an illustrative solution scope, not a completed client engagement.` : 'Browse illustrative software project scopes from Spario Technologies.',
    };
  }
  return routePages[route] || routePages['/'];
}

function isKnownRoute(route) {
  return Boolean(routePages[route] || /^\/projects\/[^/]+$/.test(route));
}

function routeFromHash() {
  const value = window.location.hash;
  if (!value.startsWith('#/')) return '/';
  const candidate = value.slice(1).split('#')[0].split('?')[0];
  if (candidate === '/testimonials') return '/clients';
  return isKnownRoute(candidate) ? candidate : '/';
}

function RouteMotion({ children, route, transitioning, curtainRef, onTransitionComplete }) {
  const scopeRef = useRef(null);

  useGSAP(() => {
    const scope = scopeRef.current;
    const page = scope?.querySelector('.route-page');
    if (!scope || !page) return undefined;

    const media = gsap.matchMedia();
    media.add({
      reduceMotion: '(prefers-reduced-motion: reduce)',
      compact: '(max-width: 760px)',
      desktop: '(min-width: 761px)',
    }, ({ conditions }) => {
      const titleWords = page.querySelectorAll('[data-title-word]');
      const heroIntro = page.querySelectorAll('.page-hero .eyebrow, .page-hero [data-page-intro]');
      const heroImage = page.querySelector('.page-hero-image');
      const curtain = curtainRef.current;

      if (conditions.reduceMotion) {
        gsap.set(page, { clearProps: 'all' });
        gsap.set(titleWords, { clearProps: 'all' });
        gsap.set(heroIntro, { clearProps: 'all' });
        gsap.set(heroImage, { clearProps: 'all' });
        if (transitioning && curtain) gsap.set(curtain, { yPercent: 100 });
        onTransitionComplete();
        requestAnimationFrame(() => ScrollTrigger.refresh());
        return undefined;
      }

      if (transitioning && curtain) gsap.set(curtain, { yPercent: 0 });

      const entrance = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => {
          onTransitionComplete();
          requestAnimationFrame(() => ScrollTrigger.refresh());
        },
      });

      entrance
        .fromTo(page, { autoAlpha: 0, y: 17 }, { autoAlpha: 1, y: 0, duration: 0.42, clearProps: 'opacity,visibility,transform' })
        .fromTo(page.querySelector('.page-hero .eyebrow'), { autoAlpha: 0, y: 11 }, { autoAlpha: 1, y: 0, duration: 0.37, clearProps: 'opacity,visibility,transform' }, '-=0.14')
        .fromTo(titleWords, { autoAlpha: 0, yPercent: 115, rotate: 1.5 }, { autoAlpha: 1, yPercent: 0, rotate: 0, duration: 0.68, stagger: 0.045, ease: 'power4.out', clearProps: 'opacity,visibility,transform' }, '-=0.12')
        .fromTo(heroIntro, { autoAlpha: 0, y: 15 }, { autoAlpha: 1, y: 0, duration: 0.46, stagger: 0.08, clearProps: 'opacity,visibility,transform' }, '-=0.38');

      if (heroImage) {
        entrance.fromTo(heroImage, { autoAlpha: 0, y: 22, scale: 0.985, clipPath: 'inset(4% 0 4% 0)' }, {
          autoAlpha: 1, y: 0, scale: 1, clipPath: 'inset(0% 0 0% 0)', duration: 0.82,
          ease: 'power3.out', clearProps: 'opacity,visibility,transform,clipPath',
        }, '-=0.65');
        const heroImageElement = heroImage.querySelector('img');
        if (heroImageElement && conditions.desktop) {
          gsap.to(heroImageElement, {
            yPercent: -3,
            ease: 'none',
            scrollTrigger: { trigger: heroImage, start: 'top top', end: 'bottom top', scrub: 0.6 },
          });
        }
      }

      if (transitioning && curtain) {
        entrance.to(curtain, { yPercent: -101, duration: 0.46, ease: 'power4.inOut' }, 0.52)
          .set(curtain, { yPercent: 100 });
      }

      gsap.utils.toArray('[data-scroll-reveal]', page).forEach((element) => {
        gsap.fromTo(element, { autoAlpha: 0, y: conditions.compact ? 20 : 30 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          clearProps: 'opacity,visibility,transform',
          scrollTrigger: { trigger: element, start: 'top 86%', once: true },
        });
      });

      gsap.utils.toArray('[data-stagger-group]', page).forEach((group) => {
        const items = group.querySelectorAll('[data-stagger-item]');
        if (!items.length) return;
        gsap.fromTo(items, { autoAlpha: 0, y: conditions.compact ? 18 : 28, scale: 0.99 }, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.66,
          stagger: conditions.compact ? 0.07 : 0.1,
          ease: 'power3.out',
          clearProps: 'opacity,visibility,transform',
          scrollTrigger: { trigger: group, start: 'top 84%', once: true },
        });
      });

      gsap.utils.toArray('[data-image-reveal]:not(.page-hero-image)', page).forEach((frame) => {
        const image = frame.querySelector('img');
        if (!image) return;
        gsap.fromTo(image, { scale: 1.1, yPercent: 2 }, {
          scale: 1,
          yPercent: 0,
          duration: 0.9,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: { trigger: frame, start: 'top 86%', once: true },
        });
      });

      const progress = page.querySelector('[data-process-progress]');
      if (progress) {
        gsap.fromTo(progress, { scaleX: 0 }, {
          scaleX: 1,
          transformOrigin: 'left center',
          ease: 'none',
          scrollTrigger: { trigger: progress.closest('.approach-progress'), start: 'top 82%', end: 'bottom 54%', scrub: 0.55 },
        });
      }

      const decorativeOrbit = page.querySelector('.contact-band-orbit');
      if (decorativeOrbit && conditions.desktop) {
        gsap.to(decorativeOrbit, { rotation: 8, duration: 9, repeat: -1, yoyo: true, ease: 'sine.inOut', transformOrigin: '50% 50%' });
      }

      document.fonts?.ready.then(() => ScrollTrigger.refresh());
    }, scope);

    return () => media.revert();
  }, { scope: scopeRef });

  return <div className="route-motion" ref={scopeRef} data-route={route}>{children}</div>;
}

function App() {
  const appRef = useRef(null);
  const curtainRef = useRef(null);
  const routeRef = useRef(routeFromHash());
  const transitioningRef = useRef(false);
  const [route, setRoute] = useState(routeFromHash);
  const [transitioning, setTransitioning] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { contextSafe } = useGSAP({ scope: appRef });

  useEffect(() => {
    routeRef.current = route;
    const page = routePageFor(route);
    document.title = page.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description);
    window.scrollTo(0, 0);
  }, [route]);

  useEffect(() => {
    const handleHashChange = () => {
      const nextRoute = routeFromHash();
      if (nextRoute === routeRef.current) return;
      routeRef.current = nextRoute;
      setRoute(nextRoute);
      setMenuOpen(false);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigation = contextSafe((event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target instanceof Element ? event.target.closest('a[href^="#"]') : null;
    if (!link || !appRef.current?.contains(link)) return;

    if (link.matches('[data-section-scroll]')) {
      const id = link.getAttribute('href')?.slice(1);
      const destination = id ? document.getElementById(id) : null;
      if (!destination) return;
      event.preventDefault();
      setMenuOpen(false);
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      gsap.to(window, {
        duration: reducedMotion ? 0 : 0.78,
        ease: 'power2.inOut',
        overwrite: 'auto',
        scrollTo: { y: destination, offsetY: 98, autoKill: true },
      });
      return;
    }

    if (!link.matches('[data-route-link]')) return;
    const nextRoute = link.getAttribute('href')?.slice(1);
    if (!nextRoute || !isKnownRoute(nextRoute)) return;
    event.preventDefault();
    setMenuOpen(false);
    if (transitioningRef.current) return;
    if (nextRoute === routeRef.current) {
      if (nextRoute === '/') gsap.to(window, { duration: 0.68, ease: 'power2.inOut', scrollTo: { y: 0, autoKill: true } });
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.location.hash = `#${nextRoute}`;
      return;
    }

    transitioningRef.current = true;
    setTransitioning(true);
    const currentPage = appRef.current.querySelector('.route-page');
    const curtain = curtainRef.current;
    gsap.timeline({
      defaults: { overwrite: 'auto' },
      onComplete: () => { window.location.hash = `#${nextRoute}`; },
    })
      .to(currentPage, { autoAlpha: 0, y: -12, duration: 0.18, ease: 'power2.in' })
      .to(curtain, { yPercent: 0, duration: 0.32, ease: 'power4.inOut' }, '-=0.02');
  });

  const handleInteractionIn = contextSafe((event) => {
    const target = event.target instanceof Element
      ? event.target.closest('.button, [data-hover-card], .footer-column a, .footer-email, .back-top')
      : null;
    if (!target || !appRef.current?.contains(target) || (event.relatedTarget instanceof Node && target.contains(event.relatedTarget))) return;
    if (event.type.startsWith('pointer') && !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const card = target.hasAttribute('data-hover-card');
    gsap.to(target, { y: card ? -5 : -2, duration: 0.24, ease: 'power3.out', overwrite: 'auto' });
    const image = target.querySelector('.image-frame img');
    if (image && card) gsap.to(image, { scale: 1.045, duration: 0.38, ease: 'power2.out', overwrite: 'auto' });
    const detail = target.querySelector('.motion-arrow, .button svg, .footer-email svg, .back-top span');
    if (detail) gsap.to(detail, { x: 4, duration: 0.22, ease: 'power2.out', overwrite: 'auto' });
  });

  const handleInteractionOut = contextSafe((event) => {
    const target = event.target instanceof Element
      ? event.target.closest('.button, [data-hover-card], .footer-column a, .footer-email, .back-top')
      : null;
    if (!target || !appRef.current?.contains(target) || (event.relatedTarget instanceof Node && target.contains(event.relatedTarget))) return;
    if (event.type.startsWith('pointer') && !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const image = target.querySelector('.image-frame img');
    const detail = target.querySelector('.motion-arrow, .button svg, .footer-email svg, .back-top span');
    const duration = reducedMotion ? 0 : 0.25;
    gsap.to(target, { y: 0, duration, ease: 'power2.out', overwrite: 'auto' });
    if (image) gsap.to(image, { scale: 1, duration, ease: 'power2.out', overwrite: 'auto' });
    if (detail) gsap.to(detail, { x: 0, duration, ease: 'power2.out', overwrite: 'auto' });
  });

  useEffect(() => {
    const root = appRef.current;
    if (!root) return undefined;
    root.addEventListener('click', handleNavigation);
    root.addEventListener('pointerover', handleInteractionIn);
    root.addEventListener('pointerout', handleInteractionOut);
    root.addEventListener('focusin', handleInteractionIn);
    root.addEventListener('focusout', handleInteractionOut);
    return () => {
      root.removeEventListener('click', handleNavigation);
      root.removeEventListener('pointerover', handleInteractionIn);
      root.removeEventListener('pointerout', handleInteractionOut);
      root.removeEventListener('focusin', handleInteractionIn);
      root.removeEventListener('focusout', handleInteractionOut);
    };
  }, [handleNavigation, handleInteractionIn, handleInteractionOut]);

  useGSAP(() => {
    if (!menuOpen || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const menu = appRef.current?.querySelector('.site-nav.is-open');
    if (!menu) return undefined;
    return gsap.fromTo(menu, { autoAlpha: 0, y: -9 }, {
      autoAlpha: 1,
      y: 0,
      duration: 0.24,
      ease: 'power2.out',
      clearProps: 'opacity,visibility,transform',
    });
  }, { scope: appRef, dependencies: [menuOpen], revertOnUpdate: true });

  const pageConfig = routePageFor(route);
  const Page = pageConfig.component;

  const finishTransition = () => {
    transitioningRef.current = false;
    setTransitioning(false);
  };

  return <div className="app-shell" ref={appRef}>
    <div id="top" />
    <SiteHeader route={route} menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((open) => !open)} onNavigate={() => setMenuOpen(false)} />
    <main id="main-content">
      <RouteMotion key={route} route={route} transitioning={transitioning} curtainRef={curtainRef} onTransitionComplete={finishTransition}>
        <Page {...pageConfig.props} />
      </RouteMotion>
    </main>
    <SiteFooter />
    <div className="page-transition-curtain" ref={curtainRef} aria-hidden="true">
      <span className="curtain-index">SP / SOFTWARE · IT · DIGITAL SOLUTIONS</span>
      <BrandVisual className="curtain-wordmark" />
      <span className="curtain-caption">Software · IT · digital solutions <ArrowIcon diagonal /></span>
      <span className="curtain-orbit curtain-orbit-one" /><span className="curtain-orbit curtain-orbit-two" />
    </div>
  </div>;
}

export default App;
