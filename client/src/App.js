import React from "react";
import Header from "./components/Header";
import MainHeader from "./components/MainHeader";
import Order from "./components/Order";
import ContactSection from "./components/ContactSection";
import "./App.css";

const App = () => {
    return (
        <div data-bs-spy="scroll" className="app">
            <Header />
            <MainHeader />
            <ContactSection />
        </div>
    );
};

export default App;
