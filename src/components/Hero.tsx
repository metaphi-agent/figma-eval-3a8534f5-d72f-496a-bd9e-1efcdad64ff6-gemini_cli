import React from 'react';

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Decore Background */}
      <img src="./assets/images/hero-decore.png" alt="" className="absolute top-0 right-0 -z-10 w-[55%] max-w-[800px]" />
      <div className="absolute top-24 left-0 -z-10 w-[400px] h-[400px] bg-accent/20 blur-[120px] rounded-full -translate-x-1/2"></div>


      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 max-w-lg z-10">
          <h3 className="text-accent font-bold text-xl uppercase tracking-wider">Best Destinations around the world</h3>
          <h1 className="text-5xl md:text-[84px] leading-[1.1] font-bold text-primary tracking-tight">
            Travel, enjoy and live a new and full life
          </h1>
          <p className="text-secondary font-medium leading-loose text-base md:text-lg max-w-md">
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
          </p>
          
          <div className="flex items-center gap-8 pt-2">
            <button className="bg-yellow text-white px-7 py-4 rounded-xl shadow-[0_20px_35px_rgba(241,165,1,0.15)] hover:shadow-[0_20px_35px_rgba(241,165,1,0.3)] transition-transform hover:-translate-y-1 font-medium text-lg">
              Find out more
            </button>
            <button className="flex items-center gap-4 text-secondary hover:text-primary transition-colors group">
              <span className="w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-[0_15px_30px_rgba(223,105,81,0.3)] text-white group-hover:bg-accent/90 transition-all group-hover:scale-105">
                <svg className="w-4 h-4 fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </span>
              <span className="font-medium text-secondary group-hover:text-primary text-lg">Play Demo</span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative z-10 flex justify-center lg:justify-end">
           <img src="./assets/images/hero-traveller.png" alt="Traveller" className="w-full max-w-[765px] h-auto object-contain" />
        </div>
      </div>
    </section>
  );
}
