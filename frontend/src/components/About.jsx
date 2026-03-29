function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <span>👨‍💻</span>
          </div>
          <div className="about-text">
            <h3>Automation & Web Scraping Specialist</h3>
            <p>
              Detail-oriented Software Engineering student with strong hands-on experience 
              in Python automation, large-scale web scraping, and asynchronous systems. 
              Skilled at building resilient data pipelines that handle unreliable sources, 
              anti-bot mechanisms, and production constraints such as Docker and proxy environments. 
              Known for solving real-world problems through practical engineering rather than 
              theory-only solutions.
            </p>
            
            <h4 style={{marginTop: '1.5rem', color: '#00d4ff'}}>Professional Strengths</h4>
            <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
              <li><strong>Problem Solver:</strong> Strong analytical mindset for debugging complex automation flows</li>
              <li><strong>Production-Oriented:</strong> Builds systems that survive real-world failures, not just demos</li>
              <li><strong>Fast Learner:</strong> Rapidly adapts to new tools and frameworks</li>
              <li><strong>Team Player:</strong> Comfortable working in collaborative development environments</li>
            </ul>

            <h4 style={{marginTop: '1.5rem', color: '#00d4ff'}}>Education</h4>
            <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
              <li><strong>Universiti Teknologi Malaysia (UTM)</strong> — Bachelor of Science in Software Engineering (Expected 2027)</li>
              <li><strong>New Govt. Degree College, Rajshahi</strong> — Higher Secondary Certificate (2021)</li>
              <li><strong>Harimohan Govt. High School, Chapainawabganj</strong> — Secondary School Certificate (2019)</li>
            </ul>

            <div className="social-links" style={{marginTop: '1.5rem'}}>
              <a href="mailto:jaid@amjaid.com">Email</a>
              <a href="https://github.com/amjaid" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/amjaid" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://amjaid.com" target="_blank" rel="noopener noreferrer">Portfolio</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About