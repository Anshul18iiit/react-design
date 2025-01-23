// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <nav className="navbar">
          <a href="#" className="nav-logo">HOME</a>
          <a href="#about" className="nav-item">ABOUT</a>
          <a href="#resources" className="nav-item">RESOURCES</a>
          <a href="#join" className="nav-item nav-cta">JOIN US</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Text Box</h1>
          <h2>text box</h2>
          <button className="hero-btn">JOIN US</button>
        </div>
        <div className="hero-image">
          {/* Placeholder for image */}
          <div className="image-placeholder"></div>
        </div>
        <p className="hero-description">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>ABOUT US</h2>
        <p>Lorem Ipsum Is Simply Dummy Text</p>
        <p>
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry’s standard dummy text ever since the 1500s.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>SERVICES</h2>
        <div className="service-cards">
          {[...Array(4)].map((_, i) => (
            <div className="service-card" key={i}>
              <h3>Intelligent Responses</h3>
              <p>Using Machine Learning & AI</p>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 Your Company</p>
      </footer>
    </div>
  );
}

export default App;