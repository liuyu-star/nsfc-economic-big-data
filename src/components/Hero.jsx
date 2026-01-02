import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-content text-center fade-in">
        <h2 className="project-subtitle">国家自然科学基金重点项目</h2>
        <h1 className="project-title">经济大数据分析的理论、方法及应用研究</h1>
        <p className="project-id">Approval Number: 72000000 (Example)</p>
        <div className="hero-buttons">
          <button className="btn" onClick={() => document.getElementById('project-intro').scrollIntoView({ behavior: 'smooth' })}>
            了解更多
          </button>
          <a href="https://github.com/liuyu-star/nsfc-economic-big-data" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
