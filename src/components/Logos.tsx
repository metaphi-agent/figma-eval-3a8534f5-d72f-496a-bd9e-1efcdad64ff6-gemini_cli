import React from 'react';

const logos = [
  "./assets/images/logo-axon.png",
  "./assets/images/logo-jetstar.png",
  "./assets/images/logo-expedia.png",
  "./assets/images/logo-qantas.png",
  // Reuse some for demo as there were 5 slots
  "./assets/images/logo-axon.png" 
];

export default function Logos() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
         <div className="flex flex-wrap justify-center lg:justify-between items-center gap-12 grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100">
            {logos.map((logo, index) => (
               <div key={index} className="w-32 h-20 flex items-center justify-center bg-white rounded-xl hover:shadow-lg transition-all p-4 cursor-pointer">
                  <img src={logo} alt={`Client ${index}`} className="max-w-full max-h-full object-contain" />
               </div>
            ))}
         </div>
      </div>
    </section>
  );
}
