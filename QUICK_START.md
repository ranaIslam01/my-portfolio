# Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### Step 1: Start Development Server

The server is already running at `http://localhost:3000`

### Step 2: Update Your Information

Open each file and replace placeholders with your information:

#### 1. Update Your Name & Bio

- **File**: `src/components/sections/Hero.tsx`
- **What to change**:
  - Headline: "Creative Developer Building amazing web experiences"
  - Description text

#### 2. Update About Section

- **File**: `src/components/sections/About.tsx`
- **What to change**:
  - Bio paragraphs
  - Highlight titles and descriptions

#### 3. Add Your Skills

- **File**: `src/components/sections/Skills.tsx`
- **What to change**:
  - Skill categories and items
  - Proficiency percentages

#### 4. Add Your Projects

- **File**: `src/components/sections/Projects.tsx`
- **What to change**:
  - Project titles and descriptions
  - Technologies used
  - Live links and GitHub repos
  - Project images (replace placeholders)

#### 5. Add Testimonials

- **File**: `src/components/sections/Testimonials.tsx`
- **What to change**:
  - Client names and companies
  - Testimonial quotes
  - Client images (replace placeholders)

#### 6. Update Contact Info

- **File**: `src/components/sections/Contact.tsx`
- **What to change**:
  - Email address
  - Phone number
  - Location

#### 7. Update Social Links

- **File**: `src/components/Footer.tsx`
- **What to change**:
  - GitHub URL
  - LinkedIn URL
  - Twitter URL
  - Email address

#### 8. Update Header & Footer

- **File**: `src/components/Header.tsx` and `src/components/Footer.tsx`
- **What to change**:
  - Logo text or add image
  - Copyright year and name

#### 9. Update SEO Metadata

- **File**: `src/app/layout.tsx`
- **What to change**:
  - Page title
  - Page description
  - Author name
  - Website URL

### Step 3: Add Images

1. Create `public/images/` folder
2. Add your project and testimonial images
3. Replace placeholder image URLs in components

### Step 4: Customize Colors (Optional)

- **File**: `tailwind.config.ts`
- Change primary, secondary, and accent colors

### Step 5: Deploy

```bash
# Build for production
npm run build

# Deploy to Vercel (recommended)
# Push to GitHub and import at vercel.com
```

## 📁 Essential Files to Edit

Priority order for customization:

1. **src/components/sections/Hero.tsx** - Your headline
2. **src/app/layout.tsx** - SEO metadata
3. **src/components/sections/About.tsx** - Your bio
4. **src/components/sections/Skills.tsx** - Your skills
5. **src/components/sections/Projects.tsx** - Your projects
6. **src/components/sections/Contact.tsx** - Your contact info
7. **src/components/Footer.tsx** - Your social links
8. **tailwind.config.ts** - Your brand colors

## 🎨 Common Customizations

### Change Color Scheme

```typescript
// tailwind.config.ts
colors: {
  primary: '#3b82f6',      // Your main color
  secondary: '#8b5cf6',    // Your accent 1
  accent: '#ec4899',       // Your accent 2
}
```

### Add New Section

1. Create `src/components/sections/YourSection.tsx`
2. Import in `src/app/page.tsx`
3. Add to layout with ID for navigation

### Update Navigation

```typescript
// src/components/Header.tsx
const navItems = [{ label: "Your Link", href: "#your-id" }];
```

## 🔍 File Structure Quick Reference

```
Key Files to Edit:
├── src/app/layout.tsx              ← SEO metadata
├── src/app/globals.css             ← Global styles
├── src/components/Header.tsx       ← Navigation
├── src/components/Footer.tsx       ← Social links
├── src/components/sections/
│   ├── Hero.tsx                    ← Your headline
│   ├── About.tsx                   ← Your bio
│   ├── Skills.tsx                  ← Your skills
│   ├── Projects.tsx                ← Your work
│   ├── Testimonials.tsx            ← Reviews
│   └── Contact.tsx                 ← Contact form
├── tailwind.config.ts              ← Colors
└── next.config.js                  ← Next.js config
```

## 📝 Checklist

Before deploying:

- [ ] Updated all placeholder text
- [ ] Added your projects with real links
- [ ] Added testimonials
- [ ] Updated contact information
- [ ] Added your images (projects, testimonials)
- [ ] Updated social media links
- [ ] Changed colors to match your brand
- [ ] Tested on mobile devices
- [ ] Tested dark/light mode toggle
- [ ] Ran `npm run build` successfully
- [ ] Updated SEO metadata

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Deploy automatically

### Other Platforms

1. Run `npm run build`
2. Deploy the `.next` folder
3. Set start command to `npm start`

## 💡 Tips

- **Live Preview**: Changes auto-refresh at http://localhost:3000
- **Dark Mode**: Floating button in bottom-right corner
- **Smooth Scroll**: Click nav links to scroll to sections
- **Mobile Responsive**: Test with browser DevTools
- **Performance**: Images are automatically optimized

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Full Documentation](./DOCUMENTATION.md)

## ❓ Need Help?

Check [DOCUMENTATION.md](./DOCUMENTATION.md) for detailed guides on:

- Component structure
- Customization options
- Performance optimization
- Deployment guide
- Troubleshooting

---

**Ready to launch?** Start editing and have fun building your portfolio! 🎉
