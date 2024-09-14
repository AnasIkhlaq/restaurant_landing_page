import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MTY2MTU3Ny13aWtpbWVkaWEtaW1hZ2Uta293YXBlZWouanBn.jpg"
          alt="Restaurant Banner"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center justify-center h-screen text-center">
        <div>
          <h1 className="text-5xl font-bold text-yellow-400 animate-fade-in">
            Welcome to [Restaurant Name]
          </h1>
          <p className="mt-4 text-xl text-yellow-300 max-w-lg mx-auto animate-fade-in">
            Enjoy the finest culinary delights made with fresh ingredients and
            love.
          </p>

          <button className="mt-8 px-6 py-3 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500 transition-shadow shadow-lg hover:shadow-xl text-xl">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
