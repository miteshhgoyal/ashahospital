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
    // {
    //   title: "Our Specialities",
    //   links: [
    //     { name: "Brain & Spine Surgery", href: "#neurosurgery" },
    //     { name: "Obstetrics & Gynaecology", href: "#obstetrics" },
    //     { name: "Internal Medicine", href: "#internal-medicine" },
    //     { name: "Orthopedic Surgery", href: "#orthopedic" },
    //     { name: "Emergency Care", href: "#emergency" },
    //     { name: "Preventive Health", href: "#preventive" },
    //   ],
    // },
    // {
    //   title: "Services",
    //   links: [
    //     { name: "24/7 Emergency", href: "#emergency" },
    //     { name: "Online Consultation", href: "#online-consultation" },
    //     { name: "Health Checkups", href: "#checkups" },
    //     { name: "Laboratory Services", href: "#lab" },
    //     { name: "Pharmacy", href: "#pharmacy" },
    //     { name: "Ambulance Service", href: "#ambulance" },
    //   ],
    // },
  ];

  return (
    <footer className="bg-gradient-to-b bg-white/30 backdrop-blur-sm border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Hospital Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <div className="w-6 h-6  rounded-lg flex items-center justify-center">
                  <Heart className="text-white" size={40} />
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

            <p className="text-gray-600 mb-2 leading-relaxed">
              Bihar's leading multi-specialty healthcare center providing
              trusted and advanced treatment with modern facilities and
              experienced doctors.
            </p>
          </div>

          <div></div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="lg:col-span-2">
              <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                {section.title === "Quick Links" && (
                  <Stethoscope className="w-5 h-5 mr-2 text-blue-600" />
                )}
                {section.title === "Our Specialities" && (
                  <Heart className="w-5 h-5 mr-2 text-blue-600" />
                )}
                {section.title === "Services" && (
                  <Shield className="w-5 h-5 mr-2 text-blue-600" />
                )}
                {section.title}
              </h4>
              <ul className="grid grid-cols-2 gap-2">
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

          <div className="lg:col-span-4 mt-8">
            {/* Key Features */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 max-w-3xl mx-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">
                  24/7 Emergency Care
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">
                  Expert Specialists
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">
                  Advanced Technology
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className=" border-y border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Emergency Contact */}
            <div className="group bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">Emergency</h5>
                  <p className="text-blue-600 font-semibold">24/7 Available</p>
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
            <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">Email Us</h5>
                  <p className="text-blue-600 font-semibold">Get in Touch</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-900 break-all">
                info@ashahospital.com
              </p>
            </div>

            {/* Location */}
            <div className="group bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">Visit Us</h5>
                  <p className="text-blue-600 font-semibold">Muzaffarpur</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">North Bihar, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className=" border-t border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Heart className="w-4 h-4 text-blue-500" />
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
