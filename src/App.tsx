import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Examples } from './components/Examples';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { Create } from './components/Create';
import { Footer } from './components/Footer';

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Examples />
      <Pricing />
      <About />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
