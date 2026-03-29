function Skills() {
  const skillCategories = [
    {
      title: 'Programming & Scripting',
      skills: ['Python (asyncio, Playwright)', 'Java', 'PHP', 'JavaScript', 'C++', 'HTML/CSS', 'SQL']
    },
    {
      title: 'Automation & Web Scraping',
      skills: ['Playwright (advanced)', 'Parallel scraping with asyncio', 'Anti-bot strategies', 'Proxy rotation', 'Human-behavior simulation', 'Resilient retry systems']
    },
    {
      title: 'Backend & Systems',
      skills: ['Django', 'Django REST Framework', 'Docker-aware design', 'Linux optimization', 'Logging & monitoring', 'Error handling & fault tolerance']
    },
    {
      title: 'Data Handling',
      skills: ['Pandas (ETL pipelines)', 'CSV & Excel automation', 'Deduplication', 'Data integrity']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'VS Code', 'phpMyAdmin', 'Figma', 'OpenAI API integration']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'SQLite', 'Database Design']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Core Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills