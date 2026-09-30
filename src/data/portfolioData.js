// ============================================================
// PORTFOLIO DATA — YOUR SINGLE EDIT POINT
// ------------------------------------------------------------
// Everything editable lives here: personal details, social links,
// skills, education, internship, projects, certifications and the
// learning journey. Components read from this file (older data
// modules in this folder simply re-export from here), so you never
// need to hunt through JSX to update information.
// ============================================================

export const personal = {
  fullName: 'HAZIQH HUSSAIN',
  displayName: 'Haziqh Hussain',
  initials: 'HH',
  // Shown under your name in the Hero
  title: 'Full Stack Developer • Backend Developer • AI Enthusiast',
  careerGoal: 'Full Stack Developer',
  availability: 'Open to internships & collaborations',
  location: 'Chennai, India',
  heroIntro:
    "I'm a Computer Science Engineering student passionate about building full-stack applications, backend systems and AI-powered solutions. I enjoy learning new technologies by turning ideas into practical projects.",
  about: [
    'I am Haziqh Hussain, a second-year Computer Science Engineering student at Dhaanish Chennai Engineering College. I am interested in Full Stack Development, Backend Development, Artificial Intelligence and DevOps.',
    'I enjoy learning technologies by building practical applications and solving real development problems. I have worked with Python, JavaScript, Flask, FastAPI, React, Node.js, Express.js, MySQL, PostgreSQL, SQLite, Redis, Git, GitHub and Docker.',
    'My current goal is to strengthen my full-stack development skills and build reliable, useful and production-ready applications.',
  ],
  footerNote: 'Built with React',
};

export const contact = {
  name: 'Haziqh Hussain',
  email: 'haziqh110hussain@gmail.com',
  github: 'https://github.com/haziqhhussain',
  linkedin: 'https://www.linkedin.com/in/haziqhhussain',
};

// Resume button points here. Place your file at:
//   public/assets/resume/resume.pdf
export const resumeUrl = '/assets/resume/resume.pdf';

// Profile photo. Place your image at:
//   public/assets/profile/profile.jpg  (jpg or png)
// The site shows your initials automatically until the file exists.
export const profilePhoto = '/assets/profile/profile.jpg';

export const education = {
  degree: 'B.E. Computer Science and Engineering',
  college: 'Dhaanish Chennai Engineering College, Chennai',
  period: '2025 – 2029',
  currentYear: '2nd Year',
  cgpa: '9/10',
};

export const internship = {
  title: 'Python Full Stack using Flask',
  company: 'Approtech Pvt. Ltd.',
  description:
    'Gained practical exposure to Python full-stack development using Flask and web technologies.',
};

export const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    icon: 'code',
    description: 'Core programming languages I use.',
    skills: ['Python', 'Java', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'layout',
    description: 'Interfaces, tooling and styling.',
    skills: ['React', 'Vite', 'HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'server',
    description: 'APIs, auth and business logic.',
    skills: ['Python Flask', 'FastAPI', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'database',
    description: 'Relational stores, documents and caching.',
    skills: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB', 'Redis'],
  },
  {
    id: 'devops',
    title: 'Tools & DevOps',
    icon: 'tools',
    description: 'Version control, containers and workflow.',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'Docker Compose',
      'VS Code',
      'MySQL Workbench',
      'Prisma',
    ],
  },
  {
    id: 'ai',
    title: 'AI / ML Technologies',
    icon: 'brain',
    description: 'Applied AI and language technology.',
    skills: [
      'NLP',
      'OpenAI Whisper',
      'AI4Bharat IndicTrans2',
      'ONNX Runtime',
      'Generative AI',
      'AI integrations',
    ],
  },
];

// ============================================================
// PROJECTS — paste your GitHub / Live Demo URLs when ready.
// Leave githubUrl / liveUrl as "" (empty) to show a
// "link coming soon" placeholder instead of a fake link.
// ============================================================
export const projects = [
  {
    id: 'teamflow',
    title: 'TeamFlow – Project & Task Management System',
    tag: 'Full-Stack Web App',
    description:
      'TeamFlow is a collaborative project and task management platform designed to help teams organize projects, assign tasks and manage collaboration.',
    features: [
      'Project creation',
      'Admin and member permissions',
      'Project start date and end date',
      'Task management',
      'Task assignment',
      'Comments',
      'Filtering',
      'Searching',
      'Pagination',
      'Authorization',
      'Form and backend validation',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'Prisma', 'PostgreSQL', 'Docker', 'Zod'],
    githubUrl: '', // TODO: paste your repo URL
    liveUrl: '', // TODO: paste your demo URL
  },
  {
    id: 'vernacular-edu',
    title: 'AI-Powered Vernacular Education Platform',
    tag: 'My Project · AI',
    description:
      'An AI-based education platform designed to reduce the communication gap between teachers and students who speak local and tribal languages such as Ho, Mundari and Santhali.',
    features: [
      'AI-assisted translation',
      'Speech-to-Text',
      'Text-to-Speech',
      'Multilingual learning support',
      'Curriculum assistance',
      'Teacher support',
      'Offline / on-device AI processing',
      'Support for low-resource languages',
    ],
    tech: [
      'AI4Bharat IndicTrans2',
      'AI4Bharat Speech Technologies',
      'OpenAI Whisper',
      'ONNX Runtime',
      'NLP',
      'SQLite',
    ],
    githubUrl: '', // TODO: paste your repo URL
    liveUrl: '', // TODO: paste your demo URL
  },
  {
    id: 'flask-auth',
    title: 'Flask Authentication System',
    tag: 'Backend · Security',
    description:
      'A secure authentication system built using Python Flask and MySQL with complete user registration and account authentication functionality.',
    features: [
      'User signup',
      'Login',
      'Logout',
      'Session management',
      'Password hashing',
      'Password verification',
      'Password strength indicator',
      'Forgot password',
      'Reset password',
      'Form validation',
      'Custom flash notifications',
      'User dashboard',
      'Responsive authentication interface',
    ],
    tech: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Werkzeug'],
    githubUrl: '', // TODO: paste your repo URL
    liveUrl: '', // TODO: paste your demo URL
  },
];

