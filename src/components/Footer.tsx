import React from 'react';

export default function Footer() {
  return (
    <footer className="pt-24 pb-8 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Col 1 */}
          <div className="lg:col-span-1 space-y-6">
             <h2 className="text-4xl font-bold text-primary font-volkhov">Jadoo.</h2>
             <p className="text-secondary font-medium leading-relaxed text-sm max-w-xs">
               Book your trip in minute, get full Control for much longer.
             </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-6">
             <h3 className="text-xl font-bold text-black mb-4 font-volkhov">Company</h3>
             <ul className="space-y-3 text-secondary font-medium">
               <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
               <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
               <li><a href="#" className="hover:text-primary transition-colors">Mobile</a></li>
             </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-6">
             <h3 className="text-xl font-bold text-black mb-4 font-volkhov">Contact</h3>
             <ul className="space-y-3 text-secondary font-medium">
               <li><a href="#" className="hover:text-primary transition-colors">Help/FAQ</a></li>
               <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
               <li><a href="#" className="hover:text-primary transition-colors">Affilates</a></li>
             </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-6">
             <h3 className="text-xl font-bold text-black mb-4 font-volkhov">More</h3>
             <ul className="space-y-3 text-secondary font-medium">
               <li><a href="#" className="hover:text-primary transition-colors">Airlinefees</a></li>
               <li><a href="#" className="hover:text-primary transition-colors">Airline</a></li>
               <li><a href="#" className="hover:text-primary transition-colors">Low fare tips</a></li>
             </ul>
          </div>

          {/* Col 5 */}
          <div className="space-y-6">
             <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gradient-to-r from-accent to-yellow hover:text-white transition-all text-black group">
                   <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </button>
                <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gradient-to-r from-accent to-yellow hover:text-white transition-all text-black group">
                   <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </button>
                <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gradient-to-r from-accent to-yellow hover:text-white transition-all text-black group">
                   <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                </button>
             </div>
             
             <h4 className="text-secondary font-medium text-lg">Discover our app</h4>
             <div className="flex gap-4">
               <button className="bg-black text-white px-5 py-2 rounded-full flex items-center gap-3 hover:bg-gray-800 transition-colors">
                  <div className="flex flex-col text-left">
                     <span className="text-[10px] uppercase font-bold text-gray-400">Get it on</span>
                     <span className="font-bold text-sm">Google Play</span>
                  </div>
               </button>
               <button className="bg-black text-white px-5 py-2 rounded-full flex items-center gap-3 hover:bg-gray-800 transition-colors">
                  <div className="flex flex-col text-left">
                     <span className="text-[10px] uppercase font-bold text-gray-400">Available on the</span>
                     <span className="font-bold text-sm">Apple Store</span>
                  </div>
               </button>
             </div>
          </div>
        </div>
        
        <div className="text-center text-secondary font-medium text-sm mt-16">
           All rights reserved@jadoo.co
        </div>

        {/* Footer Decore */}
        <img src="./assets/images/footer-decore.png" alt="" className="absolute right-0 bottom-0 -z-10 opacity-30 max-w-[300px]" />
      </div>
    </footer>
  );
}
