import { skillCategories } from '../data/skills';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import {
  SiPython,
  SiOpenjdk,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiVite,
  SiFlask,
  SiFastapi,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiMongodb,
  SiRedis,
  SiGit,
  SiGithub,
  SiDocker,
  SiPrisma,
  SiOnnx,
} from 'react-icons/si';
import { FiDatabase, FiServer, FiMessageSquare, FiMic, FiGlobe, FiZap, FiCpu } from 'react-icons/fi';
import { VscVscode } from 'react-icons/vsc';

const icons = {
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="m8 8-4 4 4 4m8-8 4 4-4 4M14 4l-4 16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  layout: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" strokeLinecap="round" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </svg>
  ),
  tools: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4L14 13l-3-3 3.7-3.7Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  brain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 4a3 3 0 0 0-3 3H7a3 3 0 0 0-3 3 3 3 0 0 0 1 2 3 3 0 0 0-1 2 3 3 0 0 0 3 3h2a3 3 0 0 0 3-3 3 3 0 0 0 3-3 3 3 0 0 0 1-2 3 3 0 0 0-3-3h-2a3 3 0 0 0-3-3Z" strokeLinejoin="round" />
      <path d="M12 4v16" strokeLinecap="round" />
    </svg>
  ),
};

// Recognizable logo per technology. Keys are lowercase skill names.
const techIcons = {
  python: SiPython,
  java: SiOpenjdk,
  javascript: SiJavascript,
  sql: FiDatabase,
  html: SiHtml5,
  css: SiCss,
  react: SiReact,
  vite: SiVite,
  html5: SiHtml5,
  css3: SiCss,
  'python flask': SiFlask,
  fastapi: SiFastapi,
  'node.js': SiNodedotjs,
  'express.js': SiExpress,
  'rest apis': FiServer,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  sqlite: SiSqlite,
  mongodb: SiMongodb,
  redis: SiRedis,
  git: SiGit,
  github: SiGithub,
  docker: SiDocker,
  'docker compose': SiDocker,
  'vs code': VscVscode,
  'mysql workbench': SiMysql,
  prisma: SiPrisma,
  nlp: FiMessageSquare,
  'openai whisper': FiMic,
  'ai4bharat indictrans2': FiGlobe,
  'onnx runtime': SiOnnx,
  'generative ai': FiZap,
  'ai integrations': FiCpu,
};

function TechBadge({ name }) {
  const Icon = techIcons[name.toLowerCase()];
  return (
    <span className="badge skill-badge">
      {Icon && (
        <span className="skill-badge-icon" aria-hidden="true">
          <Icon />
        </span>
      )}
      {name}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="Grouped so it's easy to scan. I'm still learning — this list grows with every project."
        />
        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.id} delay={(i % 3) * 80} className="skill-card glass">
              <div className="skill-card-head">
                <span className="skill-icon">{icons[cat.icon]}</span>
                <div>
                  <h3>{cat.title}</h3>
                  <p>{cat.description}</p>
                </div>
              </div>
              <div className="badge-row">
                {cat.skills.map((s) => (
                  <TechBadge key={s} name={s} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
