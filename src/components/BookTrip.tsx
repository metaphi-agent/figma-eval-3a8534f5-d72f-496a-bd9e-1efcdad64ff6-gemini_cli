import React from 'react';

const steps = [
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    ),
    color: "bg-yellow",
    title: "Choose Destination",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
      </svg>
    ),
    color: "bg-accent",
    title: "Make Payment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
      </svg>
    ),
    color: "bg-[#006380]",
    title: "Reach Airport on Selected Date",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
  }
];

export default function BookTrip() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h4 className="text-secondary font-semibold text-lg uppercase mb-2">Easy and Fast</h4>
          <h2 className="text-5xl font-bold text-primary mb-12 font-volkhov leading-tight">Book your next trip <br/> in 3 easy steps</h2>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className={`w-12 h-12 rounded-[13px] flex items-center justify-center shrink-0 shadow-md ${step.color}`}>
                  {step.icon}
                </div>
                <div>
                   <h3 className="text-primary font-bold text-lg mb-1">{step.title}</h3>
                   <p className="text-secondary leading-relaxed max-w-xs">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image/Card */}
        <div className="relative flex justify-center lg:justify-end">
           {/* Blue Blur */}
           <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/30 blur-[100px] rounded-full -z-10"></div>
           
           <div className="relative w-full max-w-[485px]">
              <img src="./assets/images/book-trip-image.png" alt="Trip to Greece" className="w-full h-auto drop-shadow-2xl" />
           </div>
        </div>
      </div>
    </section>
  );
}
