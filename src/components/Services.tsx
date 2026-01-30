import React from 'react';

const services = [
  {
    icon: "./assets/icons/icon-satellite.svg",
    title: "Calculated Weather",
    desc: "Built Wicket longer admire do barton vanity itself do in it."
  },
  {
    icon: "./assets/icons/icon-plane.svg",
    title: "Best Flights",
    desc: "Engrossed listening. Park gate sell they west hard for the.",
    active: true
  },
  {
    icon: "./assets/icons/icon-mic.svg",
    title: "Local Events",
    desc: "Barton vanity itself do in it. Preferd to men it engrossed listening."
  },
  {
    icon: "./assets/images/icon-settings.png",
    title: "Customization",
    desc: "We deliver outsourced aviation services for military customers"
  }
];

export default function Services() {
  return (
    <section className="py-12 md:py-24 relative">
      <div className="container mx-auto px-4 text-center">
        <h4 className="text-secondary font-semibold text-lg uppercase mb-3">Category</h4>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 font-volkhov">We Offer Best Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 px-4">
          {services.map((item, index) => (
            <div key={index} className={`rounded-[36px] p-10 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)] group relative z-10 flex flex-col items-center cursor-pointer ${item.active ? 'bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)]' : 'bg-transparent hover:bg-white'}`}>
              
              {/* Active Decoration Box (Red Square behind) */}
              {item.active && (
                 <div className="absolute -bottom-8 -left-8 -z-10 w-24 h-24 bg-accent rounded-tl-[30px] rounded-br-[10px] hidden xl:block opacity-0 group-hover:opacity-100 transition-opacity"></div>
              )}
               {/* Note: The design shows the red square on 'active' state or hover. I'll stick to hover/active concept. */}

              <div className="w-24 h-24 mb-6 relative flex items-center justify-center">
                 <img src={item.icon} alt={item.title} className="w-full h-full object-contain relative z-10" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4 font-opensans">{item.title}</h3>
              <p className="text-secondary font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
