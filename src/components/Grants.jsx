import React from 'react';

const Grants = () => {
  const grants = [
    {
      title: "Novel Algorithms for High-Frequency Trading Data",
      type: "重点项目",
      id: "72100000",
      duration: "2024-2027"
    },
    {
      title: "Big Data Governance in Digital Economy",
      type: "面上项目",
      id: "72200000",
      duration: "2023-2026"
    }
  ];

  return (
    <section id="grants" className="section-padding" style={{ background: 'var(--section-bg-odd)', padding: '5rem 0' }}>
      <div className="container">
        <h2 className="text-center mb-4">新增基金</h2>
        <div className="grants-list" style={{ maxWidth: '900px', margin: '0 auto' }}>
           {grants.map((grant, index) => (
             <div key={index} style={{ 
               display: 'flex', 
               justifyContent: 'space-between',
               alignItems: 'center',
               background: 'white',
               padding: '1.5rem',
               marginBottom: '1rem',
               borderRadius: '6px',
               boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
             }}>
               <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem', color: 'var(--primary-color)' }}>{grant.title}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Project ID: {grant.id} | {grant.duration}</p>
               </div>
               <span style={{ 
                 background: 'var(--secondary-color)', 
                 color: 'white', 
                 padding: '0.3rem 0.8rem', 
                 borderRadius: '20px', 
                 fontSize: '0.85rem',
                 fontWeight: '600'
               }}>
                 {grant.type}
               </span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Grants;
