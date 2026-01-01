import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Members from './components/Members';
import Publications from './components/Publications';
import Grants from './components/Grants';
import Software from './components/Software';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <main>
        <About />
        <Members />
        <Publications />
        <Grants />
        <Software />
      </main>
      <Footer />
    </div>
  );
}

export default App;
