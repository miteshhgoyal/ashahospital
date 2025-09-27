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
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Doctors", href: "/team" },
        { name: "Specialities", href: "/specialities" },
        { name: "Services", href: "/services" },
        { name: "Patient Reviews", href: "/testimonials" },
        { name: "Contact Us", href: "/contact" },
        { name: "Find Us", href: "#location" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "bg-pink-600 hover:bg-pink-700",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      color: "bg-sky-500 hover:bg-sky-600",
    },
    {
      icon: Youtube,
      href: "#",
      label: "YouTube",
      color: "bg-red-600 hover:bg-red-700",
    },
  ];

  const contactInfo = {
    emergency: "+91-98765-43210",
    appointment: "+91-98765-43211",
    email: "info@ashahospital.com",
    address: "Muzaffarpur, Bihar, India",
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200 relative z-50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Hospital Info - Enhanced */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Asha Hospital
                </h3>
                <p className="text-sm text-gray-600">
                  Excellence in Healthcare
                </p>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
              Bihar's leading multi-specialty healthcare center providing
              trusted and advanced treatment with modern facilities and
              experienced doctors committed to your health and wellbeing.
            </p>

            {/* Contact Information - Mobile Optimized */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <a
                  href={`tel:${contactInfo.emergency}`}
                  className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">
                    Emergency: {contactInfo.emergency}
                  </span>
                </a>
                <a
                  href={`tel:${contactInfo.appointment}`}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">
                    Appointments: {contactInfo.appointment}
                  </span>
                </a>
              </div>

              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">{contactInfo.email}</span>
              </a>

              <div className="flex items-start gap-2 text-gray-600">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Footer Links - Enhanced */}
          {footerLinks.map((section, index) => (
            <div key={index} className="md:col-span-1">
              <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                <Stethoscope className="w-5 h-5 mr-2 text-blue-600" />
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-all duration-200 flex items-center gap-2 group text-sm"
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

          {/* Social Media & Newsletter - Enhanced */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
              <Heart className="w-5 h-5 mr-2 text-blue-600" />
              Stay Connected
            </h4>

            <p className="text-gray-600 text-sm mb-4">
              Follow us for health tips and hospital updates
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} p-2.5 rounded-lg text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Quick Emergency Contact */}
            <div className="bg-red-50 border border-red-100 rounded-lg p-4">
              <h5 className="font-semibold text-red-800 text-sm mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Emergency Care
              </h5>
              <a
                href={`tel:${contactInfo.emergency}`}
                className="text-red-700 font-bold text-lg hover:underline"
              >
                {contactInfo.emergency}
              </a>
              <p className="text-xs text-red-600 mt-1">Available 24/7</p>
            </div>
          </div>
        </div>

        {/* Key Features Section - Mobile Optimized */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <span className="text-gray-900 font-medium text-sm">
                  24/7 Emergency Care
                </span>
                <p className="text-xs text-gray-600">
                  Round the clock medical support
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <span className="text-gray-900 font-medium text-sm">
                  Expert Specialists
                </span>
                <p className="text-xs text-gray-600">
                  Qualified medical professionals
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-purple-50 p-4 rounded-lg sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <span className="text-gray-900 font-medium text-sm">
                  Advanced Technology
                </span>
                <p className="text-xs text-gray-600">
                  Modern medical equipment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar - Enhanced */}
      <div className="bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Heart className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <span className="text-sm text-center sm:text-left">
                © {currentYear} Asha Hospital. Made with care for your health
                and wellbeing.
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-500">
              <a
                href="/privacy"
                className="hover:text-blue-600 transition-colors"
              >
                Privacy Policy
              </a>
              <span>•</span>
              <a
                href="/terms"
                className="hover:text-blue-600 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
