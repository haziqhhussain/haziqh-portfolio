// Re-exported from the central edit point: src/data/portfolioData.js
// Edit your details there — not here.
import { personal, contact, resumeUrl } from './portfolioData';

export const siteConfig = {
  name: personal.fullName,
  initials: personal.initials,
  roles: personal.title,
  availability: personal.availability,
  location: personal.location,
  heroIntro: personal.heroIntro,
  email: contact.email,
  github: contact.github,
  linkedin: contact.linkedin,
  resumeUrl,
  footerNote: personal.footerNote,
};
