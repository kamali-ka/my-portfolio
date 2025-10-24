# Portfolio Website

## Overview
Modern single-page portfolio built with React, showcasing professional experience, projects, and contact channels in a responsive layout.

## Features
1. Hero, About, Experience, Projects, Skills, and Contact sections with smooth vertical navigation.
2. Responsive TailwindCSS design with animated accents and gradient styling.
3. Reusable component architecture and typed data structures in TypeScript.
4. Integrated social and email links for outreach.

## Tech Stack
- **Framework**: React 18 + TypeScript
- **Build Tooling**: Vite 5
- **Styling**: TailwindCSS 3, PostCSS, Autoprefixer
- **Icons**: lucide-react
- **Type Checking**: TypeScript 5
- **Linting**: ESLint with TypeScript ESLint plugins

## Project Structure
```
project/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── components/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       └── Contact.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
```

## Prerequisites
- Node.js 18+
- npm 9+

## Setup
1. Clone the repository and navigate into the project directory.
2. Install dependencies with `npm install`.
3. Start the development server using `npm run dev`.
4. Open the displayed local URL to view the site.

## Available Scripts
- **npm run dev**: Start the Vite development server with hot module replacement.
- **npm run build**: Generate an optimized production build.
- **npm run preview**: Serve the production build locally for verification.
- **npm run lint**: Lint source files with ESLint.
- **npm run typecheck**: Run TypeScript in no-emit mode against `tsconfig.app.json`.

## TailwindCSS Notes
- Utility classes are composed directly within JSX to keep styling colocated with components.
- Global styles and Tailwind layers are defined in `src/index.css`, with configuration in `tailwind.config.js`.

## Deployment
1. Run `npm run build` to emit the production bundle into `dist/`.