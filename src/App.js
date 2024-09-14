import React from 'react';
import Header from './component/header';
import Hero from './component/hero';
import BestSellerSection from './component/best_seller';
import SpecialSection from './component/special_section';
import StatisticsSection from './component/statistics';
import SubscriptionSection from './component/SubscriptionSection';
import Footer from './component/footer';
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <BestSellerSection />
      <SpecialSection />
      <StatisticsSection />
      <SubscriptionSection />
      <Footer />
    </div>
  );
};

export default App;
