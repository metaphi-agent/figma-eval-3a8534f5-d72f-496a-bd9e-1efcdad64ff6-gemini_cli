import React from 'react';

const destinations = [
  {
    image: "./assets/images/destination-rome.png",
    city: "Rome, Italy",
    price: "$5,42k",
    days: "10 Days Trip"
  },
  {
    image: "./assets/images/destination-london.png",
    city: "London, UK",
    price: "$4.2k",
    days: "12 Days Trip"
  },
  {
    image: "./assets/images/destination-europe.png",
    city: "Full Europe",
    price: "$15k",
    days: "28 Days Trip"
  }
];

export default function Destinations() {
  return (
    <section className="py-12 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h4 className="text-secondary font-semibold text-lg uppercase mb-2">Top Selling</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-primary font-volkhov">Top Destinations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center max-w-6xl mx-auto">
          {destinations.map((item, index) => (
            <div key={index} className="bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden group hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all cursor-pointer">
              <div className="h-[320px] overflow-hidden relative">
                <img src={item.image} alt={item.city} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-8 pb-10">
                <div className="flex justify-between items-center text-secondary font-medium text-lg mb-4">
                  <span className="text-secondary">{item.city}</span>
                  <span className="text-secondary">{item.price}</span>
                </div>
                <div className="flex items-center gap-3 text-secondary font-medium mb-0">
                  <svg className="w-5 h-5 fill-black" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  <span>{item.days}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Decore Coil */}
        <img src="./assets/images/destinations-decore.png" alt="" className="absolute right-10 bottom-24 -z-10 hidden lg:block" />
      </div>
    </section>
  );
}
