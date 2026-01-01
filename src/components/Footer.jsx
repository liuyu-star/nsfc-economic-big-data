import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--primary-color)', color: 'white', padding: '3rem 0', marginTop: 'auto' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p style={{ marginBottom: '1rem', opacity: '0.8' }}>
          &copy; {new Date().getFullYear()} Economic Big Data Analysis Project. All Rights Reserved.
        </p>
        <div style={{ fontSize: '0.9rem', opacity: '0.6' }}>
          <p>Supported by National Natural Science Foundation of China</p>
          <p>Address: No. XX, Road XX, District XX, City</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
