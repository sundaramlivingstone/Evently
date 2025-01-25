import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/dashboard" className="text-2xl font-bold text-brand-primary">
          Event Platform
        </Link>
        <div className="space-x-4">
          <Link
            to="/dashboard"
            className="text-gray-700 hover:text-brand-primary"
          >
            Dashboard
          </Link>
          <Link
            to="/create-event"
            className="text-gray-700 hover:text-brand-primary"
          >
            Create Event
          </Link>
          <Link to="/" className="text-gray-700 hover:text-brand-primary">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
