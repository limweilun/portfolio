# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Features smooth animations, dark mode support, native video embedding, and production-optimized performance.

## ✨ Features

- **Modern Design**: Clean and professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Native Video Embedding**: YouTube videos play directly in the portfolio with custom modal
- **Performance Optimized**: Production-ready with optimized bundles and caching
- **Type Safe**: Written in TypeScript for better development experience
- **Accessible**: Follows accessibility best practices with keyboard navigation
- **SEO Optimized**: Static generation for better search engine indexing

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router) with Turbopack
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS 3.4+ with ShadCN/UI components
- **Video Player**: React YouTube with native embedding
- **Icons**: Lucide React (optimized imports)
- **Build Tools**: Webpack with custom chunk optimization
- **Code Quality**: ESLint + Prettier with Tailwind plugin
- **Deployment**: Vercel with standalone output

## 🎬 Video Integration

Projects feature native YouTube video embedding with:
- High-quality thumbnails automatically generated from video URLs
- Custom video modal with keyboard controls (Escape to close)
- Click outside to close functionality
- Professional play button overlays
- Fallback placeholders for projects without videos

## 📊 Performance Metrics

```
Route (app)                             Size     First Load JS
┌ ○ /                                   9.23 kB         192 kB
└ ○ /_not-found                         185 B           183 kB
+ First Load JS shared by all           183 kB
  └ chunks/vendors-0b26c39aa13036d5.js  181 kB
  └ other shared chunks (total)         1.95 kB
```

- **Excellent Performance**: 192kB total bundle size
- **Optimized Chunks**: Named chunks for better debugging
- **Static Generation**: All pages pre-rendered for fast loading

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/limweilun/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```text
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── portfolio/         # Portfolio-specific components
│   │   ├── navigation.tsx
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── experience-section.tsx
│   │   ├── projects-section.tsx
│   │   ├── contact-section.tsx
│   │   └── footer.tsx
│   └── ui/               # Reusable UI components
├── lib/                  # Utility functions
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind CSS configuration
```

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build optimized production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking
- `npm run clean` - Clean build artifacts

## 🎨 Customization

### Content

Edit the content in the component files located in `components/portfolio/` to customize:

- Personal information and bio in `hero-section.tsx` and `about-section.tsx`
- Work experience and skills in `experience-section.tsx`
- Projects and portfolio items in `projects-section.tsx`
- Contact information in `contact-section.tsx`

### Adding YouTube Videos

To add a video to a project:

1. Update the `videoUrl` field in `projects-section.tsx`
2. The thumbnail will be automatically generated from the video ID
3. The video will play in a native modal when clicked

### Styling

- Modify `app/globals.css` for global styles
- Update `tailwind.config.ts` for Tailwind CSS customization
- Component-specific styles use Tailwind utility classes
- ShadCN/UI components in `components/ui/`

### Adding New Sections

1. Create a new component in `components/portfolio/`
2. Import and add it to `app/page.tsx`
3. Update navigation links in `components/portfolio/navigation.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Manual Deployment

```bash
npm run build
npm run start
```

The build creates a standalone output optimized for production deployment.

## 🔧 Production Optimizations

- **Bundle Splitting**: Optimized vendor and common chunks
- **Image Optimization**: WebP/AVIF formats with Next.js Image
- **Code Splitting**: Dynamic imports for better performance
- **Console Removal**: Automatic console.log removal in production
- **Static Generation**: Pre-rendered pages for faster loading
- **Caching**: Optimized static asset caching

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Wei Lun Lim - [LinkedIn](https://www.linkedin.com/in/limweilun/)

Project Link: [https://github.com/limweilun/portfolio](https://github.com/limweilun/portfolio)

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
