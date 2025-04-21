# ScholarSeeker AI 🎓

[![CI](https://github.com/Davidson3556/ScholarSeeker-AI/actions/workflows/ci.yml/badge.svg)](https://github.com/Davidson3556/ScholarSeeker-AI/actions/workflows/ci.yml) [![License: MIT](https://img.shields.io/github/license/Davidson3556/ScholarSeeker-AI.svg)](LICENSE) [![Issues](https://img.shields.io/github/issues/Davidson3556/ScholarSeeker-AI.svg)](https://github.com/Davidson3556/ScholarSeeker-AI/issues)

[![Next.js](https://img.shields.io/badge/Next.js-13.5.4-black?logo=next.js)](https://nextjs.org/)  
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?logo=typescript)](https://www.typescriptlang.org/)  
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-06B6D4?logo=tailwind-css)](https://tailwindcss.com/)  

A modern scholarship discovery platform powered by AI, helping international students locate funding opportunities at top U.S. universities.

![ScholarSeeker Demo](demo.gif)

---

## Table of Contents 📑

- [Features](#features-)
- [Tech Stack](#tech-stack-)
- [Getting Started](#getting-started-)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Project Structure](#project-structure-)
- [Deployment](#deployment-)
- [Contributing](#contributing-)
- [License](#license-)

---

## Features ✨

- 🔍 **AI-powered** scholarship search
- 🎯 Advanced filtering (location, degree level, award amount)
- 🏫 Detailed university profiles
- 📊 Scholarship insights and visual statistics
- 💻 Fully responsive, mobile-first design
- 🚀 Performance optimized with Next.js Image & CDN caching
- ✨ Interactive UI animations powered by Framer Motion

## Tech Stack 🛠️

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide](https://lucide.dev/)
- **Deployment:** Vercel

## Getting Started 🚀

### Prerequisites

- **Node.js** v18.x or higher
- **pnpm** v7.x or higher (or yarn & npm)

### Installation

1. **Clone** the repository:
   ```bash
   git clone https://github.com/Davidson3556/ScholarSeeker-AI.git
   cd ScholarSeeker-AI
   ```

2. **Install** dependencies:
   ```bash
   pnpm install
   ```



### Running Locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure 🗂️

```
.
├── app/                   # Next.js App Router pages & layouts
│   ├── about/
│   ├── construction/
│   ├── school/
│   └── search/
├── components/            # Reusable UI components
│   ├── home/
│   ├── scholarship/
│   └── ui/
├── lib/                   
├── services/              
├── types/                 # TypeScript interfaces & types
├── public/                # Static assets (images, fonts)
└── styles/                # Global & theme styles
```

## Deployment 🚀

This project is configured for seamless deployment on Vercel:

1. Push your code to GitHub.
2. Log in to [Vercel](https://vercel.com/) and create a new project.
3. Select your GitHub repository.
4. Deploy with the default settings.

Vercel will automatically:

- Detect the Next.js framework
- Build & optimize assets
- Enable HTTPS and CDN caching
- Provide deployment previews and analytics


