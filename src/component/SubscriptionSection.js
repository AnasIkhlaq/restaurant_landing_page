import React, { useState } from 'react';

const SubscriptionSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add your subscription logic here
    // For example, send the email to your server or subscription service
    setIsSubscribed(true);
  };

  return (
    <section className="py-12 bg-gray-800 text-white font-poppins">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-yellow-300 mb-6">Stay Updated</h2>
        <p className="text-lg text-gray-300 mb-8">
          Subscribe to our newsletter to receive the latest updates, offers, and news from us!
        </p>
        {isSubscribed ? (
          <p className="text-lg text-yellow-300">
            Thank you for subscribing! We'll keep you updated with the latest news.
          </p>
        ) : (
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-auto px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-lg"
              required
            />
            <button
              type="submit"
              className="w-auto px-6 py-2 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition-shadow shadow-lg hover:shadow-xl"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default SubscriptionSection;
