import React from 'react';
import { getLinkedText } from '../utils/memberMap.jsx';

const Software = () => {
  const tools = [
    {
      name: "ODRF",
      desc: "Oblique Decision Random Forest for Classification and Regression.",
      links: [
        { label: "CRAN", url: "https://cran.r-project.org/web/packages/ODRF/index.html" },
        { label: "Homepage", url: "https://liuyu-star.github.io/ODRF/" },
        { label: "GitHub", url: "https://github.com/liuyu-star/ODRF" }
      ],
      lang: "R",
      authors: "Yu Liu, Yingcun Xia"
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
              cursor: 'pointer',
              background: 'white',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.08)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
            }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ color: 'var(--primary-color)', margin: 0 }}>{tool.name}</h3>
                <span style={{ fontSize: '0.8rem', border: '1px solid var(--text-light)', padding: '2px 8px', borderRadius: '4px', color: 'var(--text-light)' }}>{tool.lang}</span>
              </div>
              <p style={{ color: 'var(--text-light)', marginBottom: '1rem', minHeight: '3rem' }}>{tool.desc}</p>
              
              {tool.authors && (
                 <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                   <strong>Authors:</strong> {getLinkedText(tool.authors)}
                 </p>
              )}
              
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {tool.links && tool.links.map((link, i) => (
                   <a 
                     key={i}
                     href={link.url} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="btn"
                     style={{ 
                       fontSize: '0.9rem', 
                       padding: '0.5rem 1rem',
                       backgroundColor: i === 0 ? 'var(--primary-color)' : 'transparent',
                       color: i === 0 ? 'white' : 'var(--primary-color)',
                       border: '1px solid var(--primary-color)'
                     }}
                   >
                     {link.label}
                   </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Software;
