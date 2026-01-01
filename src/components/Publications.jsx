import React from 'react';

const Publications = () => {
  const papers = [
    { 
      title: "High-dimensional Economic Data Analysis: A Review",
      authors: "Zhang S., Li L.",
      journal: "Journal of Economic Literature",
      year: "2024",
      link: "#"
    },
    { 
      title: "Forecasting GDP with Deep Learning Models",
      authors: "Wang W., Zhao L., Zhang S.",
      journal: "In Proceedings of ICML",
      year: "2023",
      link: "#"
    },
    { 
      title: "A New Method for Spatial Econometrics",
      authors: "Li S., Other A.",
      journal: "Econometrica",
      year: "2023",
      link: "#"
    },
  ];

  return (
    <section id="publications" className="section-padding" style={{ padding: '5rem 0' }}>
      <div className="container">
        <h2 className="text-center mb-4">论文成果</h2>
        <div className="publications-list" style={{ maxWidth: '900px', margin: '0 auto' }}>
          {papers.map((paper, index) => (
            <div key={index} className="paper-item" style={{ 
              background: 'white', 
              padding: '1.5rem', 
              marginBottom: '1rem', 
              borderRadius: '6px', 
              borderLeft: '4px solid var(--primary-color)',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                <a href={paper.link} style={{ color: 'var(--text-color)' }}>{paper.title}</a>
              </h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>
                <strong>{paper.authors}</strong> | <em>{paper.journal}</em>, {paper.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
