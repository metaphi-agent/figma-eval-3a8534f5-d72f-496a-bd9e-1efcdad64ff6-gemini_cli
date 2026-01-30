import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-24">
       <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-6">
             <h4 className="text-secondary font-semibold text-lg uppercase">Testimonials</h4>
             <h2 className="text-5xl font-bold text-primary font-volkhov leading-tight">What people say <br/> about Us.</h2>
             
             {/* Dots */}
             <div className="flex gap-4 pt-8">
                <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20"></div>
                <div className="w-3 h-3 rounded-full bg-secondary/20 hover:bg-secondary cursor-pointer transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-secondary/20 hover:bg-secondary cursor-pointer transition-colors"></div>
             </div>
          </div>

          {/* Right Cards */}
          <div className="relative h-[350px] w-full max-w-lg mx-auto lg:mx-0 mt-12 lg:mt-0">
             {/* Card 1 (Back) */}
             <div className="absolute top-0 left-0 lg:left-12 right-0 bg-white border border-gray-100 p-8 rounded-[10px] shadow-lg opacity-40 translate-y-16 scale-95 -z-10">
                <p className="text-secondary mb-6">"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."</p>
                <div className="font-bold text-secondary">Mike taylor</div>
                <div className="text-sm text-secondary">Lahore, Pakistan</div>
             </div>
             
             {/* Card 2 (Front) */}
             <div className="absolute top-0 left-0 right-0 lg:right-12 bg-white p-8 rounded-[10px] shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-gray-50 relative z-10">
                 {/* Avatar */}
                 <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md bg-gray-200">
                    <img src="https://i.pravatar.cc/150?img=68" alt="Mike Taylor" className="w-full h-full object-cover"/>
                 </div>
                 
                 <p className="text-secondary font-medium leading-loose mb-8 text-base">
                    "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."
                 </p>
                 <h4 className="font-bold text-primary text-lg">Mike taylor</h4>
                 <p className="text-secondary text-sm">Lahore, Pakistan</p>
             </div>
          </div>
       </div>
    </section>
  );
}
