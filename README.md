# Developer Portfolio — React + Vite

Dark, premium student developer portfolio for **Haziqh Hussain**.
Responsive on desktop / tablet / mobile, with glassmorphism cards and subtle animations.

## Run locally

```bash
cd developer-portfolio
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Where to change your details later

Everything editable lives in ONE file:

**`src/data/portfolioData.js`** — personal details, social links,
skills, education, internship, projects (+ GitHub / Live Demo URLs),
certifications, featured repos and the learning journey.

(The older modules `siteConfig.js`, `skills.js`, `projects.js`,
`journey.js`, `repositories.js`, `certifications.js` in the same folder
just re-export from `portfolioData.js` — edit only `portfolioData.js`.)

Remaining `TODO:` markers show where repo / demo URLs are still empty.

| What | Location |
|------|----------|
| Name, email, GitHub, LinkedIn, hero text | `portfolioData.js` → `personal`, `contact` |
| Project links | `portfolioData.js` → `projects` (`githubUrl` / `liveUrl`) |
| Certificates | `portfolioData.js` → `certifications` |
| Page title / SEO | `index.html` |

## Where the resume is stored

`public/assets/resume/resume.pdf` — drop your resume PDF there with that
exact name. The Hero **Download Resume** button already points to
`/assets/resume/resume.pdf` and will download / open it.
(A `README.txt` in that folder repeats these steps.)

## Where the profile photo goes

`public/assets/profile/profile.jpg` (or `.png` — then update
`profilePhoto` in `portfolioData.js`).
Square, min 400×400px. Until the file exists, the About section shows
your initials instead — nothing breaks.

## Where the certificates are stored

`public/certificates/` with these exact filenames:

- `technical-communication.pdf`
- `fundamentals-oops.pdf`
- `cpp-programming.pdf`
- `generative-ai-for-all.pdf`
- `mongodb-basics.pdf`

Each **View Certificate** button opens its matching PDF.
(A `README.txt` in that folder maps every file.)

## Contact form

No backend is configured: submitting opens the visitor's mail app
addressed to `haziqh110hussain@gmail.com`, and the page says so.
To send directly, connect Formspree / Getform / your own API in
`src/components/Contact.jsx` (`onSubmit` handler).

## Build & deploy

```bash
npm run build
npm run preview
```

- **Vercel:** framework preset `Vite`, build `npm run build`, output `dist`. `vercel.json` included.
- **Netlify:** same settings. `netlify.toml` included (publishes `dist`).

No commits or pushes are made automatically — deploy when you're ready.
