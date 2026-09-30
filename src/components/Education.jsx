import { education, internship } from '../data/portfolioData';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Education"
          title="Study & practical training"
          description="My academic background and hands-on internship exposure."
        />
        <div className="education-grid">
          <Reveal className="education-card glass">
            <span className="project-tag">Education</span>
            <h3>{education.degree}</h3>
            <p className="education-college">{education.college}</p>
            <div className="education-meta">
              <div>
                <span>Period</span>
                <strong>{education.period}</strong>
              </div>
              <div>
                <span>Current year</span>
                <strong>{education.currentYear}</strong>
              </div>
              <div>
                <span>CGPA</span>
                <strong>{education.cgpa}</strong>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="education-card glass">
            <span className="project-tag">Internship</span>
            <h3>{internship.title}</h3>
            <p className="education-college">{internship.company}</p>
            <p className="muted">{internship.description}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
