import { certifications } from '../data/certifications';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Certifications() {
  const hasCerts = certifications.length > 0;

  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow="Certifications"
          title="Courses & certificates"
          description="Verified coursework and credentials. “View Certificate” opens the original PDF."
        />

        {!hasCerts ? (
          <Reveal className="cert-empty glass">
            <div className="cert-empty-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="9" r="5" />
                <path d="m8.5 13-2 8 5.5-3 5.5 3-2-8" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Certificates coming soon</h3>
            <p className="muted">
              Add entries in <code>src/data/portfolioData.js</code> and place
              the PDFs in <code>public/certificates/</code>.
            </p>
          </Reveal>
        ) : (
          <>
            <div className="cert-grid">
              {certifications.map((c, i) => (
                <Reveal key={c.id} delay={(i % 3) * 80} className="cert-card glass">
                  <h3>{c.title}</h3>
                  <p className="muted">{c.organization}</p>
                  <p className="cert-period">{c.period}</p>
                  <div className="badge-row">
                    {c.score && <span className="badge badge-small">{c.score}</span>}
                    {c.type && <span className="badge badge-small">{c.type}</span>}
                  </div>
                  {c.file && (
                    <a
                      href={c.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-small btn-glass cert-btn"
                    >
                      View Certificate
                    </a>
                  )}
                </Reveal>
              ))}
            </div>
            <p className="hint center">
              Certificate PDFs live in <code>public/certificates/</code> — edit
              details in <code>src/data/portfolioData.js</code>
            </p>
          </>
        )}
      </div>
    </section>
  );
}
