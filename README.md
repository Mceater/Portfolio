# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- ⚡ Smooth animations with Framer Motion
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 🔧 Built with Vite for fast development

## Sections

- **Hero** - Introduction with call-to-action buttons
- **Projects** - Showcase of your work with links to demos and GitHub
- **Skills** - Organized by categories (Languages, Tools, Databases, Frameworks)
- **About** - Personal information and background
- **Contact** - Social media links and contact information

## Projects Featured

- **Movie App (IMDB Without Money)** - React-based movie discovery app with TMDb API
- **Memoirs** - React Native image uploading mobile application
- **Adverts** - Full-stack React platform with payment processing and enterprise features

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Mceater/Portfolio.git
cd Portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Personal Information

Edit the following in `src/Portfolio.tsx`:

1. **Name**: Replace "Farhan R" in the Hero section
2. **Title/Description**: Update the subtitle in the Hero section
3. **Projects**: Replace the placeholder projects with your actual projects
4. **Skills**: Update the skills categories and items
5. **About**: Replace with your personal story
6. **Contact**: Update email and social media links

### Resume

Replace `public/resume.pdf` with your actual resume file.

### Styling

The project uses Tailwind CSS. You can customize:

- Colors in `tailwind.config.js`
- CSS variables in `src/index.css`
- Component styles directly in the JSX files

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Deployment

This portfolio is deployed on Vercel at: [portfolio-mceaters-projects.vercel.app](https://portfolio-mceaters-projects.vercel.app)

## License

This project is open source and available under the [MIT License](LICENSE).
