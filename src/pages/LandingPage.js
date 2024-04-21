import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 flex flex-col justify-center items-center text-white">
      {/* Hero Section */}
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold mb-4">Welcome to Sanctuary</h1>
        <p className="text-xl">
          Empowering refugees with secure digital identities.
        </p>
      </div>

      {/* About Section */}
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-3">Why Sanctuary?</h2>
        <p className="mb-4">
          Sanctuary provides a blockchain-based platform to help refugees secure
          digital identities, making it easier to access services and integrate
          into new communities.
        </p>
        <p>
          Our platform ensures privacy, security, and easy access to various
          services including healthcare, education, and legal support. Join us
          in making a difference.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center my-10">
        <button
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
          onClick={handleGetStartedClick}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
