import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-logo">MyPortfolio</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>I'm a web developer passionate about building amazing websites</p>
          <a href="#projects" className="cta-button">View My Work</a>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          Hi! I'm a developer who loves creating clean, modern websites.
          I specialize in React, JavaScript, and front-end development.
        </p>
      </section>

      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Project One</h3>
            <p>A web application built with React</p>
          </div>
          <div className="project-card">
            <h3>Project Two</h3>
            <p>An interactive dashboard</p>
          </div>
          <div className="project-card">
            <h3>Project Three</h3>
            <p>A responsive landing page</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Get In Touch</h2>
        <p>Email: hello@example.com</p>
        <div className="social-links">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 MyPortfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
