// pages/index.js or HomePage.jsx
"use client";
import React from "react";
import HeroSlider from "@/components/HeroSlider";
import SectionHeader from "@/components/SectionHeader";
import SpecialitiesOverview from "@/components/SpecialitiesOverview";
import FeatureCard from "@/components/FeatureCard";
import ServiceCard from "@/components/ServiceCard";
import DoctorCard from "@/components/DoctorCard";
import TestimonialCard from "@/components/TestimonialCard";
import {
  Phone,
  Calendar,
  ArrowRight,
  Clock,
  MapPin,
  Heart,
} from "lucide-react";
import Image from "next/image";

import {
  heroSlides,
  specialties,
  features,
  services,
  doctors,
  testimonials,
} from "@/data/hospitalData";

const HomePage = () => {
  return (
    <div className="min-h-screen  font-inter">
      <HeroSlider slides={heroSlides} />

      {/* Medical Specialties Ribbon */}
      <SpecialitiesOverview specialties={specialties} />

      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2  text-blue-600 rounded-full font-semibold text-sm mb-6">
                  About Asha Hospital
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  About Us –{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                    Asha Hospital
                  </span>
                  , Muzaffarpur
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mb-8"></div>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed">
                Asha Hospital, Muzaffarpur is a leading multi-specialty
                healthcare center providing trusted and advanced treatment in
                Neurology, Obstetrics & Gynaecology, Orthopaedics, and Critical
                Care.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                With modern facilities, experienced doctors, and a patient-first
                approach, we aim to deliver healthcare that combines medical
                excellence with compassion.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2">
                  More Info <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <Image
                      src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=400&auto=format&fit=crop"
                      alt="Hospital Interior"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <Image
                      src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=400&auto=format&fit=crop"
                      alt="Medical Equipment"
                      width={400}
                      height={350}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <Image
                      src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=400&auto=format&fit=crop"
                      alt="Patient Care"
                      width={400}
                      height={350}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <Image
                      src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=400&auto=format&fit=crop"
                      alt="Medical Team"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 ">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <SectionHeader
            badge="Why Choose Us"
            title="Why Choose"
            highlightText="Asha Hospital"
            description="Experience world-class healthcare with state-of-the-art facilities, expert medical professionals, and compassionate care that puts patients first."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <SectionHeader
            badge="Our Services"
            title="Our Services -"
            highlightText="All-inclusive Care"
            description="We are committed to addressing all your healthcare needs, offering services ranging from hospitals and clinics to labs, pharmacies, and insurance."
          />

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              EXPLORE OUR{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                MEDICAL SPECIALITIES
              </span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section id="doctors" className="py-24 ">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <SectionHeader
            badge="Our Expert Team"
            title="Meet Our"
            highlightText="Expert Team"
            description="Our team of highly qualified and experienced medical professionals is dedicated to providing exceptional healthcare services with compassion and expertise."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <DoctorCard key={index} doctor={doctor} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <SectionHeader
            badge="Patient Testimonials"
            title="Meet Our"
            highlightText="Happy Patients"
            description="Real stories from real patients who experienced exceptional care and treatment at Asha Hospital. Their satisfaction is our greatest achievement."
          />

          {/* Featured Testimonials */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Compact Testimonials */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {testimonials.slice(3).map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                variant="compact"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 /10 backdrop-blur-sm rounded-full border border-white/20 text-white font-semibold text-sm mb-8">
            Ready to Get Started?
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Experience Excellence in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Healthcare
            </span>
            ?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Book your appointment today and let our expert team take care of
            your health with compassion, expertise, and state-of-the-art medical
            facilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto mb-16">
            <button className="group  text-gray-900 px-10 py-5 rounded-xl font-bold text-lg hover: transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 flex items-center justify-center gap-3">
              <Phone className="w-6 h-6" />
              Call Now: +91-98765-43210
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover: hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3">
              <Calendar className="w-6 h-6" />
              Book Online
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-white/20">
            <div className="/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <Clock className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2 text-xl">
                24/7 Emergency
              </h3>
              <p className="text-gray-300">Always available for urgent care</p>
            </div>
            <div className="/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <MapPin className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2 text-xl">
                Muzaffarpur, Bihar
              </h3>
              <p className="text-gray-300">Easy to reach location</p>
            </div>
            <div className="/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <Heart className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2 text-xl">
                50,000+ Patients
              </h3>
              <p className="text-gray-300">Trusted by thousands</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