// ============================================================
// CERTIFICATIONS — "file" points to the PDF in public/certificates/.
// Place your original PDFs there with the exact names below.
// ============================================================
export const certifications = [
  {
    id: 'nptel-technical-communication',
    title: 'Technical Communication for Engineers',
    organization: 'NPTEL / IIT Roorkee',
    period: 'Jul–Aug 2025',
    score: '82%',
    type: 'Elite NPTEL Certification',
    file: '/certificates/technical-communication.pdf',
  },
  {
    id: 'nptel-oops',
    title: 'Fundamentals of Object Oriented Programming',
    organization: 'NPTEL / IIT Roorkee',
    period: 'Jan–Apr 2026',
    score: '77%',
    type: 'Elite NPTEL Certification',
    file: '/certificates/fundamentals-oops.pdf',
  },
  {
    id: 'saylor-cpp',
    title: 'C++ Programming (CS107)',
    organization: 'Saylor University',
    period: 'June 30, 2026',
    score: 'Grade 87.50%',
    type: '40 Hours',
    file: '/certificates/cpp-programming.pdf',
  },
  {
    id: 'infosys-genai',
    title: 'Generative AI for All',
    organization: 'Infosys Springboard',
    period: 'August 18, 2025',
    score: '',
    type: 'Course Completion',
    file: '/certificates/generative-ai-for-all.pdf',
  },
  {
    id: 'mongodb-basics',
    title: 'MongoDB Basics for Students',
    organization: 'MongoDB',
    period: 'August 13, 2025',
    score: '',
    type: 'Course Completion',
    file: '/certificates/mongodb-basics.pdf',
  },
];

// Featured GitHub repos. Empty on purpose: repo URLs are unknown,
// and no fake stats are shown. Add entries here when ready —
// { name, description, language, url }.
export const featuredRepos = [];

// Learning journey — phase-based, no invented dates.
export const journey = [
  {
    period: 'Foundations',
    title: 'Python, Java & Programming Basics',
    description:
      'Started with Python and Java — syntax, OOP and problem solving through small scripts and coursework.',
    tags: ['Python', 'Java', 'OOP'],
  },
  {
    period: 'Web Basics',
    title: 'HTML, CSS & JavaScript',
    description:
      'Learned how the web renders: semantic HTML, responsive CSS and interactive JavaScript.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    period: 'Backend I',
    title: 'Flask, REST APIs & MySQL',
    description:
      'Built server-rendered apps and REST APIs with Flask — routing, sessions and auth — backed by MySQL. Applied this in the Flask Authentication System and a Flask internship.',
    tags: ['Flask', 'REST APIs', 'MySQL'],
  },
  {
    period: 'Backend II',
    title: 'FastAPI & More Databases',
    description:
      'Explored FastAPI for typed, async APIs and compared PostgreSQL, SQLite, MongoDB and Redis for different storage needs.',
    tags: ['FastAPI', 'PostgreSQL', 'SQLite', 'MongoDB', 'Redis'],
  },
  {
    period: 'Frontend',
    title: 'React + Vite',
    description:
      'Picked up modern React — components, hooks and data fetching with Vite — focused on clean, responsive UIs.',
    tags: ['React', 'Vite', 'JavaScript'],
  },
  {
    period: 'Full-Stack',
    title: 'Node.js, Express & TeamFlow',
    description:
      'Combined frontend and backend: Express APIs with Zod validation, Prisma ORM, authorization, pagination and filtering in TeamFlow.',
    tags: ['Node.js', 'Express.js', 'Prisma', 'Zod'],
  },
  {
    period: 'DevOps',
    title: 'Git, GitHub & Docker',
    description:
      'Adopted Git branching and GitHub workflows, Docker images and Compose for reproducible setups, with VS Code and MySQL Workbench as daily tools.',
    tags: ['Git', 'GitHub', 'Docker', 'Docker Compose'],
  },
  {
    period: 'AI',
    title: 'NLP, Speech & On-Device AI',
    description:
      'Exploring NLP, Whisper speech-to-text, IndicTrans2 translation and ONNX Runtime for offline inference in the Vernacular Education project.',
    tags: ['NLP', 'OpenAI Whisper', 'IndicTrans2', 'ONNX Runtime', 'Generative AI'],
  },
];
