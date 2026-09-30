import { siteConfig } from '../data/siteConfig';
import Reveal from './Reveal';

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.35.95.1-.74.4-1.25.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.15c0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg" aria-hidden="true">
        <span className="orb orb-a" />
        <span className="orb orb-b" />
        <span className="grid-overlay" />
      </div>

      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <span className="availability">
            <span className="pulse-dot" />
            {siteConfig.availability}
          </span>
          <p className="hero-greet">Hello, I&apos;m</p>
          <h1 className="hero-name">{siteConfig.name}</h1>
          <p className="hero-roles">{siteConfig.roles}</p>
          <p className="hero-intro">{siteConfig.heroIntro}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
              <span aria-hidden="true"> →</span>
            </a>
            <a href={siteConfig.github} target="_blank" rel="noreferrer" className="btn btn-glass">
              <GithubIcon /> GitHub
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="btn btn-glass">
              <LinkedinIcon /> LinkedIn
            </a>
            <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer" download className="btn btn-outline">
              Download Resume
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <strong>3+</strong>
              <span>Featured projects</span>
            </div>
            <div>
              <strong>5</strong>
              <span>Certifications</span>
            </div>
            <div>
              <strong>{siteConfig.location}</strong>
              <span>Based in</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="hero-visual">
          <div className="code-card glass">
            <div className="code-card-bar">
              <span className="dot r" />
              <span className="dot y" />
              <span className="dot g" />
              <span className="code-card-title">developer.js</span>
            </div>
            <pre className="code-block">
              <code>
{`const developer = {
  name: "${siteConfig.name}",
  focus: ["Full-Stack", "Backend", "AI"],
  backend: ["Python", "Flask", "FastAPI", "Node"],
  frontend: ["React", "Vite"],
  databases: ["MySQL", "PostgreSQL", "MongoDB"],
  devops: ["Git", "Docker"],
  learning: "always",
};

export default developer;`}
              </code>
            </pre>
          </div>
          <div className="hero-tags glass">
            <span>React</span>
            <span>Flask</span>
            <span>FastAPI</span>
            <span>PostgreSQL</span>
            <span>Docker</span>
            <span>AI</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
