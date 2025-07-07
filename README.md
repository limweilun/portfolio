# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and TailwindCSS.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean and professional design with smooth animations
- **Dark Mode Support**: Toggle between light and dark themes
- **Performance Optimized**: Built with Next.js for fast loading times
- **Accessible**: Follows web accessibility best practices

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [ShadCN/UI](https://ui.shadcn.com) - Re-usable components built with Radix UI and Tailwind CSS
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icon toolkit
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

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

## Available Scripts

- `bun dev` - Start the development server
- `bun build` - Build the application for production
- `bun start` - Start the production server
- `bun lint` - Run ESLint for code linting
- `bun format` - Format code with Prettier

## Customization

### Content
Edit the content in the component files located in `components/portfolio/` to customize:
- Personal information and bio
- Work experience and skills
- Projects and portfolio items
- Contact information

### Styling
- Modify `app/globals.css` for global styles
- Update `tailwind.config.ts` for Tailwind CSS customization
- Component-specific styles are handled with Tailwind utility classes

### Adding New Sections
1. Create a new component in `components/portfolio/`
2. Import and add it to `app/page.tsx`
3. Update navigation links in `components/portfolio/navigation.tsx`

## Deployment

The easiest way to deploy your portfolio is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This project is open source and available under the [MIT License](LICENSE).
