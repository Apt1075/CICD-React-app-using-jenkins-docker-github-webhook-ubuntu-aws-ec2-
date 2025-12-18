import React from "react";
import cdciimage from "./CiCDPipelineDiagram.png";

// Header Component
const Header = () => (
  <header className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
    <div className="text-xl font-bold">Arpit</div>
    <nav className="space-x-6 hidden md:block">
      <a href="#home" className="hover:text-gray-300">Home</a>
      <a href="#about" className="hover:text-gray-300">About</a>
      <a href="#contact" className="hover:text-gray-300">Contact</a>
    </nav>
    <div className="text-sm font-semibold">📞 +91 8009569030</div>
  </header>
);

// Slider Component (CI/CD Image)
const Slider = () => (
  <section className="bg-gray-100 p-6" id="home">
    <h2 className="text-xl font-semibold text-center mb-4">CI/CD Pipeline</h2>
    <div className="flex justify-center">
      <img
        // src="D:/cicd-react-app/CiCDPipelineDiagram.png"
        src={cdciimage}
        alt="CI/CD Pipeline"
        className="rounded-xl shadow-lg max-w-full md:max-w-4xl"
      />
    </div>
  </section>
);

// About Component
const About = () => (
  <section className="p-6 text-center" id="about">
    <h2 className="text-xl font-semibold mb-2">About This App</h2>
    <p className="text-gray-700 max-w-2xl mx-auto">
      This single-page React application is built by Arpit to demonstrate a real-world
      CI/CD pipeline concept using modern DevOps practices. It is suitable for
      interviews and portfolio projects.
    </p>
  </section>
);

// Contact Component
const Contact = () => (
  <section className="bg-gray-100 p-6 text-center" id="contact">
    <h2 className="text-xl font-semibold mb-2">Contact</h2>
    <p className="text-gray-700">📧 Email: aws.arpit25@gmail.com</p>
    <p className="text-gray-700">📞 Phone: +91 8009569030</p>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="bg-gray-900 text-white p-4 text-center">
    <p className="text-sm">© 2025 CI/CD React App. All rights reserved.</p>
  </footer>
);

// Main App Component
export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <Slider />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
