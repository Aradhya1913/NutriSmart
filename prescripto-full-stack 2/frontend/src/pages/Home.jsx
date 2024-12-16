import { assets } from '../assets/assets';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">SmartNutri</h1>
          <nav>
            <Link to="/" className="mx-4">Home</Link>
            <Link to="/blogs" className="mx-4">Blogs</Link>
            <Link to="/about" className="mx-4">About</Link>
            <Link to="/contact" className="mx-4">Contact</Link>
          </nav>
        </div>
      </header>

{/* Hero Section */}
<section 
  className="relative h-[calc(100vh-3rem)] bg-cover bg-center flex flex-col justify-between"  // Reduced height from 100vh - 4rem to 100vh - 3rem
  style={{ backgroundImage: `url(${assets.back1})` }} // Set the background image here
>
  <div className="absolute inset-0 bg-black opacity-10"></div> {/* Darker overlay for more depth */}
  
  {/* Content Container */}
  <div
    className="relative container mx-auto flex-grow flex flex-col justify-center items-center text-center"
    style={{
      backgroundImage: "url('/path-to-your-image/back1.jpg')", // Replace with your actual image path
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      height: "100vh",
    }}
  >
    <h2
      className="text-5xl md:text-6xl font-bold mb-6"
      style={{
        color: "#f0f0f0", // Soft white
        textShadow: "3px 3px 6px rgba(0, 0, 0, 0.8)", // Deep shadow
        letterSpacing: "2px",
      }}
    >
      Transform Your Health
    </h2>
    <p
      className="text-lg md:text-2xl font-light"
      style={{
        color: "rgba(88, 220, 94, 0.85)", // Slight transparency for blending
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        maxWidth: "600px",
        lineHeight: "1.6",
      }}
    >
      Personalized Nutrition Plans Tailored for You
    </p>
  </div>

  {/* Get Started Button */}
  <div className="relative container mx-auto text-center pb-12">
    <a 
      href="https://g6n2pqxj-5000.inc1.devtunnels.ms/" 
      className="bg-green-500 text-white py-3 px-6 rounded text-lg hover:bg-green-600 transition duration-300"
    >
      Get Started
    </a>
  </div>
</section>

      {/* About Us Section */}
      <section className="container mx-auto p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">About SmartNutri</h2>
        <p className="text-gray-700 mb-4">
          SmartNutri is dedicated to helping you achieve your health goals through personalized nutrition and workout plans.
          Join us to transform your lifestyle!
        </p>
        <img src={assets.aboutImage} alt="About Us" className="mx-auto mb-4" /> {/* Ensure correct asset path */}
      </section>

      {/* Featured Services Section */}
      <section className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-bold text-xl">Nutrition Plans</h3>
          <p>Get personalized meal plans designed to meet your health goals.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-bold text-xl">Workout Plans</h3>
          <p>Find workout routines tailored to your fitness level and preferences.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-bold text-xl">Health Stats Tracking</h3>
          <p>Track your progress with easy-to-use health statistics and metrics.</p>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Latest Blogs</h2>
        <div className="space-y-4">
          <div className="border p-4 rounded">
            <h3 className="text-xl font-semibold">Blog 1: Healthy Eating</h3>
            <p>Learn how a balanced diet can improve your health and well-being.</p>
            <Link to="/blog1" className="text-blue-500 hover:underline">Read More</Link>
          </div>
          <div className="border p-4 rounded">
            <h3 className="text-xl font-semibold">Blog 2: Effective Workouts</h3>
            <p>Discover workout routines that can help you stay fit and strong.</p>
            <Link to="/blog2" className="text-blue-500 hover:underline">Read More</Link>
          </div>
          <div className="border p-4 rounded">
            <h3 className="text-xl font-semibold">Blog 3: Mental Health Matters</h3>
            <p>Explore tips to maintain mental well-being alongside physical health.</p>
            <Link to="/blog3" className="text-blue-500 hover:underline">Read More</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
        <blockquote className="italic mb-4">"SmartNutri transformed my approach to health and nutrition!" - Happy User</blockquote>
        <blockquote className="italic">"The personalized plans made a significant difference in my lifestyle." - Satisfied Customer</blockquote>
      </section>

      {/* Call to Action Section */}
      <section className="bg-green-500 text-white text-center p-6">
        <h2 className="text-2xl font-bold">Join the SmartNutri Community Today!</h2>
        <Link to="http://localhost:5173/login" className="bg-white text-green-500 py-2 px-4 rounded mt-4 inline-block">Sign Up Now</Link>
      </section>

      <footer className="bg-gray-800 text-white p-4">
  <div className="container mx-auto text-center">
    <p className="text-white">&copy; {new Date().getFullYear()} SmartNutri. All rights reserved.</p>
  </div>
</footer>
    </div>
  );
};

export default Home;
