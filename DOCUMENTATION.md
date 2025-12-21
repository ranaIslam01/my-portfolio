# Portfolio Project Documentation

## 📋 Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Component Guide](#component-guide)
- [Customization Guide](#customization-guide)
- [Performance Tips](#performance-tips)
- [Deployment Guide](#deployment-guide)

## Overview

This is a modern, production-ready portfolio website designed for developers and creative professionals. Built with Next.js 15, React 18, TypeScript, and Tailwind CSS, it combines excellent performance with stunning visuals.

### Key Features

- ⚡ **Next.js 15 App Router** - Latest Next.js features and best practices
- 🎨 **Modern Design** - Clean, professional, and customizable UI
- 🌙 **Dark/Light Mode** - Toggle with localStorage persistence
- 📱 **Responsive** - Mobile-first design for all devices
- ✨ **Smooth Animations** - Framer Motion for engaging interactions
- 🚀 **Performance** - Optimized images, code splitting, and lazy loading
- 📊 **SEO Friendly** - Meta tags, Open Graph, and semantic HTML
- ♿ **Accessible** - ARIA labels, semantic elements, keyboard navigation
- 💬 **Contact Form** - Built-in form with validation
- 📦 **Reusable Components** - Clean, well-organized architecture

## Project Structure

```
new_portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with metadata and providers
│   │   ├── page.tsx                # Home page - imports all sections
│   │   └── globals.css             # Global styles and animations
│   │
│   └── components/
│       ├── Header.tsx              # Navigation header with mobile menu
│       ├── Footer.tsx              # Footer with social links
│       │
│       ├── providers/
│       │   └── ThemeProvider.tsx   # Dark/light mode provider
│       │
│       └── sections/
│           ├── Hero.tsx            # Landing section with CTA
│           ├── About.tsx           # Bio and highlights
│           ├── Skills.tsx          # Tech stack and proficiency
│           ├── Projects.tsx        # Project showcase
│           ├── Testimonials.tsx    # Client testimonials
│           └── Contact.tsx         # Contact form
│
├── package.json                    # Dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
├── tailwind.config.ts              # Tailwind CSS customization
├── postcss.config.js               # PostCSS configuration
├── next.config.js                  # Next.js configuration
├── .eslintrc.json                  # ESLint rules
├── .env.example                    # Environment variables template
├── .gitignore                      # Git ignore rules
└── README.md                       # Project readme

```

## Component Guide

### Layout & Structure

#### `src/app/layout.tsx`

The root layout component that wraps all pages. Includes:

- Theme provider for dark/light mode
- Global fonts (Geist Sans & Mono)
- SEO metadata
- Body styling with theme classes

**Customization:**

```typescript
// Update metadata
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Your professional description",
};
```

#### `src/app/globals.css`

Global styles including:

- Tailwind directives (@tailwind)
- Custom scrollbar styles
- Selection colors
- Utility classes (.gradient-text, .glow-effect)

### Navigation Components

#### `src/components/Header.tsx`

Sticky header with:

- Logo/branding
- Navigation menu (desktop & mobile)
- Smooth scroll anchors
- Mobile menu toggle

**Customize Navigation:**

```typescript
const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  // Add more items...
];
```

#### `src/components/Footer.tsx`

Footer with:

- Brand section
- Quick links
- Social media links
- Copyright information

**Update Social Links:**

```typescript
const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/your-username",
    icon: Github,
  },
  // Add more social links...
];
```

### Theme Provider

#### `src/components/providers/ThemeProvider.tsx`

Handles dark/light mode toggle with:

- localStorage persistence
- System preference detection
- Smooth transitions
- Floating toggle button

No customization needed - just works!

### Page Sections

#### `src/components/sections/Hero.tsx`

Landing section with:

- Animated headline
- Description
- CTA buttons (View Work, Get Resume)
- Scroll indicator

**Customize:**

```typescript
// Edit headline, description, and button text
<h1>Creative Developer Building amazing web experiences</h1>
```

#### `src/components/sections/About.tsx`

Professional bio with:

- Personal introduction
- 3 highlighted features
- Professional achievements

**Update Content:**

```typescript
// Replace placeholder text with your bio
const highlights = [
  {
    icon: Code2,
    title: "5+ Years Experience",
    description: "Your description...",
  },
];
```

#### `src/components/sections/Skills.tsx`

Technical skills showcase:

- Skill categories (Frontend, Backend, Tools, Other)
- Individual skill tags
- Proficiency bars

**Add Your Skills:**

```typescript
const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
];
```

#### `src/components/sections/Projects.tsx`

Featured projects with:

- Full-width featured projects
- Project grid for additional work
- Live demo and GitHub links
- Technology tags

**Add Projects:**

```typescript
const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    technologies: ["React", "Node.js"],
    image: "/images/project.jpg",
    liveLink: "https://project.com",
    githubLink: "https://github.com/project",
    featured: true,
  },
];
```

#### `src/components/sections/Testimonials.tsx`

Client testimonials with:

- Star ratings
- Client quotes
- Author information

**Add Testimonials:**

```typescript
const testimonials = [
  {
    id: 1,
    name: "Client Name",
    role: "Position",
    company: "Company",
    image: "/images/client.jpg",
    quote: "Their feedback...",
    rating: 5,
  },
];
```

#### `src/components/sections/Contact.tsx`

Contact form with:

- Name, email, subject, message fields
- Form validation
- Success feedback
- Contact information cards

**Update Contact Info:**

```typescript
const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
];
```

## Customization Guide

### 1. Update Color Scheme

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: '#3b82f6',      // Main blue
  secondary: '#8b5cf6',    // Purple accent
  accent: '#ec4899',       // Pink accent
  dark: {
    bg: '#0f172a',
    card: '#1e293b',
    text: '#f1f5f9',
  },
  light: {
    bg: '#f8fafc',
    card: '#ffffff',
    text: '#0f172a',
  },
}
```

### 2. Modify Animations

Animations are powered by Framer Motion. Key variants:

```typescript
// Container animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// Item animations
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
```

### 3. Add New Sections

1. Create new component in `src/components/sections/NewSection.tsx`
2. Import in `src/app/page.tsx`
3. Add to layout with an ID for navigation

```typescript
// src/app/page.tsx
import NewSection from "@/components/sections/NewSection";

export default function Home() {
  return (
    <>
      {/* other sections */}
      <NewSection />
    </>
  );
}
```

### 4. Update Images

Replace placeholder images in components:

```typescript
<Image
  src="/images/your-image.jpg" // Add to public/images/
  alt="Description"
  fill
  className="object-cover"
/>
```

### 5. Change Typography

Edit fonts in `src/app/layout.tsx`:

```typescript
// Import different fonts from next/font/google
import { Inter, Poppins } from "next/font/google";

const geistSans = Poppins({
  variable: "--font-sans",
  weight: ["400", "600", "700"],
});
```

### 6. Add Pages

Create new pages in `src/app/`:

```typescript
// src/app/blog/page.tsx
export default function Blog() {
  return <div>Blog posts...</div>;
}
```

## Performance Tips

### 1. Image Optimization

- Use Next.js `Image` component (automatic optimization)
- Compress images before uploading
- Use WebP format for modern browsers
- Set appropriate `width` and `height` props

### 2. Code Splitting

- Next.js automatically splits code per route
- Use dynamic imports for heavy components:

```typescript
const HeavyComponent = dynamic(() => import("@/components/Heavy"), {
  loading: () => <p>Loading...</p>,
});
```

### 3. SEO Optimization

Update metadata for each page:

```typescript
export const metadata: Metadata = {
  title: "Page Title | Portfolio",
  description: "Page description for search engines",
  openGraph: {
    title: "Open Graph Title",
    description: "OG Description",
    url: "https://yoursite.com",
    type: "website",
  },
};
```

### 4. Performance Monitoring

Use Next.js built-in metrics:

```typescript
// Automatically tracked
- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)
```

## Deployment Guide

### Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Vercel auto-configures Next.js
5. Deploy automatically

```bash
git push origin main
# Automatic deployment triggered
```

### Deploy to Netlify

```bash
# Build for production
npm run build

# Netlify will serve the .next output
```

### Deploy to Other Platforms

1. Build project:

```bash
npm run build
```

2. Set Node.js environment (v18+)

3. Set start command:

```bash
npm start
```

4. Set build command:

```bash
npm run build
```

### Environment Variables

Create `.env.local`:

```bash
NEXT_PUBLIC_CONTACT_EMAIL=your.email@example.com
SENDGRID_API_KEY=your_api_key
```

### Pre-deployment Checklist

- [ ] Update all placeholder content
- [ ] Add real project images
- [ ] Update social media links
- [ ] Configure contact email
- [ ] Test dark/light mode
- [ ] Test mobile responsiveness
- [ ] Run `npm run build` locally
- [ ] Check for console errors/warnings
- [ ] Update SEO metadata
- [ ] Test contact form

## Troubleshooting

### Build Issues

**"Module not found" error:**

```bash
npm install
npm run build
```

**TypeScript errors:**

- Check `tsconfig.json` paths match import aliases
- Run `npx tsc --noEmit` to see all errors

### Performance Issues

**Slow page load:**

- Check image sizes with DevTools
- Analyze bundle size: `npm run build`
- Use Chrome DevTools Performance tab

**Animations stuttering:**

- Reduce animation complexity
- Check for heavy computations during render
- Use `will-change` CSS property sparingly

### Styling Issues

**Dark mode not working:**

- Check ThemeProvider is wrapping entire app
- Verify `darkMode: 'class'` in tailwind.config
- Check for CSS specificity conflicts

**Tailwind styles not applying:**

- Verify file paths in `tailwind.config.ts` content
- Clear `.next` folder: `rm -rf .next`
- Restart dev server

## Support & Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [React Docs](https://react.dev)

---

**Last Updated:** December 21, 2025
**Version:** 1.0.0
