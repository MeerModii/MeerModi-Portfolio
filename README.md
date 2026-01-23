# Meer Modi - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring smooth animations and a bold-yet-minimal design aesthetic.

## 🚀 Features

- **Modern Design**: Clean, professional layout with teal/charcoal/ivory color palette
- **Responsive**: Mobile-first design that works on all devices  
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Performance Optimized**: Built with Next.js 14 and optimized for speed
- **SEO Ready**: Comprehensive meta tags and Open Graph support
- **TypeScript**: Fully typed for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Sora (headings) + Manrope (body)

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── Navigation.tsx     # Main navigation component
│   ├── data/
│   │   └── content.ts         # Portfolio content and data
│   ├── globals.css            # Global styles and theme tokens
│   ├── layout.tsx             # Root layout with SEO meta
│   ├── page.tsx               # Main portfolio page
│   └── not-found.tsx          # 404 error page
└── public/
    └── resume.pdf             # Resume PDF (replace with actual)
```

## 🎨 Design System

### Colors
- **Primary**: Teal (#0d9488)
- **Accent**: Cyan (#06b6d4)  
- **Neutral**: Charcoal to Ivory spectrum
- **Background**: Light neutral with dark mode support

### Typography
- **Headings**: Sora (bold, confident)
- **Body**: Manrope (readable, geometric)

## 📝 Content Customization

Update your portfolio content in `src/app/data/content.ts`:

1. **Personal Info**: Name, email, social links
2. **About**: Summary and key highlights  
3. **Experience**: Work history with achievements
4. **Projects**: Featured projects with tech stacks
5. **Skills**: Technical skills by category
6. **Contact**: Contact section content

## 🚀 Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

### Environment Setup
No environment variables required for basic functionality.

## 📦 Deployment

### GitHub Pages Setup (Future)

1. **Update Next.js Config** (when ready to deploy):
```typescript
// next.config.ts
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

2. **GitHub Actions Workflow**:
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

3. **Domain Setup** (meermodi.dev):
   - Add `CNAME` file in `public/` folder
   - Configure DNS A records to point to GitHub Pages
   - Enable HTTPS in repository settings

### Alternative Deployment Options
- **Vercel**: Automatic deployment with zero config
- **Netlify**: Drag and drop or Git integration  
- **AWS S3 + CloudFront**: Static hosting with CDN

## 📱 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **Core Web Vitals**: Optimized for FCP, LCP, CLS
- **Bundle Size**: Optimized with Next.js automatic splitting

## 🔧 Customization

### Theme Colors
Update CSS custom properties in `globals.css`:
```css
:root {
  --primary: #0d9488;    /* Main brand color */
  --accent: #06b6d4;     /* Secondary accent */
  /* ... */
}
```

### Animation Preferences
Modify animation values in components:
```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }  // Adjust timing
};
```

## 📄 License

This project is personal portfolio code. Feel free to use as inspiration, but please don't copy directly.

## 📞 Contact

- **Email**: meer@meermodi.dev
- **LinkedIn**: [linkedin.com/in/meermodi](https://linkedin.com/in/meermodi)
- **GitHub**: [github.com/meermodi](https://github.com/meermodi)

---

Built with ❤️ using Next.js and Tailwind CSS
