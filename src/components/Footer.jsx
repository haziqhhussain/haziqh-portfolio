import { siteConfig } from '../data/siteConfig';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark">{siteConfig.initials}</span>
          <div>
            <strong>{siteConfig.name}</strong>
            <p className="muted">{siteConfig.roles}</p>
          </div>
        </div>
        <div className="footer-links">
          <a href={siteConfig.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${siteConfig.email}`}>Email</a>
          <a href="#home">Back to top ↑</a>
        </div>
        <p className="footer-note">
          © {year} {siteConfig.name} · {siteConfig.footerNote}
        </p>
      </div>
    </footer>
  );
}
