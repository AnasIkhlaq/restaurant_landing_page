import React from 'react';

const statistics = [
  { value: '123', label: 'Outlets' },
  { value: '100', label: 'Chefs' },
  { value: '300', label: 'Menus' },
  { value: '30', label: 'Countries' },
];

const StatisticsSection = () => {
  return (
    <section className="py-12 bg-gray-800 text-white font-poppins">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-8">Our Achievements</h2>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto pb-10">
          At our restaurant, we take pride in our global presence and the remarkable achievements we have made. 
          With over 100 skilled chefs across 123 outlets, we offer a diverse range of 300 meticulously crafted menus. 
          Our dedication to excellence spans 30 countries, bringing unique culinary experiences to our valued customers. 
          We continue to grow and innovate, committed to delivering exceptional quality and service wherever we are.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {statistics.map((stat, index) => (
            <div key={index} className="relative flex flex-col items-center justify-center">
              {/* Circular Container */}
              <div className="w-36 h-36 flex items-center justify-center bg-gray-700 rounded-full border-4 border-white mb-4 relative">
                <h3 className="text-4xl font-bold text-yellow-400">{stat.value}</h3>
                {/* Label at the Bottom of the Circle */}
                <div className="absolute bottom-2 w-full text-center">
                  <p className="text-xl text-yellow-300">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
