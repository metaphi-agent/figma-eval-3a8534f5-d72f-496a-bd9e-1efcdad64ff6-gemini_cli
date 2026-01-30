import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Destinations from './components/Destinations';
import BookTrip from './components/BookTrip';
import Testimonials from './components/Testimonials';
import Logos from './components/Logos';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-hidden font-poppins text-secondary">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Destinations />
        <BookTrip />
        <Testimonials />
        <Logos />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
}

export default App;