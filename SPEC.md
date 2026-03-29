# Portfolio Website Specification

## Project Overview
- **Name**: Abdullah Mohammad Jaid Portfolio
- **Type**: Full-stack web application (React + Django)
- **Core Functionality**: Personal portfolio showcasing skills, projects, and contact functionality
- **Target Users**: Potential clients, employers, collaborators

## Tech Stack
- **Frontend**: React 18 + Vite
- **Backend**: Django 5 + Django REST Framework
- **Database**: SQLite (default for Django)
- **API**: RESTful JSON API

## Color Scheme
- Primary Background: `#0a0a0f` (deep dark)
- Secondary Background: `#12121a` (card backgrounds)
- Primary Accent: `#00d4ff` (cyan)
- Secondary Accent: `#7c3aed` (purple)
- Text Primary: `#f0f0f5`
- Text Secondary: `#8888a0`

## Sections

### 1. Hero Section
- Full viewport height
- Name: Abdullah Mohammad Jaid
- Tagline: UTM Software Engineering Student & Freelance Developer
- Animated gradient text
- CTA button to scroll to about

### 2. About Section
- Profile summary
- Education details (UTM, expected 2027)
- Bio text from profile
- Social links (GitHub, LinkedIn, Email)

### 3. Skills Section
- Programming: Python, JavaScript, Java, PHP, C++
- Backend: Django, Django REST Framework
- Frontend: React, Vite
- Automation: Playwright, asyncio, Scrapy, BeautifulSoup
- Tools: Docker, Git, Linux

### 4. Projects Section (3 projects)
1. **Automated Business Intelligence Scraper**
   - Google Maps data extraction at scale
   - Tech: Python, Playwright, asyncio, Docker, Pandas
   
2. **Career Counseling System**
   - Student guidance based on interests/academic background
   - Tech: PHP, JavaScript, MySQL
   
3. **Lost & Found Management System**
   - Campus-based item tracking
   - Tech: Java, SQL, UML

### 5. Contact Section
- Name, Email, Message form
- POST to `/api/contact/`
- Success/error feedback

## API Endpoints
- `POST /api/contact/` - Submit contact form
- `GET /api/projects/` - Get projects list
- `GET /api/skills/` - Get skills list

## Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px