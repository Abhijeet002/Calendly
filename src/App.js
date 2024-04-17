import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collab from './components/Collabs';
import Explore from './components/Explore';
import For from './components/For';
import Services from './components/Services';
import WeOffer from './components/WeOffer';
import Contact from './components/Contact';
import Features from './components/Features';
import Footer from './components/Footer';
// import './App.css';

function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Collab />
      <Features />
      <For />
      <Services />
      <WeOffer />
      <Explore />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
