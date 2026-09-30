import { siteConfig } from '../data/siteConfig';
import { featuredRepos } from '../data/repositories';
import { personal } from '../data/portfolioData';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function GithubSection() {
  const hasRepos = featuredRepos.length > 0;

  return (
    <section id="github" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="GitHub"
          title="Code & repositories"
          description="All my code lives on GitHub. No mirrored numbers here — just the real profile."
        />
        <div className="github-grid">
          <Reveal className="github-profile glass">
            <div className="github-avatar" aria-hidden="true">
              {siteConfig.initials}
            </div>
            <h3>{personal.displayName}</h3>
            <p className="muted">Student developer · Full-Stack · Backend · AI</p>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              View GitHub Profile
            </a>
          </Reveal>

          <div className="repo-list">
            {hasRepos ? (
              featuredRepos.map((r, i) => (
                <Reveal key={r.name} delay={i * 80} className="repo-card glass">
                  <div className="repo-top">
                    <span className="repo-book" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M4 4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Z" />
                        <path d="M14 2v6h6" />
                      </svg>
                    </span>
                    <a href={r.url} target="_blank" rel="noreferrer" className="repo-name">
                      {r.name}
                    </a>
                  </div>
                  <p>{r.description}</p>
                  <div className="repo-meta">
                    <span className="lang-dot" aria-hidden="true" />
                    <span>{r.language}</span>
                    <a href={r.url} target="_blank" rel="noreferrer" className="repo-link">
                      Open →
                    </a>
                  </div>
                </Reveal>
              ))
            ) : (
              <Reveal className="repo-card glass">
                <div className="repo-top">
                  <span className="repo-book" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Z" />
                      <path d="M14 2v6h6" />
                    </svg>
                  </span>
                  <span className="repo-name">Repositories live on GitHub</span>
                </div>
                <p>
                  Highlights will appear here once repo links are added. Until
                  then, browse everything directly on the profile — including
                  TeamFlow, the Vernacular Education platform and the Flask
                  Authentication System as they are published.
                </p>
                <div className="repo-meta">
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noreferrer"
                    className="repo-link"
                  >
                    Browse all repositories →
                  </a>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
