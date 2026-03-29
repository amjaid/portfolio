function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="container hero-content">
        <h1>Abdullah Mohammad Jaid</h1>
        <h2>Automation & Web Scraping Specialist</h2>
        <p className="hero-tagline">
          Building resilient data pipelines that handle unreliable sources, 
          anti-bot mechanisms, and production constraints.
        </p>
        <a href="#about" className="cta-button" onClick={scrollToAbout}>
          Learn More
        </a>
      </div>
    </section>
  )
}

export default Hero