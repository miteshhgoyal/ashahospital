// components/about/AboutIntro.jsx
import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

const AboutIntro = ({ content }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-semibold text-sm mb-6">
              Our Story
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Leading Healthcare in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Muzaffarpur
              </span>
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mb-8"></div>

            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              {content.description}
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              With modern facilities, experienced doctors, and a patient-first
              approach, we aim to deliver healthcare that combines medical
              excellence with compassion. For over {content.experience}, we have
              been combining advanced technology with personalized treatment
              plans that meet international standards.
            </p>

            {/* Highlights from data */}
            <div className="space-y-4 mb-8">
              {content.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2">
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=400&auto=format&fit=crop"
                  alt="Modern Equipment"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=400&auto=format&fit=crop"
                  alt="Patient Care"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=400&auto=format&fit=crop"
                  alt="Medical Team"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=400&auto=format&fit=crop"
                  alt="Hospital Interior"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
