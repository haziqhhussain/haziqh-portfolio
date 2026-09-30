import { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  // No backend is configured: submitting opens the visitor's mail app
  // addressed to you. To send directly without mailto, connect a service
  // (Formspree / Getform / your own API) and replace this handler
  // with a fetch() POST.
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="Questions, feedback or collaboration ideas — my inbox is open. I usually reply within a day or two."
        />
        <div className="contact-grid">
          <Reveal className="contact-info">
            <a href={`mailto:${siteConfig.email}`} className="contact-card glass">
              <span className="contact-label">Email</span>
              <strong>{siteConfig.email}</strong>
              <span className="contact-go">Write →</span>
            </a>
            <a href={siteConfig.github} target="_blank" rel="noreferrer" className="contact-card glass">
              <span className="contact-label">GitHub</span>
              <strong>github.com/haziqhhussain</strong>
              <span className="contact-go">Open →</span>
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="contact-card glass">
              <span className="contact-label">LinkedIn</span>
              <strong>linkedin.com/in/haziqhhussain</strong>
              <span className="contact-go">Connect →</span>
            </a>
            <p className="hint">
              This form opens your mail app (no email backend configured yet).
              Prefer direct email?{' '}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
          </Reveal>

          <Reveal delay={100} className="contact-form-wrap glass">
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-row">
                <label>
                  Name
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={update}
                  />
                </label>
                <label>
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@mail.com"
                    value={form.email}
                    onChange={update}
                  />
                </label>
              </div>
              <label>
                Subject
                <input
                  name="subject"
                  placeholder="What is this about?"
                  value={form.subject}
                  onChange={update}
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Hi! I saw your portfolio…"
                  value={form.message}
                  onChange={update}
                />
              </label>
              <button type="submit" className="btn btn-primary btn-full">
                Send Message
              </button>
              {sent && (
                <p className="form-note">
                  Opening your mail app… prefer direct email?{' '}
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
