# React Portfolio

A modern, interactive portfolio website built with React, featuring smooth animations and a dark/light theme toggle.

## Features

- **Modern React Architecture**: Built with React 19 and Vite
- **Smooth Animations**: Powered by Framer Motion
- **Theme Toggle**: Dark and light mode support
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component-Based**: Modular, reusable components
- **GitHub Pages Ready**: Configured for easy deployment

## Tech Stack

- **Frontend**: React 19, React Router DOM
- **Styling**: Tailwind CSS 4.x
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── ThemeToggle.jsx
│   └── ...
├── context/            # React Context providers
│   └── ThemeContext.jsx
├── assets/             # Static assets
└── main.jsx           # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Build and deploy to GitHub Pages
- `npm run lint` - Run ESLint

## Deployment

### GitHub Pages

The project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

This will build the project and push it to the `gh-pages` branch.

### Other Platforms

You can deploy the built files from the `dist/` folder to any static hosting service:
- Netlify
- Vercel
- AWS S3
- Firebase Hosting

## Customization

- Update personal information in components
- Modify theme colors in `tailwind.config.js`
- Add new sections by creating components
- Customize animations in Framer Motion components

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- Email: erenege743@gmail.com
- LinkedIn: [eozol](https://www.linkedin.com/in/eozol)
- GitHub: [eozol17](https://github.com/eozol17)