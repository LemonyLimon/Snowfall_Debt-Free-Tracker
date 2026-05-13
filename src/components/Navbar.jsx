import React from 'react';
import { Link } from 'react-router-dom';

// The Navbar links to the Home page, Dashboard, and Resources
// It uses Tailwind for styling and is designed to be simple and clean, with a focus on usability
const Navbar = () => {
  return (
    <nav className="bg-primary p-4 shadow-md mb-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white tracking-tight">
          ❄️ Snowfall
        </Link>
        <div className="space-x-6 text-white font-semibold">
          <Link to="/dashboard" className="hover:text-accent transition">Dashboard</Link>
          <Link to="/resources" className="hover:text-accent transition">Resources</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;