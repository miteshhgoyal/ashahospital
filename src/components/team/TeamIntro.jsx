// components/team/TeamIntro.jsx
import React from "react";
import { CheckCircle } from "lucide-react";

const TeamIntro = () => {
  const highlights = [
    "Experienced doctors across multiple specialties",
    "Modern facilities with advanced technology",
    "Patient-first approach with compassionate care",
    "Comprehensive treatment under one roof",
    "Serving North Bihar and surrounding regions",
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2  text-blue-600 rounded-full font-semibold text-sm mb-6">
            Our Team Excellence
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Advanced Medical Care with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              Expert Team
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our team of experienced doctors, supported by modern facilities,
            ensures quality treatment for every patient with a focus on
            Neurology, Obstetrics & Gynaecology, and Orthopaedics.
          </p>
        </div>

        {/* Highlights */}
        <div className=" rounded-3xl shadow-lg border border-gray-100 p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Our Team?
              </h3>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Our Commitment
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Every member of our medical team is committed to delivering
                ethical, affordable, and compassionate healthcare. We combine
                clinical excellence with human values, ensuring that every
                patient and their family feels supported throughout their
                treatment journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamIntro;
