import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Projects.css'

const projects = [
  {
    title: 'Google Maps Business Lead Scraper',
    description: 'Production-grade automation system to extract business data from Google Maps at scale. Implemented parallel scraping with rate limiting, anti-detection strategies, and fault-tolerant architecture.',
    features: [
      'Parallel scraping with rate limiting',
      'Anti-bot detection strategies',
      'Fault-tolerant architecture with retries',
      'Full data pipeline (load → scrape → validate → export)'
    ],
    tech: ['Python', 'Playwright', 'asyncio', 'Docker', 'Pandas'],
    link: 'https://github.com/amjaid/Google-Maps-Business-Lead-Scraper',
    stats: { stars: 1, forks: 1 }
  },
  {
    title: 'Login-Protected Dashboard Scraper',
    description: 'Advanced Playwright automation for scraping data from login-protected dashboards with automated pagination support.',
    features: [
      'Authentication & session management',
      'Automated pagination handling',
      'Dynamic content extraction',
      'Cookie persistence'
    ],
    tech: ['Python', 'Playwright', 'asyncio', 'Automation'],
    link: 'https://github.com/amjaid/Login-Protected-Dashboard-Scraper-with-automated-pagination--Python---Playwright',
    stats: { stars: 0, forks: 0 }
  },
  {
    title: 'Career Counseling System',
    description: 'System to guide students based on interests and academic background. Features user authentication, form validation, and admin dashboard.',
    features: [
      'User authentication system',
      'Form validation and processing',
      'Admin dashboard',
      'Student guidance algorithms'
    ],
    tech: ['PHP', 'JavaScript', 'MySQL', 'HTML/CSS'],
    link: 'https://github.com/amjaid',
    stats: { stars: 0, forks: 0 }
  },
  {
    title: 'Lost & Found Management System',
    description: 'Campus-based system to report and track lost items. Implemented UML modeling and database management for item tracking.',
    features: [
      'Campus-based reporting system',
      'Item tracking and management',
      'UML modeling implementation',
      'Database design and management'
    ],
    tech: ['Java', 'SQL', 'UML', 'Database Design'],
    link: 'https://github.com/amjaid',
    stats: { stars: 0, forks: 0 }
  }
]

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          My <span className="highlight">Projects</span>
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card ${hoveredIndex === index ? 'hovered' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.2, color: '#00d4ff' }}
                    >
                      ⌘
                    </motion.a>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.ul
                      className="project-features"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>

                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>

                <div className="project-stats">
                  <span>⭐ {project.stats.stars}</span>
                  <span>🍴 {project.stats.forks}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects