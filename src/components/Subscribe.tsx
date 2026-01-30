import React from 'react';

export default function Subscribe() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-[129px_20px_20px_20px] relative overflow-hidden p-12 md:p-24 text-center max-w-5xl mx-auto">
            
            {/* Background Image / Gradient */}
            {/* Assuming subscribe-bg.png is the purple gradient bg. */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-primary/5"></div> {/* Fallback */}
                <img src="./assets/images/subscribe-bg.png" alt="" className="w-full h-full object-cover" />
            </div>

            {/* Decor Circles */}
            <img src="./assets/images/subscribe-decore.png" alt="" className="absolute -top-4 -right-4 w-64 opacity-30" />
            
            <h2 className="text-2xl md:text-4xl font-semibold text-secondary mb-12 leading-relaxed max-w-3xl mx-auto text-[#5E6282] drop-shadow-sm">
                Subscribe to get information, latest news and other interesting offers about Jadoo
            </h2>

            <form className="flex flex-col md:flex-row gap-6 justify-center max-w-lg mx-auto relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <input 
                        type="email" 
                        placeholder="Your email" 
                        className="w-full pl-12 pr-6 py-5 rounded-[10px] border-none outline-none focus:ring-2 focus:ring-accent text-secondary"
                    />
                </div>
                <button className="bg-[#FF946D] text-white px-10 py-5 rounded-[10px] font-semibold hover:bg-accent transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Subscribe
                </button>
            </form>

            <img src="./assets/icons/icon-mic.svg" className="absolute bottom-10 left-10 w-16 h-16 opacity-20 rotate-45 hidden md:block" alt=""/>
        </div>
      </div>
      
       {/* Plus decor on bottom right */}
       <div className="absolute right-10 bottom-10 -z-10">
           {/* Can use SVG for plus pattern */}
           <svg width="153" height="166" viewBox="0 0 153 166" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-30">
                <path d="M141.688 77.2625C141.688 84.0957 140.751 90.6277 138.875 96.8584" stroke="#717171" strokeOpacity="0.5"/>
                {/* ... Simplified ... */}
           </svg>
       </div>
    </section>
  );
}
