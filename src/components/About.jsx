import { useEffect, useState } from 'react';
import { personal, profilePhoto, education } from '../data/portfolioData';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const focusCards = [
  {
    title: 'Full-Stack Applications',
    text: 'React frontends connected to Node / Python backends — auth, CRUD, validation and clean UX.',
  },
  {
    title: 'Backend, APIs & Databases',
    text: 'Flask, FastAPI and Express APIs with MySQL, PostgreSQL, SQLite, MongoDB and Redis.',
  },
  {
    title: 'AI Explorations',
    text: 'NLP, speech-to-text / text-to-speech and translation experiments, including on-device inference.',
  },
];

function ProfilePhoto() {
  // Show "HH" initials until /assets/profile/profile.jpg is proven to load.
  // - No <img> is rendered until preload succeeds, so no broken-image icon
  //   ever appears when the file is missing.
  // - When the user later adds public/assets/profile/profile.jpg, the
  //   preload succeeds on next load and the photo appears with no code change.
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    const img = new Image();
    img.onload = () => {
      if (active) setLoaded(true);
    };
    img.onerror = () => {
      if (active) setLoaded(false);
    };
    img.src = profilePhoto;
    return () => {
      active = false;
    };
  }, []);

  if (!loaded) {
    return (
      <span className="profile-photo profile-photo-fallback" aria-label="Profile photo placeholder">
        {personal.initials}
      </span>
    );
  }
  return (
    <span className="profile-photo">
      <img
        src={profilePhoto}
        alt={`Profile photo of ${personal.displayName}`}
        onError={() => setLoaded(false)}
      />
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="About me"
          title="Student developer turning ideas into practical projects"
          description="I'm continuously learning software development and enjoy converting ideas into working software — small experiments, coursework and full-stack builds."
        />
        <div className="about-grid">
          <Reveal className="about-text glass">
            <div className="profile-block">
              <ProfilePhoto />
              <div>
                <strong>{personal.displayName}</strong>
                <p className="muted">
                  {education.degree} · {education.currentYear}
                  <br />
                  {education.college}
                </p>
              </div>
            </div>
            {personal.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <ul className="about-list">
              <li>
                <span>▸</span> Building full-stack apps with React + Node / Flask
              </li>
              <li>
                <span>▸</span> Designing APIs, auth flows and database schemas
              </li>
              <li>
                <span>▸</span> Experimenting with AI-assisted and multilingual tools
              </li>
              <li>
                <span>▸</span> Learning Docker, GitHub workflows and clean code habits
              </li>
            </ul>
          </Reveal>

          <div className="about-cards">
            {focusCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 90} className="about-card glass">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
