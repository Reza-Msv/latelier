# 🍽️ L'ATELIER — Culinary & Gourmet Experience

<div align="center">

![Next.js 16](https://img.shields.io/badge/Next.js-16.3.6-black?style=for-the-badge&logo=next.js&logoColor=white)
![React 19](https://img.shields.io/badge/React-19.2.8-blue?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.x-f08?style=for-the-badge&logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

<p align="center">
  <b>A state-of-the-art luxury culinary platform delivering interactive gourmet recipe showcases, immersive animations, and Michelin-inspired dining experiences.</b>
</p>

</div>

---

## ✨ Features

- 🌟 **Immersive Hero & Visual Storytelling**: High-impact visuals with dynamic typography, smooth ambient transitions, and interactive CTAs.
- 🎨 **Interactive UI Components**:
  - **Glare Cards**: Holographic-inspired 3D card tilt effects.
  - **Interactive Lens**: Magnification zoom for culinary inspection.
  - **Velocity Scrolling & Marquees**: High-performance momentum-based marquees and typography ribbons.
  - **Custom Smooth Cursor & Pointers**: Fluid cursor tracking for desktop web experiences.
  - **Meteor & Ambient Effects**: Atmospheric dynamic background effects.
  - **Fullscreen Overlay Navigation**: Minimalist luxury navigation menu.
- 🥗 **Curated Recipe Showcase**: Interactive breakdown of signature gourmet dishes with prep details, difficulty levels, and flavor profiles.
- 🥑 **Interactive Ingredient Exploration**: Dynamic spotlight on artisanal, farm-to-table culinary elements.
- 🏛️ **Restaurant & Chef Experience**: Atmosphere presentation blending haute cuisine with modern digital craft.
- ⚡ **Cutting-Edge Stack**: Powered by **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| [**Next.js 16**](https://nextjs.org/) | App Router, Server Components & High-performance Rendering |
| [**React 19**](https://react.dev/) | Core UI Architecture & State Management |
| [**TypeScript**](https://www.typescriptlang.org/) | Static Type Safety & Developer Experience |
| [**Tailwind CSS v4**](https://tailwindcss.com/) | Modern Utility-First Styling Engine |
| [**Framer Motion**](https://www.framer.com/motion/) | Orchestrated Animations & Micro-Interactions |
| [**Lucide React**](https://lucide.dev/) | Clean, Consistent Iconography |
| [**Canvas Confetti**](https://github.com/catdad/canvas-confetti) | Dynamic Celebratory Effects |

---

## 📁 Project Structure

```text
latelier/
├── public/                  # Static assets & photography
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── (web)/           # Main web route group
│   │   │   └── (home)/      # Home landing page
│   │   ├── globals.css      # Tailwind CSS v4 directives & theme
│   │   └── layout.tsx       # Root layout & font configurations
│   ├── components/
│   │   ├── pages/           # Page-specific views & sections
│   │   │   └── home/        # Hero, Categories, Featured, Showcase, etc.
│   │   ├── shared/          # Header, Footer, and layout chrome
│   │   └── ui/              # Reusable interactive UI primitive components
│   ├── hook/                # Custom hooks (e.g., useIsMobile)
│   └── lib/                 # Utility helpers (cn, clsx, tailwind-merge)
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20.x` or higher
- **Package Manager**: `pnpm` (recommended) or `npm` / `yarn` / `bun`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Reza-Msv/latelier.git
   cd latelier
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Run the local development server**:
   ```bash
   pnpm dev
   ```

4. **Open in Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 📜 Scripts

| Command | Action |
| :--- | :--- |
| `pnpm dev` | Starts the Next.js development server |
| `pnpm build` | Compiles the production build |
| `pnpm start` | Runs the production build locally |
| `pnpm lint` | Runs ESLint checks |

---

## 👨‍💻 Author

**Reza Mousavi**
- GitHub: [@Reza-Msv](https://github.com/Reza-Msv)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
