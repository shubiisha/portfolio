<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Shubiisha J | Full-Stack Developer Portfolio</title>
    <meta name="description" content="Portfolio of Shubiisha J — Software developer and full-stack engineer focused on frontend systems, APIs, and responsive product experiences." />
    <meta name="author" content="Shubiisha J" />
    <meta property="og:title" content="Shubiisha J | Full-Stack Developer" />
    <meta property="og:description" content="Frontend and full-stack developer portfolio showcasing projects, technical skills, and contact information." />
    <meta property="og:type" content="website" />
    <meta name="theme-color" content="#0f172a" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='16' fill='%230f172a'/%3E%3Cpath d='M18 46V18h10.2c6.9 0 11.5 3.6 11.5 9.3 0 5.7-4.6 9.3-11.5 9.3H25V46h-7zm9-14.5h2.4c3.2 0 5-1.6 5-4.4s-1.8-4.4-5-4.4H25v8.8h2z' fill='%23ffffff'/%3E%3C/svg%3E" />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header class="site-header" id="siteHeader">
      <div class="nav-container">
        <a href="#hero" class="brand-logo" aria-label="Shubiisha home">
          <img src="image1.jpg" alt="Shubiisha J profile" class="brand-logo-img" onerror="this.src='https://ui-avatars.com/api/?name=Shubiisha+J&background=0f172a&color=ffffff&bold=true'" />
          <span class="brand-logo-text">Shubiisha<span>.dev</span></span>
        </a>

        <nav aria-label="Main navigation">
          <ul class="nav-links" id="navLinks">
            <li><a href="#hero" class="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#github">GitHub</a></li>
            <li><a href="#contact" class="nav-btn">Contact</a></li>
          </ul>
        </nav>

        <button class="mobile-toggle" id="mobileToggle" aria-label="Toggle navigation menu" aria-expanded="false">☰</button>
      </div>
    </header>

    <main>
      <section class="hero-section" id="hero">
        <div class="hero-container">
          <div class="hero-content">
            <div class="hero-badge-container">
              <span class="hero-badge-dot"></span>
              <span>Open to software engineering and frontend opportunities</span>
            </div>

            <h1 class="hero-title">Shubiisha J</h1>
            <p class="hero-subtitle" id="typingText">Developer • Frontend & Full-Stack Engineer</p>

            <p class="hero-description">
              I build clean, responsive, and user-focused web applications with React, JavaScript, Node.js,
              Express, and MySQL. I enjoy turning product ideas into reliable interfaces and scalable full-stack experiences.
            </p>

            <div class="hero-social-links" aria-label="Social links">
              <a href="https://www.linkedin.com/in/shubiisha-j" target="_blank" rel="noopener noreferrer" class="social-pill">
                <svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-9.5 6.5h-2.6v8.1h2.6v-8.1Zm-1.3-2.4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm10.4 10.8h-2.6v-4.2c0-1-.4-1.7-1.3-1.7-.7 0-1.2.5-1.4 1.1-.1.2-.1.5-.1.8v3.9h-2.6v-8h2.5v1.1h.1c.4-.8 1.3-1.7 2.9-1.7 3 0 3.5 2 3.5 4.6v4.1Z"/></svg>
                <span>LinkedIn</span>
              </a>

              <a href="https://github.com/shubiisha" target="_blank" rel="noopener noreferrer" class="social-pill">
                <svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 6.8 9.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.5 1.1 3.1.8.1-.7.4-1.1.7-1.3-2.2-.2-4.5-1.1-4.5-5 0-1.1.4-2 1.1-2.7-.1-.3-.5-1.3.1-2.6 0 0 .9-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c1.9-1.3 2.8-1 2.8-1 .6 1.3.2 2.3.1 2.6.7.7 1.1 1.6 1.1 2.7 0 3.9-2.3 4.8-4.5 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 22 12 10 10 0 0 0 12 2Z"/></svg>
                <span>GitHub</span>
              </a>

              <a href="mailto:shubiishaj@gmail.com" class="social-pill">
                <svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm0 2-8 5-8-5h16Zm-16 8V8.5l8 5 8-5V16H4Z"/></svg>
                <span>shubiishaj@gmail.com</span>
              </a>
            </div>

            <div class="hero-cta-group">
              <a href="#projects" class="btn-primary">View My Projects <span aria-hidden="true">↓</span></a>
              <a href="resume.pdf" class="btn-secondary" download>Download Resume</a>
              <a href="#contact" class="btn-secondary">Contact Me</a>
            </div>
          </div>

          <div class="hero-card-wrapper">
            <div class="hero-profile-card">
              <div class="hero-avatar-container">
                <img src="image1.jpg" alt="Shubiisha J portrait" class="hero-avatar" onerror="this.src='https://ui-avatars.com/api/?name=Shubiisha+J&background=0f172a&color=ffffff&bold=true'" />
                <span class="hero-avatar-badge" aria-label="Available for work">✓</span>
              </div>

              <h2 class="hero-card-name">Shubiisha J</h2>
              <p class="hero-card-role">B.E. Computer Science & Engineering</p>

              <div class="hero-card-chips">
                <span class="tech-chip">React</span>
                <span class="tech-chip">JavaScript</span>
                <span class="tech-chip">Node.js</span>
                <span class="tech-chip">Express</span>
                <span class="tech-chip">MySQL</span>
                <span class="tech-chip">GitHub</span>
              </div>
            </div>
          </div>
        </div>

        <div class="hero-stats-bar" aria-label="Portfolio highlights">
          <div class="stat-item">
            <div class="stat-number">3+</div>
            <div class="stat-label">Featured projects</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">8+</div>
            <div class="stat-label">Core technologies</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">2026</div>
            <div class="stat-label">Expected graduate</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">100%</div>
            <div class="stat-label">Responsive builds</div>
          </div>
        </div>
      </section>

      <section class="section" id="about">
        <div class="section-container">
          <div class="section-header">
            <span class="section-label">About</span>
            <h2>Building practical products with a problem-solving mindset.</h2>
            <p>I am a Computer Science and Engineering student focused on frontend, software engineering, and full-stack web development.</p>
          </div>

          <div class="about-grid">
            <div class="about-card">
              <h3>Engineering-driven and detail-oriented</h3>
              <p>
                I am a Computer Science and Engineering student with a strong interest in frontend engineering,
                backend integration, and user experience. My work is centered on building responsive applications,
                structuring maintainable code, and creating features that solve real user problems.
              </p>
              <p>
                My portfolio highlights projects that combine product thinking with technical execution — including a task management app,
                an e-commerce application, and a blog platform built with React, Express, MySQL, and Firebase-based authentication.
              </p>

              <div class="about-highlights">
                <div class="highlight-box">
                  <h4>Frontend</h4>
                  <p>Responsive UI implementation, reusable components, and accessible interfaces.</p>
                </div>
                <div class="highlight-box">
                  <h4>Backend</h4>
                  <p>REST APIs, routing, server logic, and database-driven application flows.</p>
                </div>
                <div class="highlight-box">
                  <h4>Database</h4>
                  <p>MySQL schema design, queries, and relationship modeling for real app data.</p>
                </div>
                <div class="highlight-box">
                  <h4>Problem solving</h4>
                  <p>Breaking down requirements, debugging confidently, and shipping useful features.</p>
                </div>
              </div>
            </div>

            <div class="about-side-cards">
              <div class="info-badge-card">
                <div class="info-badge-icon">🎓</div>
                <div>
                  <h4>Education</h4>
                  <p>B.E. in Computer Science and Engineering (Expected graduation: 2026)</p>
                </div>
              </div>

              <div class="info-badge-card">
                <div class="info-badge-icon">💡</div>
                <div>
                  <h4>Development interests</h4>
                  <p>Frontend systems, API-driven products, UI architecture, and scalable user experiences.</p>
                </div>
              </div>

              <div class="info-badge-card">
                <div class="info-badge-icon">⚙️</div>
                <div>
                  <h4>Approach</h4>
                  <p>I focus on clean structure, maintainability, testing mindset, and product clarity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section skills-section" id="skills">
        <div class="section-container">
          <div class="section-header">
            <span class="section-label">Skills</span>
            <h2>Technical skills and core competencies</h2>
            <p>Organized around the languages, frameworks, tools, and computer science foundations I work with.</p>
          </div>

          <div class="skill-filters" aria-label="Skills categories">
            <button class="filter-btn active" data-filter="all" type="button">All</button>
            <button class="filter-btn" data-filter="programming" type="button">Programming</button>
            <button class="filter-btn" data-filter="frontend" type="button">Frontend</button>
            <button class="filter-btn" data-filter="backend" type="button">Backend & Database</button>
            <button class="filter-btn" data-filter="tools" type="button">Tools & CS</button>
          </div>

          <div class="skills-grid">
            <div class="skill-card-modern" data-category="programming"><div class="skill-icon-wrap">🐍</div><div class="skill-info"><div class="skill-name">Python</div><div class="skill-category-tag">Programming</div></div></div>
            <div class="skill-card-modern" data-category="programming"><div class="skill-icon-wrap">☕</div><div class="skill-info"><div class="skill-name">Java</div><div class="skill-category-tag">Programming</div></div></div>
            <div class="skill-card-modern" data-category="programming"><div class="skill-icon-wrap">🔤</div><div class="skill-info"><div class="skill-name">C</div><div class="skill-category-tag">Programming</div></div></div>
            <div class="skill-card-modern" data-category="programming"><div class="skill-icon-wrap">⚡</div><div class="skill-info"><div class="skill-name">C++</div><div class="skill-category-tag">Programming</div></div></div>

            <div class="skill-card-modern" data-category="frontend"><div class="skill-icon-wrap">🌐</div><div class="skill-info"><div class="skill-name">HTML</div><div class="skill-category-tag">Frontend</div></div></div>
            <div class="skill-card-modern" data-category="frontend"><div class="skill-icon-wrap">🎨</div><div class="skill-info"><div class="skill-name">CSS</div><div class="skill-category-tag">Frontend</div></div></div>
            <div class="skill-card-modern" data-category="frontend"><div class="skill-icon-wrap">💻</div><div class="skill-info"><div class="skill-name">JavaScript</div><div class="skill-category-tag">Frontend</div></div></div>
            <div class="skill-card-modern" data-category="frontend"><div class="skill-icon-wrap">⚛️</div><div class="skill-info"><div class="skill-name">React</div><div class="skill-category-tag">Frontend</div></div></div>

            <div class="skill-card-modern" data-category="backend"><div class="skill-icon-wrap">🟢</div><div class="skill-info"><div class="skill-name">Node.js</div><div class="skill-category-tag">Backend</div></div></div>
            <div class="skill-card-modern" data-category="backend"><div class="skill-icon-wrap">⚙️</div><div class="skill-info"><div class="skill-name">Express.js</div><div class="skill-category-tag">Backend</div></div></div>
            <div class="skill-card-modern" data-category="backend"><div class="skill-icon-wrap">🗄️</div><div class="skill-info"><div class="skill-name">MySQL</div><div class="skill-category-tag">Database</div></div></div>
            <div class="skill-card-modern" data-category="backend"><div class="skill-icon-wrap">📦</div><div class="skill-info"><div class="skill-name">MongoDB</div><div class="skill-category-tag">Database</div></div></div>

            <div class="skill-card-modern" data-category="tools"><div class="skill-icon-wrap">🐙</div><div class="skill-info"><div class="skill-name">Git</div><div class="skill-category-tag">Tools</div></div></div>
            <div class="skill-card-modern" data-category="tools"><div class="skill-icon-wrap">🧩</div><div class="skill-info"><div class="skill-name">GitHub</div><div class="skill-category-tag">Tools</div></div></div>
            <div class="skill-card-modern" data-category="tools"><div class="skill-icon-wrap">📝</div><div class="skill-info"><div class="skill-name">VS Code</div><div class="skill-category-tag">Tools</div></div></div>
            <div class="skill-card-modern" data-category="tools"><div class="skill-icon-wrap">🔗</div><div class="skill-info"><div class="skill-name">REST APIs</div><div class="skill-category-tag">Tools</div></div></div>
            <div class="skill-card-modern" data-category="tools"><div class="skill-icon-wrap">📚</div><div class="skill-info"><div class="skill-name">Data Structures and Algorithms</div><div class="skill-category-tag">Core CS</div></div></div>
            <div class="skill-card-modern" data-category="tools"><div class="skill-icon-wrap">🧠</div><div class="skill-info"><div class="skill-name">Object-Oriented Programming</div><div class="skill-category-tag">Core CS</div></div></div>
            <div class="skill-card-modern" data-category="tools"><div class="skill-icon-wrap">💾</div><div class="skill-info"><div class="skill-name">DBMS</div><div class="skill-category-tag">Core CS</div></div></div>
            <div class="skill-card-modern" data-category="tools"><div class="skill-icon-wrap">🖥️</div><div class="skill-info"><div class="skill-name">Operating Systems</div><div class="skill-category-tag">Core CS</div></div></div>
            <div class="skill-card-modern" data-category="tools"><div class="skill-icon-wrap">🌐</div><div class="skill-info"><div class="skill-name">Computer Networks</div><div class="skill-category-tag">Core CS</div></div></div>
          </div>
        </div>
      </section>

      <section class="section" id="projects">
        <div class="section-container">
          <div class="section-header">
            <span class="section-label">Projects</span>
            <h2>Selected work and product builds</h2>
            <p>Applications I built to explore real-world product requirements, UI decisions, and full-stack implementation.</p>
          </div>

          <div class="projects-showcase-grid">
            <article class="project-showcase-card">
              <div class="project-card-header-visual p1-bg">
                <div class="project-card-icon-big" aria-hidden="true">📝</div>
                <span class="project-card-badge">Live</span>
              </div>
              <div class="project-showcase-body">
                <div class="project-meta-type">Productivity App</div>
                <h3 class="project-card-title">Smart To-Do & Task Management App</h3>
                <p class="project-card-desc">A responsive productivity app with task tracking, authentication, cloud sync, and a clean workflow.</p>
                <div class="project-tech-tags">
                  <span class="tech-tag">React</span>
                  <span class="tech-tag">Firebase</span>
                  <span class="tech-tag">Firestore</span>
                  <span class="tech-tag">PWA</span>
                </div>
                <div class="project-card-actions-center">
                  <a href="https://shubiisha-todo.netlify.app" target="_blank" rel="noopener noreferrer" class="card-btn-demo">Live Demo ↗</a>
                  <a href="https://github.com/shubiisha/TO-DO-app" target="_blank" rel="noopener noreferrer" class="card-btn-details">GitHub ↗</a>
                </div>
                <a href="project1.html" class="project-card-link">More details →</a>
              </div>
            </article>

            <article class="project-showcase-card">
              <div class="project-card-header-visual p2-bg">
                <div class="project-card-icon-big" aria-hidden="true">🛍️</div>
                <span class="project-card-badge">Full stack</span>
              </div>
              <div class="project-showcase-body">
                <div class="project-meta-type">E-commerce</div>
                <h3 class="project-card-title">E-Commerce Web Application</h3>
                <p class="project-card-desc">A storefront with product browsing, cart flow, checkout logic, and backend-driven order handling.</p>
                <div class="project-tech-tags">
                  <span class="tech-tag">React</span>
                  <span class="tech-tag">Node.js</span>
                  <span class="tech-tag">Express</span>
                  <span class="tech-tag">MySQL</span>
                </div>
                <div class="project-card-actions-center">
                  <a href="https://github.com/shubiisha/E-commerce-app" target="_blank" rel="noopener noreferrer" class="card-btn-demo">GitHub Repo ↗</a>
                  <a href="project2.html" class="card-btn-details">Details</a>
                </div>
                <a href="project2.html" class="project-card-link">More details →</a>
              </div>
            </article>

            <article class="project-showcase-card">
              <div class="project-card-header-visual p3-bg">
                <div class="project-card-icon-big" aria-hidden="true">✍️</div>
                <span class="project-card-badge">CMS</span>
              </div>
              <div class="project-showcase-body">
                <div class="project-meta-type">Content platform</div>
                <h3 class="project-card-title">Blog Platform with Comments</h3>
                <p class="project-card-desc">A content-driven app for creating posts, managing content, and reader-driven interactions.</p>
                <div class="project-tech-tags">
                  <span class="tech-tag">React</span>
                  <span class="tech-tag">Express</span>
                  <span class="tech-tag">MySQL</span>
                  <span class="tech-tag">REST API</span>
                </div>
                <div class="project-card-actions-center">
                  <a href="https://github.com/shubiisha/Blog-Platform" target="_blank" rel="noopener noreferrer" class="card-btn-demo">GitHub Repo ↗</a>
                  <a href="project3.html" class="card-btn-details">Details</a>
                </div>
                <a href="project3.html" class="project-card-link">More details →</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="section github-section" id="github">
        <div class="section-container">
          <div class="section-header">
            <span class="section-label">GitHub</span>
            <h2>Code and project activity</h2>
            <p>Repository work that reflects my frontend, backend, and product-building efforts.</p>
          </div>

          <div class="github-grid">
            <div class="github-card">
              <div class="repo-header">
                <span class="repo-icon">📦</span>
                <a href="https://github.com/shubiisha/TO-DO-app" target="_blank" rel="noopener noreferrer">TO-DO-app</a>
              </div>
              <p>Task management application with Firebase auth, Firestore sync, and a responsive productivity workflow.</p>
              <div class="repo-meta">
                <span>JavaScript</span>
                <span>Frontend</span>
              </div>
            </div>

            <div class="github-card">
              <div class="repo-header">
                <span class="repo-icon">🛒</span>
                <a href="https://github.com/shubiisha/E-commerce-app" target="_blank" rel="noopener noreferrer">E-commerce-app</a>
              </div>
              <p>Full-stack shopping platform with cart flow, checkout logic, and admin-oriented product handling.</p>
              <div class="repo-meta">
                <span>JavaScript</span>
                <span>Full Stack</span>
              </div>
            </div>

            <div class="github-card">
              <div class="repo-header">
                <span class="repo-icon">✍️</span>
                <a href="https://github.com/shubiisha/Blog-Platform" target="_blank" rel="noopener noreferrer">Blog-Platform</a>
              </div>
              <p>Blogging app with authentication, content publishing, comments, and relational database storage.</p>
              <div class="repo-meta">
                <span>JavaScript</span>
                <span>Full Stack</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section contact-section" id="contact">
        <div class="section-container">
          <div class="section-header">
            <span class="section-label">Contact</span>
            <h2>Let’s build something useful.</h2>
            <p>Open to internships, software development opportunities, and meaningful product collaboration.</p>
          </div>

          <div class="contact-layout">
            <div class="contact-info-col">
              <h3>Connect directly</h3>
              <p>
                I’m currently exploring internship and entry-level software roles where I can contribute with frontend work,
                backend understanding, and a strong product mindset.
              </p>

              <div class="contact-channels">
                <a href="mailto:shubiishaj@gmail.com" class="contact-channel-card">
                  <div class="channel-icon" aria-hidden="true">✉️</div>
                  <div class="channel-details">
                    <h4>Email</h4>
                    <span>shubiishaj@gmail.com</span>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/shubiisha-j" target="_blank" rel="noopener noreferrer" class="contact-channel-card">
                  <div class="channel-icon" aria-hidden="true">💼</div>
                  <div class="channel-details">
                    <h4>LinkedIn</h4>
                    <span>linkedin.com/in/shubiisha-j</span>
                  </div>
                </a>

                <a href="https://github.com/shubiisha" target="_blank" rel="noopener noreferrer" class="contact-channel-card">
                  <div class="channel-icon" aria-hidden="true">🐙</div>
                  <div class="channel-details">
                    <h4>GitHub</h4>
                    <span>github.com/shubiisha</span>
                  </div>
                </a>
              </div>
            </div>

            <div class="contact-form-card">
              <form id="contactForm" novalidate>
                <div class="form-group">
                  <label for="name">Full Name</label>
                  <input id="name" type="text" name="name" placeholder="Your full name" />
                </div>

                <div class="form-group">
                  <label for="email">Email Address</label>
                  <input id="email" type="email" name="email" placeholder="you@example.com" />
                </div>

                <div class="form-group">
                  <label for="subject">Subject</label>
                  <input id="subject" type="text" name="subject" placeholder="Opportunity / Project / Internship" />
                </div>

                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Tell me a little about your opportunity or project."></textarea>
                </div>

                <button type="submit" class="btn-primary form-submit-btn">Send Message</button>
                <div id="formStatus" class="form-status-msg" aria-live="polite"></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-container">
        <div class="footer-brand">
          <div class="footer-logo">Shubiisha<span>.dev</span></div>
          <div class="footer-tagline">Frontend Developer • Full-Stack Developer • Problem Solver</div>
        </div>

        <ul class="footer-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div class="footer-bottom">
        <p>© 2026 Shubiisha J</p>
        <button id="backToTop" class="back-to-top-btn" type="button">Back to top ↑</button>
      </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
    <script src="script.js"></script>
  </body>
</html>
