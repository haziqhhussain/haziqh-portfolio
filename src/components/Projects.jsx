import { projects } from '../data/projects';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

function ProjectLinks({ p }) {
  const hasGithub = Boolean(p.githubUrl);
  const hasLive = Boolean(p.liveUrl);
  return (
    <>
      <div className="project-actions">
        {hasGithub ? (
          <a
            href={p.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-small btn-glass"
          >
            GitHub
          </a>
        ) : (
          <span
            className="btn btn-small btn-glass btn-disabled"
            title="Add your repo URL in src/data/portfolioData.js"
          >
            GitHub · soon
          </span>
        )}
        {hasLive ? (
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-small btn-primary"
          >
            Live Demo
          </a>
        ) : null}
      </div>
      {!hasGithub && !hasLive && (
        <p className="project-note">
          Links coming soon — add URLs in <code>portfolioData.js</code>.
        </p>
      )}
    </>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Three featured builds. Add your GitHub and Live Demo URLs anytime in src/data/portfolioData.js."
        />
        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 90} className="project-card glass">
              <span className="project-tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <ul className="project-features">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="badge-row">
                {p.tech.map((t) => (
                  <span key={t} className="badge badge-small">
                    {t}
                  </span>
                ))}
              </div>
              <ProjectLinks p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
