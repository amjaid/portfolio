import { motion } from 'framer-motion'
import './Skills.css'

const skillCategories = [
  {
    title: 'Programming & Scripting',
    icon: '⚡',
    skills: ['Python (asyncio, Playwright)', 'Java', 'PHP', 'JavaScript', 'C++', 'HTML/CSS', 'SQL']
  },
  {
    title: 'Automation & Web Scraping',
    icon: '🤖',
    skills: ['Playwright (advanced)', 'Parallel scraping with asyncio', 'Anti-bot strategies', 'Proxy rotation', 'Human-behavior simulation', 'Resilient retry systems']
  },
  {
    title: 'Backend & Systems',
    icon: '🔧',
    skills: ['Django', 'Django REST Framework', 'Docker-aware design', 'Linux optimization', 'Logging & monitoring', 'Error handling']
  },
  {
    title: 'Data Handling',
    icon: '📊',
    skills: ['Pandas (ETL pipelines)', 'CSV & Excel automation', 'Deduplication', 'Data integrity']
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    skills: ['Git', 'VS Code', 'phpMyAdmin', 'Figma', 'OpenAI API integration']
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: ['MySQL', 'PostgreSQL', 'SQLite', 'Database Design']
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          My <span className="highlight">Skills</span>
        </motion.h2>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="skill-category"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span 
                    key={skillIndex} 
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: 'rgba(0, 212, 255, 0.2)',
                      borderColor: '#00d4ff'
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="skills-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>Always learning new technologies to stay ahead 🚀</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills