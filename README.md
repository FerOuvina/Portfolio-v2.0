# Portfolio v2.0

![GitHub](https://img.shields.io/github/license/FerOuvina/Portfolio-v2.0)

This is the second version of my personal portfolio website. Instead of a traditional page, it's built as a **retro desktop-OS simulator**: the browser viewport works like a desktop where you open "windows" (cards) from desktop icons to explore my work, skills, and contact info.

## Table of Contents
- [Live Version](#live-version)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Live Version
You can access the live version of the portfolio at [Portfolio v2.0](https://ouvina-fernando.vercel.app).

## Features
- Desktop-OS style interface: desktop icons open animated "windows" (cards)
- Window management: drag windows by their title bar (interact.js with inertia), minimize/close buttons, and z-index stacking (clicking or dragging a window brings it to the front)
- Sections: About/Specs, Projects, Contact (with a playful Yes/No flow and a thank-you page), and Blog
- Built-in music player with play/pause, seek bar, and track navigation
- Retro system sounds when opening windows (via `use-sound`)
- Responsive design with different layouts for small and big screens (breakpoint at 1024px)
- Easily customizable to add your own projects and content

## Technologies Used
- JavaScript
- React 18
- Next.js 13 (App Router)
- Tailwind CSS
- GSAP (window open/minimize/close animations)
- interact.js (drag and drop windows with inertia)
- use-sound (UI sound effects)
- intersection-observer (detects which windows are open)
- Vercel Analytics
- HTML5 / CSS3

## Getting Started
```bash
npm install
npm run dev     # start development server
npm run build   # production build
npm start       # start production server
npm run lint    # lint (standard config)
```

## Project Structure
```
src/
├── app/            # Next.js App Router pages (home, thank you, layout)
├── components/     # Desktop icons, cards (windows), navbar, music player, etc.
├── context/        # ZIndexContext for window stacking order
├── hooks/          # useObserver (IntersectionObserver wrapper)
├── assets/         # Images, icons, and logos
└── stylesheets/    # Global and component CSS
```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them.
- Push your changes to your fork.
- Submit a pull request to the main repository.
