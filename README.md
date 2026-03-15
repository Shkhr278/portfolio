# Immersive Developer Portfolio

A highly-engineered, ultra-modern developer portfolio built with React 19, Vite, and Tailwind CSS v4. The design breaks away from generic templates, utilizing a custom "Hybrid Concept" that merges **Neon Glassmorphism** with **Immersive Spatial Typography**.

## 🌟 Key Features

- **Hybrid UI Design**: A sophisticated blend of dark-mode neon glows, glassmorphic panels (backdrop-blur), and stark, brutalist-inspired fluid typography.
- **100% Zoom Responsiveness**: Built entirely without rigid media-query breakpoints for text sizing. By leveraging advanced CSS `clamp()` functions and native CSS Grid `auto-fit` properties, the application scales flawlessly across mobile, tablet, 1080p, and 4K displays at any zoom level.
- **Complex Masked Layouts**: Features a custom 4-column by 2-row Bento Grid utilizing mathematically precise `mask-image` radial gradients to create seamless "Squircle" intersections without fighting complex SVG borders.
- **Cinematic Scrollytelling**: Hero section driven by Framer Motion's `useScroll` utility to scale, fade, and translate the introductory experience smoothly along the Z-axis as the user scrolls.
- **Ambient Aurora Background**: A unique, multi-layered moving background combining animated gradient orbs and SVG perlin noise for premium texture.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4.0 Alpha/Beta) with heavy custom `@theme` variables.
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📁 Project Structure

portfolio/
├── public/ # Static public assets
├── src/
│ ├── components/ # Reusable React components
│ │ ├── BackgroundAurora.jsx # Moving ambient background
│ │ ├── BentoGrid.jsx # Custom squircle-masked projects grid
│ │ ├── Contact.jsx # Glassmorphic contact section
│ │ ├── Hero.jsx # Scrollytelling intro banner
│ │ ├── Layout.jsx # Edge-to-edge layout wrapper
│ │ └── Navbar.jsx # Sticky navigation overlay
│ ├── index.css # Global styles, fluid typography classes, Tailwind config
│ ├── App.jsx # Application entry point/component composition
│ └── main.jsx # React DOM mounting
├── index.html # Primary HTML entry point
├── package.json # Project dependencies & scripts
├── vite.config.js # Vite build configuration
└── README.md # Project documentation

_Designed and engineered with precision._
