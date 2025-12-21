# Modern Portfolio Website

A production-ready, high-quality personal portfolio website built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **🎨 Modern Design** - Clean, professional, and visually appealing UI
- **⚡ High Performance** - Optimized for speed and SEO
- **🌙 Dark/Light Mode** - Theme toggle with localStorage persistence
- **📱 Fully Responsive** - Works beautifully on all devices
- **✨ Smooth Animations** - Framer Motion animations for engaging interactions
- **🎯 SEO Optimized** - Meta tags and semantic HTML
- **♿ Accessible** - ARIA labels and semantic elements
- **📦 Reusable Components** - Clean component architecture
- **💬 Contact Form** - Working form with validation

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
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer with social links
│   ├── providers/
│   │   └── ThemeProvider.tsx # Dark/light mode provider
│   └── sections/
│       ├── Hero.tsx        # Hero section
│       ├── About.tsx       # About section
│       ├── Skills.tsx      # Skills showcase
│       ├── Projects.tsx    # Project portfolio
│       ├── Testimonials.tsx # Client testimonials
│       └── Contact.tsx     # Contact form
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd new_portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

### Update Portfolio Content

Edit the placeholder content in each component:

- **Header/Footer**: Update social links and navigation
- **Hero**: Personalize the headline and description
- **About**: Add your professional bio
- **Skills**: List your technical skills
- **Projects**: Showcase your work with real project data
- **Testimonials**: Add client testimonials
- **Contact**: Update contact information

### Customize Colors

Modify the theme colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#3b82f6',      // Change primary color
  secondary: '#8b5cf6',    // Change secondary color
  accent: '#ec4899',       // Change accent color
}
```

### Update Metadata

Edit `src/app/layout.tsx` to update SEO metadata:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Your professional description",
  // ... other metadata
};
```

## Building for Production

Build the application for production:

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and configure it
5. Deploy with one click

### Deploy to Other Platforms

This portfolio can be deployed to any platform that supports Node.js:

- Netlify
- AWS
- Google Cloud
- DigitalOcean
- Heroku

## Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS minification and optimization
- Fast refresh for development
- Built-in font optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization Tips

1. **Add More Sections**: Create new components in `src/components/sections/`
2. **Modify Animations**: Adjust animation variants in Framer Motion components
3. **Change Color Scheme**: Update Tailwind config or use CSS variables
4. **Add Blog**: Create a blog section with dynamic routing
5. **Email Integration**: Connect the contact form to services like SendGrid or Nodemailer

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT License - feel free to use this template for your portfolio.

## Support

For questions or issues, please open an issue in the repository.

---

Made with ❤️ for developers who want a professional online presence.
