# Angelo's Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS. This portfolio showcases my skills, projects, and professional experience in an elegant and user-friendly interface.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: 
  - Mobile-friendly navigation with hamburger menu
  - Contact form with validation
  - Scroll-to-top button
  - Smooth scrolling navigation
- **Dark Mode Support**: Automatic dark mode detection and styling
- **Performance Optimized**: Built with Next.js for optimal performance
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🚀 Technologies Used

- **Next.js 15** - React framework for production
- **Tailwind CSS 4** - Utility-first CSS framework
- **React 19** - JavaScript library for building user interfaces
- **CSS Animations** - Custom keyframe animations for smooth transitions

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and CSS variables
│   │   ├── layout.js            # Root layout component
│   │   └── page.js              # Main portfolio page
│   └── components/
│       ├── MobileNav.js         # Mobile navigation component
│       ├── ContactForm.js       # Contact form with validation
│       └── ScrollToTop.js       # Scroll to top button
├── public/                      # Static assets
└── package.json                 # Dependencies and scripts
```

## 🎨 Sections

1. **Hero Section** - Introduction with call-to-action buttons
2. **Case Studies** - Featured projects and case studies
3. **Clients** - Logos of companies you've worked with
4. **Testimonials** - Client testimonials
5. **About Section** - Personal information and experience highlights
6. **Skills Section** - Technical skills with progress indicators
7. **Projects Section** - Featured projects with technology tags
8. **Contact Section** - Contact information and contact form
9. **Footer** - Copyright and additional links

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-portfolio
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

### Building for Production

```bash
npm run build
npm start
```

## 🎯 Customization

### Personal Information
Update the following in `src/app/page.js`:
- Name and title in the hero section
- About section content
- Contact information
- Project details, testimonials, and client names

### Styling
- Modify CSS variables in `src/app/globals.css` for color schemes
- Update Tailwind classes for layout changes
- Customize animations in the CSS file

### Adding Projects
Edit the projects array in the Case Studies section to add your own projects.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌙 Dark Mode

The portfolio automatically detects and adapts to the user's system preference for dark/light mode.

## 📧 Contact Form

The contact form includes:
- Form validation
- Success/error messages
- Loading states
- Responsive design

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ by Angelo using Next.js and Tailwind CSS
