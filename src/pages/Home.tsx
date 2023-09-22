import React from "react";

import NavigationBar from "../components/navigationBar/NavigationBar";
import CustomerReviewSection from "../components/sections/customerReviewSection/CustomerReviewSection";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <main className="main-content">
      <NavigationBar />
      <CustomerReviewSection />
    </main>
  );
};

export default HomePage;
