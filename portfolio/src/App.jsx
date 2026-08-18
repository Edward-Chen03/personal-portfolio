import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  const projects = [
    {
      name: 'NBA Analytics Dashboard',
      description: [
        'Developed a full-stack NBA analytics platform for the 2024–25 season, providing advanced player statistics, interactive visualizations, custom metric analysis, and machine-learning-based performance predictions.'
      ],
      tech: ['React', 'Node.js', 'LightGBM', 'MongoDB'],
      repoUrl: 'https://github.com/Edward-Chen03/nba.tools',
      gradient: 'purple-blue',
      image: `${import.meta.env.BASE_URL}nbatoolslogo.png`
    },
    {
      name: 'Workflow Automation Platform',
      description: [
        'Created a scalable full-stack management platform featuring scheduling, resource allocation, automated workflows, secure user authentication, and real-time communication capabilities.'
      ],
      tech: ['JWT', 'Socket.IO', 'Cron', 'MongoDB'],
      repoUrl: 'https://github.com/Edward-Chen03/Mediflow',
      gradient: 'green-blue',
      image: `${import.meta.env.BASE_URL}mediflow.png`
    },
    {
      name: 'Weather Insights Monitor',
      description: [
        'Built a full-stack weather analytics platform that delivered real-time forecasts, historical weather comparisons, and interactive dashboards through REST API integration and efficient data caching.'
      ],
      tech: ['Flask', 'JavaScript', 'PostgreSQL', 'OpenMeteo'],
      repoUrl: 'https://github.com/Edward-Chen03/ForecastViewer',
      gradient: 'blue-blue',
      image: `${import.meta.env.BASE_URL}forecastviewerlogo.png`
    },

  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setActiveSection(sectionId)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'resume', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="portfolio-container">

      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo">
              Edward Chen
            </div>
            <div className="nav-tabs">
              {[
                { id: 'about', label: 'About' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'resume', label: 'Resume' },
                { id: 'contact', label: 'Contact' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`nav-tab ${activeSection === tab.id ? 'nav-tab-active' : ''}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="about" className="about-section">
        <div className="about-container">
          <div className="avatar">
            <img
              src={`${import.meta.env.BASE_URL}headshot.JPG`}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
            />
          </div>
          <h1 className="about-title">
            Edward Chen
          </h1>
          <p className="about-description">
            Hi!

            I'm a passion-driven developer who enjoys building scalable applications end-to-end and continuously improving development workflows.
          </p>
          <div className="about-links">
            <a href="https://www.linkedin.com/in/edwardchen03/" target="_blank" rel="noopener noreferrer" className="about-link">
              LinkedIn
            </a>
            <a href="https://github.com/Edward-Chen03" target="_blank" rel="noopener noreferrer" className="about-link">
              GitHub
            </a>
          </div>
          <button
            onClick={() => scrollToSection('experience')}
            className="about-button"
          >
            Explore My Work
          </button>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="section-container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-timeline">

             {/* <div className="timeline-item blue">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h2 className="job-title"> Associate Software Engineer</h2>
                <p className="job-company">Present</p>
                <p className="job-description">
                </p>
                <div className="job-tags"></div>
              </div>
            </div>  */}

             <div className="timeline-item blue">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h2 className="job-title">Software Engineer</h2>
                <p className="job-company">Cardboard Curators Inc • Dec 2025 - Present</p>
                <p className="job-description">
                  <ul>
                    <li>Developed and deployed automated scripts to track Pokémon card market values and maintain an up-to-date pricing database for a live web platform</li>
                  </ul>
                </p>
                <div className="job-tags">
                  <span className="tag blue">Backend Web Development</span>
                </div>
              </div>
            </div> 

            <div className="timeline-item blue">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="job-title">IT Operations Specialist</h3>
                <p className="job-company">Stony Brook Campus Residences • 2022 - 2024</p>
                <p className="job-description">
                  <ul>
                    <li>Provided technical support during events for 200+ students across campus facilities</li>
                    <li>Coordinated logistical arrangements and managed Brightspace, Echo360 and audiovisual system operations</li>
                    <li>Maintained reliable performance of classroom technology and computers for daily use and events</li>
                    <li>Monitored network performance and system health across campus facilities, ensuring 98% uptime for IT infrastructure</li>
                  </ul>
                </p>
                <div className="job-tags">
                  <span className="tag blue">Systems Management</span>
                  <span className="tag blue">User Support</span>
                  <span className="tag blue">Maintenance</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section id="projects" className="projects-section">
        <div className="section-container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link"
              >
                <div className="project-card">
                  <div
                    className={`project-image ${project.image ? '' : `gradient-${project.gradient}`}`}
                    style={project.image ? { backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
                  ></div>
                  <div className="project-content">
                    <h3 className="project-title">{project.name}</h3>
                    <p className="project-description">
                      {project.description.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </p>
                    <div className="project-tech">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="section-container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-category-title">Languages</h3>
              <ul className="skill-list">
                <li className="skill-item">Python</li>
                <li className="skill-item">JavaScript</li>
                <li className="skill-item">CSS/Tailwind</li>
                <li className="skill-item">HTML</li>
                <li className="skill-item">Java</li>
                <li className="skill-item">C</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Databases</h3>
              <ul className="skill-list">
                <li className="skill-item">MongoDB</li>
                <li className="skill-item">PostgreSQL</li>
                <li className="skill-item">DynamoDB</li>
                <li className="skill-item">Firebase</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Frameworks/Libraries</h3>
              <ul className="skill-list">
                <li className="skill-item">React</li>
                <li className="skill-item">Flask</li>
                <li className="skill-item">Node.js</li>
                <li className="skill-item">Express.js</li>
                <li className="skill-item">FastAPI</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="resume-section">
        <div className="section-container">
          <h2 className="section-title">Resume</h2>

          <div className="resume-container">
            <div className="resume-header">
              <p className="resume-intro">
                View and download my resume
              </p>

              <a
                href={`${import.meta.env.BASE_URL}EdwardChen_Resume_portfolio.pdf`}
                download="EdwardChen_Resume_portfolio.pdf"
                className="download-button"
              >
                Download PDF Resume
              </a>
            </div>

            <div className="pdf-viewer">
              <iframe
                src={`${import.meta.env.BASE_URL}EdwardChen_Resume_portfolio.pdf`}
                width="100%"
                height="800px"
                style={{ border: 'none' }}
                title="Edward Chen Resume"
              >
                <p>
                  Your browser does not support PDFs.
                  <a href={`${import.meta.env.BASE_URL}EdwardChen_Resume_portfolio.pdf`} download="EdwardChen_Resume_portfolio.pdf">Download the PDF</a>.
                </p>
              </iframe>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-container">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-content">
            <p className="contact-description">
              I am open to any learning and collaboration opportunities!
            </p>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-email">nyc.chen.edward@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <p className="footer-copyright">© 2026 Edward Chen</p>
        </div>
      </footer>
    </div>
  )
}

export default App