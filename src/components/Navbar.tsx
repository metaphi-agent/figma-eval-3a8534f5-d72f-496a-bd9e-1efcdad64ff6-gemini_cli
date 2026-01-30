import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 pt-8">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-3xl font-bold font-volkhov text-primary">Jadoo</div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12 font-medium text-primary text-sm font-sans">
          <a href="#" className="hover:text-accent transition-colors">Destinations</a>
          <a href="#" className="hover:text-accent transition-colors">Hotels</a>
          <a href="#" className="hover:text-accent transition-colors">Flights</a>
          <a href="#" className="hover:text-accent transition-colors">Bookings</a>
          <a href="#" className="hover:text-accent transition-colors">Login</a>
          <button className="border border-primary rounded-md px-5 py-2 hover:bg-primary hover:text-white transition-colors">
            Sign up
          </button>
          <div className="flex items-center gap-2 cursor-pointer">
             <span>EN</span>
             <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>

         {/* Mobile Menu */}
         {isOpen && (
             <div className="absolute top-24 left-4 right-4 bg-white shadow-xl rounded-xl p-6 flex flex-col gap-4 md:hidden z-50 border border-gray-100">
                <a href="#" className="hover:text-accent">Destinations</a>
                <a href="#" className="hover:text-accent">Hotels</a>
                <a href="#" className="hover:text-accent">Flights</a>
                <a href="#" className="hover:text-accent">Bookings</a>
                <a href="#" className="hover:text-accent">Login</a>
                <button className="border border-primary rounded-md px-5 py-2 w-full text-center">Sign up</button>
             </div>
         )}
      </div>
    </nav>
  );
}
