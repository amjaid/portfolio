import { motion } from 'framer-motion'
import './About.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

function About() {
  const strengths = [
    { icon: '🔍', title: 'Problem Solver', desc: 'Strong analytical mindset for debugging complex automation flows' },
    { icon: '⚙️', title: 'Production-Oriented', desc: 'Builds systems that survive real-world failures, not just demos' },
    { icon: '🚀', title: 'Fast Learner', desc: 'Rapidly adapts to new tools and frameworks' },
    { icon: '👥', title: 'Team Player', desc: 'Comfortable working in collaborative environments' }
  ]

  const education = [
    { school: 'Universiti Teknologi Malaysia (UTM)', degree: 'B.Sc. Software Engineering', year: 'Expected 2027' },
    { school: 'New Govt. Degree College, Rajshahi', degree: 'Higher Secondary Certificate', year: '2021' },
    { school: 'Harimohan Govt. High School', degree: 'Secondary School Certificate', year: '2019' }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          About <span className="highlight">Me</span>
        </motion.h2>

        <motion.div 
          className="about-content"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.div className="about-image" variants={fadeInUp}>
            <div className="image-frame">
              <span className="image-icon">💻</span>
            </div>
            <div className="image-glow"></div>
          </motion.div>

          <motion.div className="about-text" variants={fadeInUp}>
            <h3>Automation & Web Scraping Specialist</h3>
            <p>
              Detail-oriented Software Engineering student at UTM with strong hands-on 
              experience in Python automation, large-scale web scraping, and asynchronous systems. 
              I build resilient data pipelines that handle unreliable sources, anti-bot mechanisms, 
              and production constraints.
            </p>

            <motion.div className="strengths" variants={staggerContainer}>
              <h4><span className="icon">✨</span> Professional Strengths</h4>
              <div className="strengths-grid">
                {strengths.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="strength-card"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.03, y: -5 }}
                  >
                    <span className="strength-icon">{item.icon}</span>
                    <div>
                      <h5>{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="education" variants={fadeInUp}>
              <h4><span className="icon">🎓</span> Education</h4>
              <div className="edu-list">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index} 
                    className="edu-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="edu-year">{edu.year}</div>
                    <div className="edu-details">
                      <h5>{edu.school}</h5>
                      <p>{edu.degree}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="social-links" variants={fadeInUp}>
              <a href="mailto:jaid@amjaid.com" className="social-link" whileHover={{ scale: 1.1 }}>
                <span>📧</span> Email
              </a>
              <a href="https://github.com/amjaid" target="_blank" rel="noopener noreferrer" className="social-link" whileHover={{ scale: 1.1 }}>
                <span>⌘</span> GitHub
              </a>
              <a href="https://linkedin.com/in/amjaid" target="_blank" rel="noopener noreferrer" className="social-link" whileHover={{ scale: 1.1 }}>
                <span>◈</span> LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About