import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <Reveal className={`section-heading align-${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-sub">{description}</p>}
    </Reveal>
  );
}
