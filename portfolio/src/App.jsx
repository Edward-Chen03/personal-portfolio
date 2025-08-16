import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  const projects = [
    {
      name: 'nba.tools',
      description: 'A comprehensive full stack analytics platform featuring player statistics up to the 2024-25 season, customizable data visualizations, and interactive comparison tools.',
      tech: ['React', 'Node.js', 'MongoDB'],
      repoUrl: 'https://github.com/Edward-Chen03/nba.tools',
      gradient: 'purple-blue',
      image: `${import.meta.env.BASE_URL}nbatoolslogo.png`
    },
    {
      name: 'Mediflow',
      description: 'A flexible web app built to sustain a medical environment. It facilitates the management of key processes such as medical procedures, inventory control, and workspace organization.',
      tech: ['React', 'Node.js', 'MongoDB'],
      repoUrl: 'https://github.com/Edward-Chen03/Mediflow',
      gradient: 'green-blue',
      image: `${import.meta.env.BASE_URL}mediflow.png`
    },
    {
      name: 'Forecast Viewer',
      description: 'A flask run web application to display the hourly and weekly forecast. Implements weatherAPI and utilizies geolocation capabilities.',
      tech: ['Javascript', 'Flask', 'PostgreSQL'],
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
      const sections = ['about', 'experience', 'projects', 'skills', 'resume']
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
                { id: 'resume', label: 'Resume' }
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
              src={`${import.meta.env.BASE_URL}EdwardChen_Headshot.JPG`}
              alt="Edward Chen"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
            />
          </div>
          <h1 className="about-title">
            Edward Chen
          </h1>
          <p className="about-description">
            Hello! I recently graduated from Stony Brook University with a double major in Computer Science and Applied Mathematics. Drawing upon my proficiency in Java, JavaScript and Python, I am eager to contribute and succeed.
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
            <div className="timeline-item blue">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="job-title">IT Operations Specialist</h3>
                <p className="job-company">Stony Brook Campus Residences • 2022 - 2024</p>
                <p className="job-description">
                  <ul>
                    <li>Orchestrated the planning and execution of events catering to 200+ students, collaborating with computer scienceoriented clubs, organizations, and coordinating efforts among fellow staff members.</li>
                    <li>Oversaw logistical arrangements, providing technical support for building systems such as Echo360 and
                      audiovisual equipment.
                    </li>
                    <li>Provided live mentorship and guidance leading to successful tech workshops and increased student engagement.</li>

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
                      {project.description}
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
                <li className="skill-item">React</li>
                <li className="skill-item">JavaScript</li>
                <li className="skill-item">CSS/Tailwind</li>
                <li className="skill-item">HTML</li>
                <li className="skill-item">Python</li>
                <li className="skill-item">Java</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Databases</h3>
              <ul className="skill-list">
                <li className="skill-item">DynamoDB</li>
                <li className="skill-item">PostgreSQL</li>
                <li className="skill-item">MongoDB</li>
                <li className="skill-item">Firebase</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Design Tools</h3>
              <ul className="skill-list">
                <li className="skill-item">Git/GitHub</li>
                <li className="skill-item">VIM</li>
                <li className="skill-item">VS Code</li>
                <li className="skill-item">Microsoft Office Suite</li>
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
                href={`${import.meta.env.BASE_URL}EdwardChen_Resume.pdf`} 
                download="Edward_Chen_Resume.pdf"
                className="download-button"
              >
                Download PDF Resume
              </a>
            </div>

            <div className="pdf-viewer">
              <iframe
                src={`${import.meta.env.BASE_URL}EdwardChen_Resume.pdf`}
                width="100%"
                height="800px"
                style={{ border: 'none' }}
                title="Edward Chen Resume"
              >
                <p>
                  Your browser does not support PDFs.
                  <a href={`${import.meta.env.BASE_URL}EdwardChen_Resume.pdf`}  download="Edward_Chen_Resume.pdf">Download the PDF</a>.
                </p>
              </iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <h3 className="footer-title">Contact Me</h3>
          <p className="footer-description">
            I am open to all Software Engineer and Data Science opportunities!
          </p>
          <div className="footer-contact">
            <span>nyc.chen.edward@gmail.com</span>
          </div>
          <p className="footer-copyright">© 2025 Edward Chen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App