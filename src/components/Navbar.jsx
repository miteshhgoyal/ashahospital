import React, { useState } from "react";
import { Phone, Clock, Calendar, Heart, Menu, X } from "lucide-react";
import BookingModal from "./BookingModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <>
      {/* Top Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-600 text-white py-2">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-6 mb-2 sm:mb-0">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="font-medium">Emergency: +91-98765-43210</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Appointment: +91-98765-43211</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="font-semibold">24/7 Doctors Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/30 backdrop-blur-sm border-b border-gray-200 shadow-sm py-6">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center h-fit">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Asha Hospital
                </h1>
                <p className="text-xs text-gray-600">
                  Excellence in Healthcare
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <a
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
              >
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="/team"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
              >
                Team
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="/specialities"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
              >
                Specialities
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="/services"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="/testimonials"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
              >
                Testimonials
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
              >
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Book Appointment Button */}
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-blue-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 font-medium flex items-center gap-2 hover:scale-105"
              >
                <Calendar className="w-4 h-4" />
                <span className="hidden sm:inline">Book Appointment</span>
                <span className="sm:hidden">Book</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover: transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "max-h-96 opacity-100 pb-4"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="flex flex-col gap-1 pt-4 border-t border-gray-200">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 hover: transition-all duration-200 font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 hover: transition-all duration-200 font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#team"
                className="text-gray-700 hover:text-blue-600 hover: transition-all duration-200 font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </a>
              <a
                href="#specialities"
                className="text-gray-700 hover:text-blue-600 hover: transition-all duration-200 font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Specialities
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 hover: transition-all duration-200 font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-blue-600 hover: transition-all duration-200 font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 hover: transition-all duration-200 font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
