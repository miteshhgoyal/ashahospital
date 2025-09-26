// components/about/MissionVision.jsx
import React from "react";
import { Target, Eye, Heart } from "lucide-react";

const MissionVision = ({ content }) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-semibold text-sm mb-6">
            Our Purpose
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Mission &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              Vision
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mx-auto mb-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-12 rounded-3xl border border-blue-100 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {content.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-12 rounded-3xl border border-teal-100 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Vision
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {content.vision}
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              Values
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Compassion
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Every patient is treated with empathy, dignity, and the highest
                level of care.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Excellence
              </h4>
              <p className="text-gray-600 leading-relaxed">
                We strive for the highest standards in medical care and patient
                satisfaction.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Innovation
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Continuously adopting advanced technology and modern treatment
                methods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
