import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ContactSection from "./components/ContactSection";

const App = () => {
    return (
        <div
            style={{
                background: "linear-gradient(90deg, rgba(1,2,2,1) 0%, rgba(39,89,75,1) 100%)",
            }}
        >
            <Header />
            <HeroSection />
            <FeaturesSection />
            <ContactSection />
        </div>
    );
};

export default App;
