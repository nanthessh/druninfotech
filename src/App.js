import React from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Work from './components/Work';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

export default function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Loader />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Work />
      <Timeline />
      <Testimonials />
      <About />
      <Careers />
      <Contact />
      <Footer />
      <ChatBot />
    </div>
  );
}
