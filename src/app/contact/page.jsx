// pages/contact/page.js
"use client";
import React, { useState, useCallback, useMemo } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Send,
  ArrowRight,
  Heart,
  Award,
  Stethoscope,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  CheckCircle,
} from "lucide-react";

// Import optimized data from data file
import {
  contactInfo,
  emergencyContact,
  contactPageData,
} from "@/data/hospitalData";

const ContactPage = () => {
  // Optimized state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Memoized contact cards data for performance
  const contactCards = useMemo(
    () => [
      {
        id: "emergency",
        title: "Emergency Contact",
        subtitle: "Available 24/7",
        phone: emergencyContact.phone,
        description: "For immediate medical emergencies",
        gradient: "from-blue-500 to-purple-500",
        bgGradient: "from-blue-50 to-purple-50",
        borderColor: "border-blue-100 hover:border-blue-200",
      },
      {
        id: "general",
        title: "Appointments & Inquiries",
        subtitle: "General Contact",
        phone: contactInfo.phone,
        description: "For appointments and general inquiries",
        gradient: "from-blue-500 to-indigo-500",
        bgGradient: "from-blue-50 to-purple-50",
        borderColor: "border-blue-100 hover:border-blue-200",
      },
    ],
    []
  );

  // Optimized form handlers
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        // Simulate API call - replace with actual submission logic
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } catch (error) {
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  return (
    <div className="min-h-screen ">
      {/* Optimized Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-600 text-white pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5" />

        <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 /10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-semibold text-sm">Get In Touch</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              {contactPageData.hero.title}
            </h1>

            <p className="text-xl text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto">
              {contactPageData.hero.subtitle}
            </p>

            {/* Optimized Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactPageData.hero.features.map((feature, index) => (
                <div
                  key={index}
                  className="/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:/15 transition-all duration-300"
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

      {/* Main Content - Split Layout */}
      <section className="py-20 ">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information - Optimized Cards */}
            <div className="lg:col-span-2 space-y-6">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Get In Touch
                </h2>
                <p className="text-lg text-gray-600">
                  We're here to assist you with appointments, medical inquiries,
                  or any questions about our services.
                </p>
              </div>

              {/* Optimized Contact Cards */}
              {contactCards.map((card) => (
                <div
                  key={card.id}
                  className={`group bg-gradient-to-br ${card.bgGradient} rounded-xl p-6 border ${card.borderColor} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${card.gradient} rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}
                    >
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{card.title}</h3>
                      <p className="text-sm font-semibold text-gray-600">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-xl font-mono font-bold text-gray-900 mb-2">
                    {card.phone}
                  </p>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
              ))}

              {/* Email & Address - Compact Design */}
              <div className="bg-white/30 rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {contactInfo.email}
                      </p>
                      <p className="text-sm text-gray-600">Email us anytime</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {contactInfo.address}
                      </p>
                      <p className="text-sm text-gray-600">
                        Visit us at our location
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Operating Hours
                      </p>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>{contactPageData.operatingHours.emergency}</p>
                        <p>{contactPageData.operatingHours.opd}</p>
                        <p>{contactPageData.operatingHours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form & Map - Optimized */}
            <div className="lg:col-span-3 space-y-8">
              {/* Interactive Map */}
              <div className=" rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-4 bg-white/30 border-b border-gray-200">
                  <h3 className="font-bold text-gray-900 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    Find Us
                  </h3>
                </div>
                <div className="h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57244.99798963971!2d85.31080027910155!3d26.12385699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6732e59%3A0x4059f39a1ac82f06!2sMuzaffarpur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1632825600000!5m2!1sen!2sin"
                    width="100%"
                    height="256"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Optimized Contact Form */}
              <div className="bg-white/40 rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Send className="w-6 h-6 text-blue-600" />
                    Send Message
                  </h3>
                  <p className="text-gray-600">We'll respond within 24 hours</p>
                </div>

                {/* Success/Error Messages */}
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-purple-50 border border-purple-200 rounded-lg flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <p className="text-blue-700 font-medium">
                      Message sent successfully!
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Compact */}
      <section className="py-16 ">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Asha Hospital?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactPageData.services.map((service, index) => (
              <div
                key={index}
                className="text-center p-6  rounded-xl hover: hover:shadow-sm transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
