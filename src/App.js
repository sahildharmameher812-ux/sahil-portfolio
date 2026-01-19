import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "AI Music Player",
      description: "An intelligent music player powered by AI with face recognition integration that understands your mood and preferences to create personalized playlists.",
      tech: ["React", "Python", "FastAPI", "AI/ML", "Face Recognition"],
      link: "https://ai-music-player-taupe.vercel.app/",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      icon: "🎵"
    },
    {
      title: "FRA - Forest Right Act",
      description: "A comprehensive web application for Forest Right Act management, helping streamline forest rights documentation and claims processing.",
      tech: ["React", "Flask", "Supabase", "Python"],
      link: "https://fra1.onrender.com/",
      gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
      icon: "🌳",
      hasDelay: true
    },
    {
      title: "Crop Recommendation System",
      description: "ML-powered agricultural solution that recommends optimal crops based on soil conditions and environmental factors.",
      tech: ["React", "FastAPI", "Supabase", "ML"],
      link: "https://cropai-frontend-vwmm.onrender.com",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: "🌾",
      hasDelay: true
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React.js", "JavaScript", "HTML5", "CSS3"], icon: "💻" },
    { category: "Backend", items: ["Python", "FastAPI", "Flask", "REST APIs"], icon: "⚙️" },
    { category: "Database", items: ["Supabase", "PostgreSQL", "MongoDB"], icon: "🗄️" },
    { category: "AI/ML", items: ["Machine Learning", "LLM Integration", "TensorFlow", "OpenCV"], icon: "🤖" }
  ];

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      {/* Cursor Glow Effect */}
      <div 
        className="cursor-glow"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200
        }}
      />

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }} />
        ))}
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">Sahil</span>
          <span className="logo-bracket">/&gt;</span>
        </div>
        <div className="nav-links">
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <button
              key={item}
              className={`nav-link ${activeSection === item ? 'active' : ''}`}
              onClick={() => scrollToSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="nav-indicator" />
            </button>
          ))}
        </div>
        <a href="https://github.com/sahildharmameher812-ux" target="_blank" rel="noopener noreferrer" className="github-btn">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span>GitHub</span>
        </a>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for Opportunities
          </div>
          <h1 className="hero-title">
            <span className="title-line">Hi, I'm</span>
            <span className="title-name">Sahil Dharmameher</span>
            <span className="title-role">AI/ML Engineer</span>
          </h1>
          <p className="hero-description">
            3rd Year B.Tech Student specializing in Artificial Intelligence & Machine Learning.
            Building intelligent solutions that bridge the gap between innovation and real-world applications.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">8.38</span>
              <span className="stat-label">CGPA</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">3rd</span>
              <span className="stat-label">Year</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollToSection('projects')}>
              <span>View Projects</span>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
              <span>Get In Touch</span>
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-container">
            <div className="visual-ring ring-1" />
            <div className="visual-ring ring-2" />
            <div className="visual-ring ring-3" />
            <div className="visual-core">
              <span className="core-icon">🚀</span>
            </div>
            <div className="floating-icons">
              <span className="float-icon" style={{ '--delay': '0s', '--x': '-80px', '--y': '-60px' }}>⚛️</span>
              <span className="float-icon" style={{ '--delay': '0.5s', '--x': '90px', '--y': '-40px' }}>🐍</span>
              <span className="float-icon" style={{ '--delay': '1s', '--x': '-70px', '--y': '70px' }}>🤖</span>
              <span className="float-icon" style={{ '--delay': '1.5s', '--x': '80px', '--y': '60px' }}>📊</span>
            </div>
          </div>
        </div>
        <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
          <span className="scroll-text">Scroll Down</span>
          <div className="scroll-arrow">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">// About Me</span>
            <h2 className="section-title">Passionate About AI & Innovation</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a dedicated <strong>AI/ML Engineering</strong> student currently in my 3rd year of B.Tech, 
                with a strong foundation in building end-to-end machine learning solutions and web applications.
              </p>
              <p>
                My expertise lies in creating intelligent systems that solve real-world problems. From 
                <strong> AI-powered music players with face recognition</strong> to <strong>Forest Right Act management systems</strong> and 
                <strong> smart agricultural solutions</strong>, I love working on projects that make a difference.
              </p>
              <p>
                I specialize in integrating <strong>LLMs</strong> and <strong>ML models</strong> with modern 
                web technologies to create seamless, user-friendly applications.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">🎓</span>
                  <span>B.Tech in AI/ML Engineering</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">📈</span>
                  <span>CGPA: 8.38</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">💡</span>
                  <span>Full-Stack + AI Developer</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-frame">
                <div className="frame-corner top-left" />
                <div className="frame-corner top-right" />
                <div className="frame-corner bottom-left" />
                <div className="frame-corner bottom-right" />
                <div className="image-placeholder">
                  <span className="placeholder-icon">👨‍💻</span>
                  <span className="placeholder-text">Sahil Dharmameher</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">// Tech Stack</span>
            <h2 className="section-title">Skills & Technologies</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card" style={{ '--delay': `${index * 0.1}s` }}>
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <h3 className="skill-category">{skill.category}</h3>
                </div>
                <div className="skill-items">
                  {skill.items.map((item, i) => (
                    <span key={i} className="skill-tag">{item}</span>
                  ))}
                </div>
                <div className="skill-glow" />
              </div>
            ))}
          </div>
          <div className="tech-marquee">
            <div className="marquee-content">
              {['React', 'Python', 'FastAPI', 'Flask', 'Supabase', 'TensorFlow', 'OpenCV', 'LangChain', 'PostgreSQL', 'JavaScript', 'CSS3', 'Git'].map((tech, i) => (
                <span key={i} className="marquee-item">{tech}</span>
              ))}
              {['React', 'Python', 'FastAPI', 'Flask', 'Supabase', 'TensorFlow', 'OpenCV', 'LangChain', 'PostgreSQL', 'JavaScript', 'CSS3', 'Git'].map((tech, i) => (
                <span key={`repeat-${i}`} className="marquee-item">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">// My Work</span>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card" style={{ '--delay': `${index * 0.15}s` }}>
                <div className="project-image" style={{ background: project.gradient }}>
                  <span className="project-icon">{project.icon}</span>
                  <div className="project-overlay">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  {project.hasDelay && (
                    <div className="project-notice">
                      <span className="notice-icon">⏱️</span>
                      <span>Free tier hosting - Initial load may take ~30 seconds</span>
                    </div>
                  )}
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-btn">
                    <span>View Project</span>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <span className="section-tag">// Get In Touch</span>
              <h2 className="contact-title">Let's Build Something Amazing Together</h2>
              <p className="contact-description">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Feel free to reach out!
              </p>
              <div className="contact-links">
                <a href="mailto:sahildharmameher812@gmail.com" className="contact-link">
                  <div className="link-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <path d="M22 6l-10 7L2 6"/>
                    </svg>
                  </div>
                  <div className="link-content">
                    <span className="link-label">Email</span>
                    <span className="link-value">sahildharmameher812@gmail.com</span>
                  </div>
                </a>
                <a href="https://linkedin.com/in/sahildharmameher" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <div className="link-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div className="link-content">
                    <span className="link-label">LinkedIn</span>
                    <span className="link-value">Connect with me</span>
                  </div>
                </a>
                <a href="https://github.com/sahildharmameher812-ux" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <div className="link-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="link-content">
                    <span className="link-label">GitHub</span>
                    <span className="link-value">Check my repos</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                window.location.href = `mailto:sahildharmameher812@gmail.com?subject=Portfolio Contact from ${name}&body=${message}%0D%0A%0D%0AFrom: ${email}`;
              }}>
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" required />
                  <span className="form-highlight" />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Your Email" required />
                  <span className="form-highlight" />
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="Your Message" rows="4" required />
                  <span className="form-highlight" />
                </div>
                <button type="submit" className="submit-btn">
                  <span>Send Message</span>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            Designed & Built with <span className="heart">❤️</span> by <strong>Sahil Dharmameher</strong>
          </p>
          <p className="footer-copyright">© 2024 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
