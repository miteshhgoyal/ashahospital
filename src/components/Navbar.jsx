import React, { useState } from "react";
import { Phone, Clock, Calendar, Heart, Menu, X } from "lucide-react";
import BookingModal from "./BookingModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <>
      {/* Enhanced Top Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 sm:py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mb-2 sm:mb-0">
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="font-medium hover:underline"
                >
                  Emergency: +91-98765-43210
                </a>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+919876543211" className="hover:underline">
                  Appointment: +91-98765-43211
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="font-semibold text-center">
                24/7 Emergency Available
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Enhanced Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                  Asha Hospital
                </h1>
                <p className="text-xs text-gray-600">
                  Excellence in Healthcare
                </p>
              </div>
              {/* Mobile Logo Text */}
              <div className="block sm:hidden">
                <h1 className="text-base font-bold text-gray-900">
                  Asha Hospital
                </h1>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/team", label: "Doctors" },
                { href: "/specialities", label: "Specialities" },
                { href: "/services", label: "Services" },
                { href: "/testimonials", label: "Reviews" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group py-2"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Enhanced Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Enhanced Book Appointment Button */}
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 font-medium flex items-center gap-2 hover:scale-105 text-sm"
              >
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <span className="hidden sm:inline">Book Appointment</span>
                <span className="sm:hidden text-xs">Book</span>
              </button>

              {/* Enhanced Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Menu */}
          <div
            className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              isMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-1 pt-4 border-t border-gray-200">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/team", label: "Our Doctors" },
                { href: "/specialities", label: "Specialities" },
                { href: "/services", label: "Services" },
                { href: "/testimonials", label: "Patient Reviews" },
                { href: "/contact", label: "Contact Us" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium py-0.5 px-4 rounded-lg flex items-center gap-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
