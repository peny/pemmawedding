# Pemma Wedding - Save the Date Website

A modern, elegant wedding website built with React and Vite, featuring a forest green (Slytherin-inspired) color scheme.

## Features

- Modern, responsive design
- Forest green color palette
- Smooth animations and transitions
- Optimized for static hosting on Render
- RSVP integration with Google Docs questionnaire

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone git@github.com:peny/pemmawedding.git
cd pemmawedding
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your Google Docs RSVP questionnaire link:
```
VITE_RSVP_LINK=https://docs.google.com/forms/d/e/1FAIpQLSerTB7OA52NjmkcicHb01aaFbcu0Ko2LktFu8pm4LVTuRxDWQ/viewform
```

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

Build the static site:
```bash
npm run build
```

The built files will be in the `dist` directory.

Preview the production build:
```bash
npm run preview
```

## Deployment on Render

This site is configured for static hosting on Render.

### Option 1: Using render.yaml (Recommended)

1. Push your code to GitHub
2. Connect your repository to Render
3. Render will automatically detect the `render.yaml` file and configure the service

### Option 2: Manual Configuration

1. Create a new Static Site on Render
2. Connect your GitHub repository
3. Set the build command: `npm install && npm run build`
4. Set the publish directory: `dist`
5. Add environment variable `VITE_RSVP_LINK` with your Google Docs form link

### Environment Variables

Make sure to set the following environment variable in Render:
- `VITE_RSVP_LINK`: Your Google Docs questionnaire link

## Customization

### Updating the RSVP Link

Edit the `.env` file (for local development) or set the `VITE_RSVP_LINK` environment variable in Render.

### Changing Colors

Edit the CSS variables in `src/styles/index.css`:
```css
:root {
  --forest-green-dark: #1a4d2e;
  --forest-green-medium: #2d5f3f;
  --forest-green-light: #4a7c59;
  /* ... */
}
```

### Updating Content

- Hero section: `src/components/Hero.jsx`
- Date information: `src/components/SaveTheDate.jsx`
- Location details: `src/components/Location.jsx`
- RSVP section: `src/components/RSVP.jsx`
- Footer: `src/components/Footer.jsx`

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Styling with CSS variables and modern features

## License

Private project - All rights reserved



test