import React from 'react';

const BestSellerSection = () => {
  const dishes = [
    {
      name: 'Grilled Steak',
      description: 'A perfectly grilled steak served with garlic butter and herbs.',
      image: 'https://www.onceuponachef.com/images/2009/08/grilled-flank-steak.jpg',
    },
    {
      name: 'Sushi Platter',
      description: 'Freshly made sushi rolls with a variety of fillings and flavors.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4h7jvdAzoHihsy2D7i3xOLbTueFjbCwctFA&s',
    },
    {
      name: 'Pasta Carbonara',
      description: 'Classic Italian pasta with creamy sauce, bacon, and parmesan.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ndTKZPllqLOR6avLlAOo7NR6IfpLsN9CDg&s',
    },
  ];

  return (
    <section className="py-12 bg-gray-100 text-white font-poppins">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-8">Best Sellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div key={index} className="bg-gray-100 p-6">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-black">{dish.name}</h3>
              <p className="mt-2 text-black">{dish.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellerSection;
