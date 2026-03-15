# Minimalist Portfolio Walkthrough

Your professional, stark black-and-white minimalist portfolio has been successfully built! The design leans heavily on modern typography, negative space, and subtle micro-interactions to create a premium feel.

## What Was Built

### Core Architecture
- **Framework**: React 19 + Vite 6
- **Styling**: Tailwind CSS v4 (configured for maximum stark contrast and minimalist properties).
- **Animations**: Framer Motion integration for smooth, professional section entries.

### Designed Components & Sections
1. **Layout & Navigation**: 
   - A sticky, glassmorphic header with smooth scroll links.
   - A built-in dark/light mode toggle.
2. **Hero Section**:
   - Bold typography and staggered entrance animations.
   - Clean "Software Engineer & Designer" minimal tagline.
3. **About & Skills**:
   - Split layout prioritizing readability.
   - Clean, rounded pill tags for technologies.
4. **Projects Grid**:
   - Subtle hover effects (borders and background highlights) that avoid visual clutter.
   - Clean typography for the tech stack details.
5. **Contact**:
   - Fully styled, minimalist form inputs.

## Local Verification
I have run `npm run build` and verified that the production build completes with `0` errors, creating an optimized local bundle.

To test this locally in your browser, start your development server:
```bash
npm run dev
```
Then navigate to `http://localhost:5173`.

## Deployment Guide (GitHub Pages & Vercel)

Since your project is a standard Vite React application, deployment is straightforward.

### Option 1: Vercel (Recommended for minimal config)
1. Push your repository to GitHub.
2. Log in to [Vercel](https://vercel.com/) and click **Add New > Project**.
3. Import your GitHub repository. Vercel will automatically detect Vite and configure the build settings.
4. Click **Deploy**.

### Option 2: GitHub Pages
1. In [vite.config.js](file:///c:/Users/shikh/projects/portfolio/vite.config.js), add your repository name as the base:
   ```javascript
   export default defineConfig({
     base: '/repository-name/', // e.g. /portfolio/
     plugins: [tailwindcss(), react()],
   })
   ```
2. Install the `gh-pages` package: `npm install gh-pages --save-dev`
3. Add deploy scripts to [package.json](file:///c:/Users/shikh/projects/portfolio/package.json):
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run `npm run deploy`.
