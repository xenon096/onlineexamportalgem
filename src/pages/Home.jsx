import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-900 shadow-lg py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-500">
            Exam Portal
          </Link>

          {/* Login/Register Buttons */}
          <div className="space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 rounded-md text-white hover:bg-blue-400 hover:text-white transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 rounded-md text-white hover:bg-blue-400 transition duration-300"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-purple-400 text-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-down">
            Your Gateway to Knowledge and Success
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in-up">
            Prepare, practice, and excel with our comprehensive online exam portal.
          </p>
          <div className="space-x-4 animate-zoom-in">
            <Link
              to="/login"
              className="bg-white text-blue-500 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:underline"
            >
              Get Started
            </Link>
            
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Why Choose Our Platform?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-700 p-8 rounded-lg shadow-xl text-center transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-5xl text-blue-400 mb-4">
                <i className="fas fa-book-open"></i> {/* Example icon */}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Vast Exam Library</h3>
              <p className="text-gray-300">
                Access a wide range of exams covering various subjects and levels.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-xl text-center transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-5xl text-green-400 mb-4">
                <i className="fas fa-chart-line"></i> {/* Example icon */}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Detailed Analytics</h3>
              <p className="text-gray-300">
                Track your progress with in-depth performance reports and insights.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-xl text-center transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-5xl text-purple-400 mb-4">
                <i className="fas fa-shield-alt"></i> {/* Example icon */}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Secure & Reliable</h3>
              <p className="text-gray-300">
                Our platform ensures a secure and seamless examination experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-purple-400 to-blue-400 text-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of students achieving their academic goals with us.
          </p>
          <Link
            to="/register"
            className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-full text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:underline"
          >
            Sign Up Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Online Exam Portal. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link to="/privacy" className="hover:text-blue-400 transition duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-blue-400 transition duration-300">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-blue-400 transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;