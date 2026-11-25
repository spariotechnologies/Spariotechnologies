import { useState } from 'react';
import { ArrowIcon, Eyebrow, PageHeading } from '../components/PageElements.jsx';

const projectTypes = [
  'Custom software development',
  'Web development',
  'Mobile application development',
  'IT consultancy',
  'Business automation',
  'Cloud and database solutions',
  'Artificial intelligence',
  'Software maintenance and support',
  'Other technology requirement',
];
const organizationTypes = ['Government institution', 'Corporate organization', 'Small or medium-sized business', 'Private business', 'Other'];

export default function ContactPage() {
  const [status, setStatus] = useState('');

  const prepareEmail = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get('name');
    const subject = `Project inquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${form.get('email')}`,
      `Organization type: ${form.get('organizationType')}`,
      `Organization: ${form.get('company') || 'Not provided'}`,
      `Project type: ${form.get('projectType')}`,
      '',
      'Project details:',
      form.get('details'),
    ].join('\n');

    window.location.href = `mailto:hello@spario.studio?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('Your email app should open with the project details. If it does not, email hello@spario.studio.');
  };

  return <article className="route-page contact-page">
    <section className="page-hero contact-page-hero container">
      <div className="contact-page-copy page-hero-copy">
        <Eyebrow>Start a conversation · No pressure, just a good first chat</Eyebrow>
        <PageHeading before="Tell us what" accent="comes next." />
        <p className="page-lead" data-page-intro>Tell us what your organization needs from software, IT consultancy or digital technology. A short outline is enough to start a business inquiry.</p>
        <div className="contact-quick-details" data-page-intro>
          <span className="contact-detail-label">Prefer email?</span>
          <a href="mailto:hello@spario.studio">hello@spario.studio <ArrowIcon diagonal /></a>
          <span className="contact-detail-location">Spario Technologies · Software and IT services</span>
        </div>
      </div>

      <form className="contact-form" onSubmit={prepareEmail} data-page-intro>
        <div className="contact-form-heading"><span>SP / 01</span><h2>Tell us a little more.</h2><p>We will use this to bring the right people into the conversation.</p></div>
        <div className="contact-fields-two">
          <label>Your name<input name="name" type="text" autoComplete="name" placeholder="Name" required /></label>
          <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></label>
        </div>
        <div className="contact-fields-two">
          <label>Company <span>(optional)</span><input name="company" type="text" autoComplete="organization" placeholder="Your team or company" /></label>
          <label>Organization type<select name="organizationType" defaultValue={organizationTypes[0]}>{organizationTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
        </div>
        <label>Service area<select name="projectType" defaultValue={projectTypes[0]}>{projectTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
        <label className="contact-details-field">A little about the project<textarea name="details" rows="4" placeholder="What are you working on, and what would a good outcome look like?" required /></label>
        <button className="button button-dark contact-submit" type="submit">Prepare an email <ArrowIcon diagonal /></button>
        <p className="contact-form-status" aria-live="polite">{status || 'This form opens an email draft on your device; it does not send anything automatically.'}</p>
      </form>
    </section>

    <section className="contact-start-section">
      <div className="container contact-start-content" data-scroll-reveal>
        <div><Eyebrow>A useful place to begin</Eyebrow><h2>Bring the question.<br /><em>We will find the next step.</em></h2></div>
        <p>You do not need a finished brief. A challenge, a rough idea, or a goal for what comes next is plenty to start a thoughtful conversation.</p>
      </div>
    </section>
  </article>;
}
