import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Heart,
  Stethoscope,
  Shield,
  Award,
  ChevronRight,
  Send,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Team", href: "#team" },
        { name: "Specialities", href: "#specialities" },
        { name: "Services", href: "#services" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact Us", href: "#contact" },
        { name: "Location", href: "#location" },
      ],
    },
    {
      title: "Our Specialities",
      links: [
        { name: "Brain & Spine Surgery", href: "#neurosurgery" },
        { name: "Obstetrics & Gynaecology", href: "#obstetrics" },
        { name: "Internal Medicine", href: "#internal-medicine" },
        { name: "Orthopedic Surgery", href: "#orthopedic" },
        { name: "Emergency Care", href: "#emergency" },
        { name: "Preventive Health", href: "#preventive" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "24/7 Emergency", href: "#emergency" },
        { name: "Online Consultation", href: "#online-consultation" },
        { name: "Health Checkups", href: "#checkups" },
        { name: "Laboratory Services", href: "#lab" },
        { name: "Pharmacy", href: "#pharmacy" },
        { name: "Ambulance Service", href: "#ambulance" },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Hospital Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                  <Heart className="w-3 h-3 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Asha Hospital
                </h3>
                <p className="text-sm text-gray-600">
                  Excellence in Healthcare
                </p>
              </div>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Bihar's leading multi-specialty healthcare center providing
              trusted and advanced treatment with modern facilities and
              experienced doctors.
            </p>

            {/* Key Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">
                  24/7 Emergency Care
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-teal-600" />
                </div>
                <span className="text-gray-700 font-medium">
                  Expert Specialists
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="text-gray-700 font-medium">
                  Advanced Technology
                </span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                {section.title === "Quick Links" && (
                  <Stethoscope className="w-5 h-5 mr-2 text-blue-600" />
                )}
                {section.title === "Our Specialities" && (
                  <Heart className="w-5 h-5 mr-2 text-rose-600" />
                )}
                {section.title === "Services" && (
                  <Shield className="w-5 h-5 mr-2 text-teal-600" />
                )}
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-all duration-200 flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Emergency Contact */}
            <div className="group bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-6 border border-red-100 hover:border-red-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">Emergency</h5>
                  <p className="text-red-600 font-semibold">24/7 Available</p>
                </div>
              </div>
              <p className="text-lg font-mono font-bold text-gray-900">
                +91-98765-43210
              </p>
            </div>

            {/* General Contact */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">Appointments</h5>
                  <p className="text-blue-600 font-semibold">Book Now</p>
                </div>
              </div>
              <p className="text-lg font-mono font-bold text-gray-900">
                +91-98765-43211
              </p>
            </div>

            {/* Email */}
            <div className="group bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">Email Us</h5>
                  <p className="text-teal-600 font-semibold">Get in Touch</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-900 break-all">
                info@ashahospital.com
              </p>
            </div>

            {/* Location */}
            <div className="group bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">Visit Us</h5>
                  <p className="text-emerald-600 font-semibold">Muzaffarpur</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">North Bihar, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter & Social Media */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Newsletter Signup */}
            <div className="flex-1 max-w-md">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Stay Updated
              </h4>
              <p className="text-gray-600 mb-4 text-sm">
                Subscribe to receive health tips and hospital updates
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-l-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                />
                <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-r-xl hover:shadow-lg transition-all duration-300 flex items-center gap-2 font-medium">
                  <Send className="w-4 h-4" />
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center lg:text-right">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Follow Us
              </h4>
              <div className="flex items-center gap-4">
                <a
                  href="#facebook"
                  className="w-12 h-12 bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl flex items-center justify-center transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                  <Facebook className="w-5 h-5 text-gray-600 group-hover:text-blue-600 group-hover:scale-110 transition-all" />
                </a>
                <a
                  href="#instagram"
                  className="w-12 h-12 bg-white hover:bg-pink-50 border border-gray-200 hover:border-pink-300 rounded-xl flex items-center justify-center transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                  <Instagram className="w-5 h-5 text-gray-600 group-hover:text-pink-600 group-hover:scale-110 transition-all" />
                </a>
                <a
                  href="#twitter"
                  className="w-12 h-12 bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl flex items-center justify-center transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                  <Twitter className="w-5 h-5 text-gray-600 group-hover:text-blue-500 group-hover:scale-110 transition-all" />
                </a>
                <a
                  href="#youtube"
                  className="w-12 h-12 bg-white hover:bg-red-50 border border-gray-200 hover:border-red-300 rounded-xl flex items-center justify-center transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                  <Youtube className="w-5 h-5 text-gray-600 group-hover:text-red-600 group-hover:scale-110 transition-all" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Heart className="w-4 h-4 text-red-500" />
              <span className="text-sm">
                © {currentYear} Asha Hospital. Made with care for your health.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
