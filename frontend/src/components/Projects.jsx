function Projects() {
  const projects = [
    {
      title: 'Automated Business Intelligence Scraper',
      description: 'Production-grade automation system to extract business data from Google Maps at scale. Implemented parallel scraping with rate limiting using semaphores and async locks. Designed anti-detection strategies including randomized delays, mouse movements, and proxy usage.',
      features: [
        'Parallel scraping with rate limiting',
        'Anti-bot detection strategies',
        'Fault-tolerant architecture with retries',
        'Full data pipeline (load → scrape → validate → export)'
      ],
      tech: ['Python', 'Playwright', 'asyncio', 'Docker', 'Pandas'],
      link: 'https://github.com/amjaid/Google-Maps-Business-Lead-Scraper'
    },
    {
      title: 'Login-Protected Dashboard Scraper',
      description: 'Advanced Playwright automation for scraping data from login-protected dashboards with automated pagination support. Handles session management, cookies, and dynamic content loading.',
      features: [
        'Authentication & session management',
        'Automated pagination handling',
        'Dynamic content extraction',
        'Cookie persistence'
      ],
      tech: ['Python', 'Playwright', 'asyncio', 'Automation'],
      link: 'https://github.com/amjaid/Login-Protected-Dashboard-Scraper-with-automated-pagination--Python---Playwright'
    },
    {
      title: 'Career Counseling System',
      description: 'System to guide students based on interests and academic background. Implemented user authentication, form validation, and admin dashboard for academic counseling purposes.',
      features: [
        'User authentication system',
        'Form validation and processing',
        'Admin dashboard',
        'Student guidance algorithms'
      ],
      tech: ['PHP', 'JavaScript', 'MySQL', 'HTML/CSS'],
      link: 'https://github.com/amjaid'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Technical Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul style={{marginLeft: '1.2rem', marginTop: '0.5rem', marginBottom: '0.8rem'}}>
                  {project.features.map((feature, i) => (
                    <li key={i} style={{fontSize: '0.9rem', marginBottom: '0.3rem'}}>{feature}</li>
                  ))}
                </ul>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects