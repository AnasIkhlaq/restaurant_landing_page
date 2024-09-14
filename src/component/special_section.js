import React from 'react';

const SpecialSection = () => {
  const specialDish = {
    name: 'Oriental Taste',
    description: 'Experience the unique flavors of our specially crafted Oriental dish, made with authentic ingredients and spices.',
    image: 'https://www.onceuponachef.com/images/2009/08/grilled-flank-steak.jpg', // Replace with the actual image URL
  };

  return (
    <section className="py-12 bg-gray-900 text-white font-poppins">
      <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
        {/* Special Dish Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={specialDish.image}
            alt={specialDish.name}
            className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
          />
          <h2 className="ml-64 text-2xl font-bold">Grilled Steak</h2>
        </div>

        {/* Special Dish Content */}
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">{specialDish.name}</h2>
          <p className="text-xl text-gray-200 mb-6">{specialDish.description}</p>
          <a
            href="/order" // Link to the order page or specific call-to-action
            className="px-6 py-3 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500 transition-shadow shadow-lg hover:shadow-xl text-xl"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialSection;
