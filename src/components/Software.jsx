import React from 'react';

const Software = () => {
  const tools = [
    {
      name: "EconDataMiner",
      desc: "A Python package for efficient data mining in economic datasets.",
      link: "https://github.com/example/econdataminer",
      lang: "Python"
    },
    {
      name: "MacroVis",
      desc: "Interactive visualization tool for macroeconomic indicators.",
      link: "https://github.com/example/macrovis",
      lang: "JavaScript"
    }
  ];

  return (
    <section id="software" className="section-padding" style={{ padding: '5rem 0' }}>
      <div className="container">
        <h2 className="text-center mb-4">软件包</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {tools.map((tool, index) => (
            <div key={index} style={{ 
              border: '1px solid var(--border-color)', 
              borderRadius: '8px', 
              padding: '2rem',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.08)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ color: 'var(--primary-color)' }}>{tool.name}</h3>
                <span style={{ fontSize: '0.8rem', border: '1px solid var(--text-light)', padding: '2px 8px', borderRadius: '4px' }}>{tool.lang}</span>
              </div>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', minHeight: '3rem' }}>{tool.desc}</p>
              <a href={tool.link} target="_blank" rel="noopener noreferrer" className="btn">Get Started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Software;
