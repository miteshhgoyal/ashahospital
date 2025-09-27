// pages/contact/page.js
"use client";
import React, { useMemo } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Shield,
  Calendar,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Users,
  Star,
  ExternalLink,
  Navigation,
  Heart,
} from "lucide-react";

// Import optimized data from data file
import {
  contactInfo,
  emergencyContact,
  contactPageData,
} from "@/data/hospitalData";

const ContactPage = () => {
  // Social media links data
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

  // Memoized contact cards data for performance
  const contactCards = useMemo(
    () => [
      {
        id: "emergency",
        title: "Emergency Contact",
        subtitle: "Available 24/7",
        phone: emergencyContact.phone,
        description: "For immediate medical emergencies and critical care",
        gradient: "from-red-500 to-pink-500",
        bgGradient: "from-red-50 to-pink-50",
        borderColor: "border-red-100 hover:border-red-200",
        icon: Shield,
      },
      {
        id: "general",
        title: "Appointments & Inquiries",
        subtitle: "General Contact",
        phone: contactInfo.phone,
        description: "For appointments, consultations and general inquiries",
        gradient: "from-blue-500 to-indigo-500",
        bgGradient: "from-blue-50 to-indigo-50",
        borderColor: "border-blue-100 hover:border-blue-200",
        icon: Calendar,
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-600 text-white pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-semibold text-sm">Get In Touch</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Contact Asha Hospital
            </h1>

            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto">
              We're here to provide exceptional healthcare services. Find all
              the information you need to reach us or visit our facility.
            </p>

            {/* Enhanced Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: "24/7 Emergency",
                  desc: "Round the clock emergency care",
                },
                {
                  icon: Users,
                  title: "Expert Doctors",
                  desc: "Qualified medical professionals",
                },
                {
                  icon: Star,
                  title: "Quality Care",
                  desc: "Trusted healthcare services",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <feature.icon className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="font-bold text-white mb-2 text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Contact Information & Map */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col  md:flex-row md:items-start gap-6 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-8 basis-1/2">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  How to Reach Us
                </h2>
                <p className="text-base sm:text-lg text-gray-600">
                  Multiple ways to connect with our healthcare team for
                  appointments, emergencies, and general inquiries.
                </p>
              </div>

              {/* Enhanced Contact Cards */}
              {contactCards.map((card) => (
                <div
                  key={card.id}
                  className={`group bg-gradient-to-br ${card.bgGradient} rounded-2xl p-6 lg:p-8 border ${card.borderColor} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`shrink-0 w-10 h-10 bg-gradient-to-r ${card.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}
                    >
                      <card.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl">
                        {card.title}
                      </h3>
                      <p className="text-sm font-semibold text-gray-600">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                  <a
                    href={`tel:${card.phone}`}
                    className="text-2xl font-mono font-bold text-gray-900 mb-3 block hover:text-blue-600 transition-colors"
                  >
                    {card.phone}
                  </a>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              ))}

              {/* Contact Details Card */}
              <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 text-xl mb-6 flex items-center gap-2">
                  <Mail className="w-6 h-6 text-blue-600" />
                  Additional Contact Information
                </h3>
                <div className="space-y-6">
                  {/* Email Section */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-500 mb-1">
                            Email Address
                          </p>
                          <a
                            href={`mailto:${contactInfo.email}`}
                            className="font-semibold text-gray-900 hover:text-blue-600 transition-colors text-base sm:text-lg block truncate"
                          >
                            {contactInfo.email}
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-3">
                      Email us for non-urgent inquiries and general questions
                    </p>
                  </div>

                  {/* Address Section */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <MapPin className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-500 mb-2">
                            Our Location
                          </p>
                          <p className="font-semibold text-gray-900 text-base sm:text-lg mb-3 leading-relaxed">
                            {contactInfo.address}
                          </p>
                        </div>
                      </div>

                      <div className="ml-13 sm:ml-0">
                        <a
                          href={`https://maps.google.com/?q=${encodeURIComponent(
                            contactInfo.address
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg transition-colors"
                        >
                          Get Directions <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Operating Hours Section */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 mb-1">
                          Working Hours
                        </p>
                        <p className="font-semibold text-gray-900 text-base sm:text-lg">
                          Operating Schedule
                        </p>
                      </div>
                    </div>

                    {/* Mobile-Optimized Hours Display */}
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4">
                          <span className="text-gray-700 font-medium text-sm">
                            Emergency Care
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="font-bold text-green-600 text-sm">
                              24/7 Available
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4">
                          <span className="text-gray-700 font-medium text-sm">
                            OPD Services
                          </span>
                          <span className="font-medium text-gray-900 text-sm">
                            Mon-Sat 8AM-8PM
                          </span>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4">
                          <span className="text-gray-700 font-medium text-sm">
                            Sunday
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span className="font-medium text-gray-900 text-sm">
                              Emergency Only
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section - Enhanced */}
            <div className="space-y-8 basis-1/2">
              {/* Interactive Map */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden h-full">
                <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
                  <h3 className="font-bold text-gray-900 text-xl flex items-center gap-2 mb-2">
                    <Navigation className="w-6 h-6 text-blue-600" />
                    Find Our Location
                  </h3>
                  <p className="text-gray-600">
                    Located in the heart of Muzaffarpur for easy accessibility
                  </p>
                </div>
                <div className="h-96 lg:h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57244.99798963971!2d85.31080027910155!3d26.12385699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6732e59%3A0x4059f39a1ac82f06!2sMuzaffarpur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1632825600000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title="Asha Hospital Location"
                  />
                </div>

                {/* Map Footer with Quick Actions */}
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(
                        contactInfo.address
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Open in Google Maps
                    </a>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Enhanced Social Media Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 lg:p-8 border border-blue-100">
                <h3 className="font-bold text-gray-900 text-xl mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-blue-600" />
                  Stay Connected
                </h3>
                <p className="text-gray-600 mb-6">
                  Follow us on social media for health tips, hospital updates,
                  and community health initiatives.
                </p>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} transition-all duration-300 p-4 rounded-xl text-white shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3 font-medium`}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="hidden sm:inline">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
