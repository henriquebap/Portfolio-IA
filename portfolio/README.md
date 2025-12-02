# Henrique Baptista - ML Engineer Portfolio

Portfolio website showcasing Machine Learning and AI projects.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool with HMR
- **Tailwind CSS v4** - Styling with custom utilities
- **Framer Motion** - Animations and transitions
- **React Icons** - Icon library

## Features

- Animated hero section with gradient backgrounds
- Glassmorphism design throughout
- Featured projects showcase
- Filterable project grid by category (ML, DL, Gen AI)
- Skills section with technology badges
- Responsive design for all devices
- Smooth scroll animations

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx         # Navigation bar
│   ├── Hero.jsx           # Hero section
│   ├── About.jsx          # About me section
│   ├── FeaturedProjects.jsx # Featured work
│   ├── ProjectsGrid.jsx   # All projects with filters
│   ├── ProjectCard.jsx    # Reusable project card
│   ├── Skills.jsx         # Tech stack section
│   └── Contact.jsx        # Contact section
├── data/
│   └── projects.js        # All project data
├── App.jsx                # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles & Tailwind
```

## Customization

Edit `src/data/projects.js` to update:
- Profile information
- Featured projects
- All projects by category
- Skills and technologies

## Deployment

The project is ready for deployment on:
- **Vercel** - `vercel deploy`
- **Netlify** - Drag & drop `dist` folder
- **GitHub Pages** - With appropriate base config

## License

MIT License - Feel free to use for your own portfolio!
