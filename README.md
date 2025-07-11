# Johel Venegas - Portfolio Website

A professional portfolio website for Johel Venegas, a Backend Developer & DevOps Engineer from Costa Rica. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark mode support
- **Responsive**: Mobile-first responsive design that works on all devices
- **Performance**: Optimized for fast loading and smooth animations
- **SEO Optimized**: Proper meta tags and structured data
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Interactive**: Smooth scrolling, hover effects, and animated components

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page component
│   │   ├── layout.tsx        # Root layout with metadata
│   │   └── globals.css       # Global styles and Tailwind
│   ├── components/
│   │   ├── Navigation.tsx    # Navigation with dark mode
│   │   ├── Hero.tsx          # Hero section with animations
│   │   ├── About.tsx         # About section
│   │   ├── Skills.tsx        # Skills with progress bars
│   │   ├── Projects.tsx      # Project showcase
│   │   ├── Experience.tsx    # Work experience timeline
│   │   └── Contact.tsx       # Contact form and info
│   ├── lib/
│   │   └── utils.ts          # Utility functions
│   └── types/
│       └── index.ts          # TypeScript interfaces
├── public/
│   ├── images/               # Image assets
│   └── icons/               # Icon assets
└── tailwind.config.js       # Tailwind configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
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

## 📝 Customization

### Personal Information

Update the following files with your information:

- `src/components/Hero.tsx` - Name, title, and social links
- `src/components/About.tsx` - Professional background and strengths
- `src/components/Skills.tsx` - Skills and expertise levels
- `src/components/Projects.tsx` - Project details and links
- `src/components/Experience.tsx` - Work experience and education
- `src/components/Contact.tsx` - Contact information and form

### Styling

- Colors: Update the color palette in `tailwind.config.js`
- Fonts: Modify font families in the Tailwind config
- Animations: Customize animations in the config file

### Content

- **Hero Section**: Update name, title, and call-to-action buttons
- **About Section**: Modify professional summary and key strengths
- **Skills Section**: Add/remove skills and adjust proficiency levels
- **Projects Section**: Update project details, tech stacks, and links
- **Experience Section**: Modify work history and education
- **Contact Section**: Update contact information and form handling

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue (#0ea5e9) for accents and CTAs
- **Navy**: Dark blue tones for professional look
- **Gray**: Neutral grays for text and backgrounds
- **Dark Mode**: Full dark mode support with custom colors

### Typography
- **Sans**: Geist Sans for body text
- **Mono**: Geist Mono for code snippets
- **Responsive**: Scalable font sizes for all devices

### Animations
- **Framer Motion**: Smooth page transitions and component animations
- **Custom Keyframes**: Blob animations and floating effects
- **Scroll Animations**: Elements animate on scroll into view

## �� Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

### Code Quality

- **TypeScript**: Full type safety
- **ESLint**: Code linting and formatting
- **Prettier**: Consistent code formatting

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Optimized with tree shaking
- **Images**: Optimized and lazy loaded

## 🔒 Security

- **Content Security Policy**: Configured for security
- **HTTPS**: Enforced in production
- **Form Validation**: Client and server-side validation
- **XSS Protection**: Sanitized inputs

## 📈 SEO

- **Meta Tags**: Comprehensive meta information
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Auto-generated sitemap
- **Robots.txt**: Proper crawling instructions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

- **Email**: johelvf506@gmail.com
- **Phone**: +506 7022 6553
- **Location**: Costa Rica (UTC-6)

---

Built with ❤️ by Johel Venegas
