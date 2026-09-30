import { journey } from '../data/journey';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Learning journey"
          description="A practical timeline — what I've learned and what I built with it. No inflated job titles, just steady progress."
        />
        <div className="timeline">
          {journey.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i * 60, 240)} className="timeline-item">
              <span className="timeline-dot" aria-hidden="true" />
              <div className="timeline-card glass">
                <span className="timeline-period">{item.period}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="badge-row">
                  {item.tags.map((t) => (
                    <span key={t} className="badge badge-small">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
