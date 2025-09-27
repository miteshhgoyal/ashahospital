import React from "react";
import { Target, Eye } from "lucide-react";

const MissionVision = ({ content }) => {
  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/40 text-blue-600 rounded-full font-semibold text-sm mb-6">
            Our Purpose
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Mission &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600">
              Vision
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full mx-auto mb-8" />
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
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-12 rounded-3xl border border-blue-100 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
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
      </div>
    </section>
  );
};

export default MissionVision;
