# Portfolio Website Specification (Enhanced Version)

## Project Overview
- **Name:** Abdullah Mohammad Jaid Portfolio
- **Type:** Full-stack portfolio website
- **Stack:** React 18 + Vite (frontend), Django 5 + DRF (backend)
- **Core Functionality:** Showcase skills, projects, and contact functionality with smooth animations

## UI/UX Specification

### Color Palette
- **Background Primary:** #0a0a0f (deep dark)
- **Background Secondary:** #12121a (card backgrounds)
- **Background Tertiary:** #1a1a24 (elevated elements)
- **Accent Primary:** #00d4ff (cyan)
- **Accent Secondary:** #7c3aed (purple)
- **Accent Gradient:** linear-gradient(135deg, #00d4ff, #7c3aed)
- **Text Primary:** #f0f0f5
- **Text Secondary:** #8888a0
- **Border Color:** #2a2a3a
- **Success:** #10b981
- **Error:** #ef4444

### Typography
- **Font Family:** 'Inter', -apple-system, BlinkMacSystemFont, sans-serif
- **Headings:** 
  - H1: 4rem (64px), font-weight: 800
  - H2: 2.5rem (40px), font-weight: 700
  - H3: 1.5rem (24px), font-weight: 600
- **Body:** 1rem (16px), line-height: 1.6
- **Small:** 0.875rem (14px)

### Animation Specifications (Framer Motion)

#### Page Load Animations
- **Hero Section:**
  - Staggered text reveal (0.1s delay between elements)
  - Name: fadeInUp, duration 0.8s
  - Title: fadeInUp, delay 0.2s, duration 0.8s
  - CTA Button: scaleIn, delay 0.4s
  
- **Sections:**
  - All sections: fadeInUp on scroll into view
  - Duration: 0.6s
  - Threshold: 0.2 (trigger when 20% visible)

#### Interactive Animations
- **Buttons:**
  - Scale: 1.05 on hover
  - Background color transition: 0.3s ease
  - Magnetic cursor effect (optional)

- **Cards (Projects/Skills):**
  - Scale: 1.02 on hover
  - Box shadow increase on hover
  - Y-translate: -5px on hover

- **Nav Links:**
  - Underline animation from left to right
  - Color transition to cyan

- **Scroll Animations:**
  - Parallax effect on hero background
  - Smooth scroll with easing

#### Special Effects
- **Background:**
  - Animated gradient mesh (subtle)
  - Floating particles (optional)
  
- **Typing Effect:**
  - Hero title typing animation
  - Cursor blink: 0.7s infinite

- **Loading Screen:**
  - Logo pulse animation
  - Minimum 1.5s display

### Layout Structure

#### Header/Navbar
- Fixed position with blur backdrop
- Logo on left (name in cyan)
- Navigation links center: Home, About, Skills, Projects, Contact
- Social icons on right
- Height: 70px
- Background on scroll: rgba(10, 10, 15, 0.9)

#### Hero Section
- Full viewport height (100vh)
- Centered content
- Profile avatar/icon with glow effect
- Name as main heading
- Animated subtitle with typing effect
- Two CTA buttons: "View Work", "Contact Me"

#### About Section
- Two-column layout (image + text)
- Skills summary
- Education details
- Social links
- Professional strengths list

#### Skills Section
- Category-based grid (2-3 columns)
- Animated skill tags
- Hover effects with scale
- Category icons (optional)

#### Projects Section
- Grid layout (responsive: 1/2/3 columns)
- Project cards with:
  - Title
  - Description
  - Tech stack tags
  - Links (GitHub, Live Demo)
  - Hover: reveal more info

#### Contact Section
- Two-column: Form + Info
- Form fields: Name, Email, Message
- Validation with error messages
- Submit button with loading state
- Social links sidebar

#### Footer
- Copyright text
- Social media links
- Quick navigation links
- Back to top button

### Responsive Breakpoints
- **Mobile:** < 640px (1 column)
- **Tablet:** 640px - 1024px (2 columns)
- **Desktop:** > 1024px (3 columns)

### Component States
- **Buttons:** default, hover, active, disabled, loading
- **Inputs:** default, focus, error, success
- **Cards:** default, hover
- **Links:** default, hover, active

### Accessibility
- Keyboard navigation support
- Focus indicators
- Reduced motion preference support
- Screen reader friendly
- ARIA labels where needed

## Functionality Specification

### Frontend Features
1. Smooth scrolling navigation
2. Scroll-triggered animations
3. Typing text effect
4. Form validation (client-side)
5. API integration with Django backend
6. Loading states
7. Error handling
8. Responsive design

### Backend API Endpoints
1. **GET /api/projects/** - List all projects
2. **GET /api/skills/** - List all skills
3. **POST /api/contact/** - Submit contact form
4. **GET /api/about/** - Get about info

### Data Models (Django)
1. **Project:** title, description, features, tech_stack, github_url, live_url, image, order
2. **Skill:** name, category, order
3. **Contact:** name, email, message, created_at, is_read
4. **About:** content, image, resume

## Acceptance Criteria
- [ ] Page loads in under 3 seconds
- [ ] All animations run at 60fps
- [ ] Fully responsive on all devices
- [ ] Contact form submits successfully
- [ ] All links work correctly
- [ ] No console errors
- [ ] Accessible via keyboard
- [ ] Smooth scroll works