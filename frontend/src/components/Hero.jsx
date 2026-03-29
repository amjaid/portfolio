import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const titles = [
  'Automation Engineer',
  'Web Scraping Specialist', 
  'Python Developer',
  'Freelance Developer'
]

function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTitleIndex])

  const scrollToSection = (id) => {
    const element = document.getElementById(id.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-avatar" variants={itemVariants}>
            <div className="avatar-ring"></div>
            <span className="avatar-icon">⚡</span>
          </motion.div>

          <motion.h1 className="hero-name" variants={itemVariants}>
            Abdullah Mohammad <span className="highlight">Jaid</span>
          </motion.h1>

          <motion.p className="hero-title" variants={itemVariants}>
            <span className="typing-text">{displayText}</span>
            <span className="cursor">|</span>
          </motion.p>

          <motion.p className="hero-description" variants={itemVariants}>
            Building resilient automation systems and data pipelines that handle 
            real-world challenges. UTM Software Engineering Student (2027).
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.button 
              className="btn btn-primary"
              onClick={() => scrollToSection('#projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div 
          className="scroll-mouse"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="scroll-wheel"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero