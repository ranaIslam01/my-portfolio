# Rana Islam - Professional Portfolio

A modern, high-performance personal portfolio website showcasing projects, skills, and professional experience as a MERN Stack Developer. Built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **🎨 Modern Design** - Clean, professional, and visually appealing UI with smooth animations
- **⚡ High Performance** - Optimized for speed and SEO with Next.js best practices
- **🌙 Dark/Light Mode** - Theme toggle in header with localStorage persistence
- **📱 Fully Responsive** - Works beautifully on mobile, tablet, and desktop devices
- **✨ Smooth Animations** - Framer Motion animations for engaging interactions
- **🎯 SEO Optimized** - Meta tags, semantic HTML, and structured data
- **♿ Accessible** - ARIA labels and semantic HTML elements
- **📦 Component Architecture** - Reusable, maintainable component structure
- **💬 Contact Form** - Fully functional contact form with validation

## About

**Rana Islam** is a passionate MERN Stack Developer based in Dinajpur Sadar, Bangladesh. With expertise in modern web technologies and a keen eye for design, Rana builds high-quality, user-centric applications.

### Specialization

- MERN Stack (MongoDB, Express, React, Node.js)
- Full Stack Web Development
- Web Design & UI/UX

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: npm

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with theme provider
│   ├── page.tsx                # Home page with all sections
│   ├── globals.css             # Global styles
│   └── api/
│       └── contact/
│           └── route.ts        # Contact form API endpoint
├── components/
│   ├── Header.tsx              # Navigation with theme toggle
│   ├── Footer.tsx              # Footer with social links
│   ├── ScrollToTop.tsx         # Scroll-to-top floating button
│   ├── providers/
│   │   └── ThemeProvider.tsx   # Dark/light mode provider
│   └── sections/
│       ├── Hero.tsx            # Hero section with animations
│       ├── About.tsx           # About section with background
│       ├── Skills.tsx          # Skills showcase
│       ├── Experience.tsx      # Professional experience
│       ├── Education.tsx       # Educational background
│       ├── Projects.tsx        # Project portfolio showcase
│       ├── Contact.tsx         # Contact form
│       └── Testimonials.tsx    # Client testimonials
└── data/
    └── projects.ts            # Project data configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation & Setup

1. Clone the repository:

```bash
git clone <your-repo-url>
cd New_Portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see your portfolio.

## Customization

### Update Personal Information

- **Hero Section**: Edit `src/components/sections/Hero.tsx` to update your name, roles, and headline
- **About Section**: Update `src/components/sections/About.tsx` with your background and skills
- **Experience Section**: Modify `src/components/sections/Experience.tsx` with your work experience
- **Education Section**: Edit `src/components/sections/Education.tsx` with your qualifications
- **Projects Section**: Update `src/data/projects.ts` with your portfolio projects
- **Contact Info**: Edit `src/components/sections/Contact.tsx` and `Footer.tsx` with your details

### Contact Form Configuration

The contact form sends to `/api/contact`. Update the API endpoint in `src/app/api/contact/route.ts` to integrate with your email service (SendGrid, Nodemailer, etc.).

### Update Metadata & SEO

Edit `src/app/layout.tsx` to customize:

```typescript
export const metadata: Metadata = {
  title: "Rana Islam | Portfolio",
  description: "MERN Stack Developer - Portfolio",
  // ... other SEO metadata
};
```

### Customize Theme Colors

Modify `tailwind.config.ts`:

```typescript
colors: {
  primary: '#3b82f6',        // Primary color
  secondary: '#8b5cf6',      // Secondary color
  accent: '#ec4899',         // Accent color
  'light-bg': '#ffffff',     // Light mode background
  'dark-bg': '#0f172a',      // Dark mode background
  // ... more colors
}
```

## Available Scripts

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build optimized production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Key Features Explained

### Dark/Light Mode Toggle

- Located in the header for easy access
- Automatically persists preference using localStorage
- Respects system color scheme on first visit
- Smooth transitions between themes

### Smooth Animations

- Hero section: Text typing animation, floating profile image, rotating borders
- Sections: Staggered fade-in animations on scroll
- Cards: Hover effects with glow and scale animations
- Scroll-to-top button: Bounce animation with glow effect
- Form: Submit animation with success feedback

### Responsive Design

- Mobile-first approach
- Optimized for all screen sizes
- Hamburger menu on mobile devices
- Touch-friendly interactive elements

### Performance

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS minification
- Fast refresh during development
- SEO-friendly structure

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project" and import your repository
4. Vercel automatically detects Next.js and configures it
5. Click "Deploy" - your portfolio is live!

### Deploy to Other Platforms

- **Netlify**: Connect GitHub, Netlify builds and deploys automatically
- **AWS Amplify**: Push to GitHub, connect to Amplify for CI/CD
- **Google Cloud**: Deploy to Cloud Run or Cloud Platform
- **DigitalOcean**: App Platform supports Node.js applications
- **Heroku**: Use Heroku CLI or connect GitHub for auto-deploy

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact & Social Links

- **Email**: [Your email]
- **GitHub**: [Your GitHub profile]
- **LinkedIn**: [Your LinkedIn profile]
- **Location**: Dinajpur Sadar, Bangladesh

## License

MIT License - Feel free to use this template for your portfolio and customize it as needed.

## Support & Feedback

For questions, issues, or feature requests, please open an issue in the repository.

---

Made with ❤️ by Rana Islam | Showcasing modern web development skills and professional projects.

**Last Updated**: January 2026
