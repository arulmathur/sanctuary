import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle button click
  const handleGetStartedClick = () => {
    navigate("/signup"); // Redirects user to /signup route
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      {/* Hero Section */}
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Welcome to Sanctuary
        </h1>
        <p className="text-xl text-gray-600">
          Empowering refugees with secure digital identities.
        </p>
      </div>

      {/* About Section */}
      <div className="mx-auto max-w-4xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Why Sanctuary?
        </h2>
        <p className="text-gray-600 mb-4">
          Sanctuary provides a blockchain-based platform to help refugees secure
          digital identities, making it easier to access services and integrate
          into new communities.
        </p>
        <p className="text-gray-600">
          Our platform ensures privacy, security, and easy access to various
          services including healthcare, education, and legal support. Join us
          in making a difference.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center my-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
          onClick={handleGetStartedClick} // Set the click handler
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
