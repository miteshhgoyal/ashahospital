// components/team/DoctorProfile.jsx
import React from "react";
import { MapPin, Award, Clock, ChevronRight, Stethoscope } from "lucide-react";
import Image from "next/image";

const DoctorProfile = ({ doctor, index, isReversed = false }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
          isReversed ? "lg:grid-cols-2" : ""
        }`}
      >
        {/* Image Section */}
        <div className={`relative ${isReversed ? "lg:order-2" : ""}`}>
          <div className="relative h-96 lg:h-full">
            <Image
              src={doctor.image}
              alt={doctor.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

            {/* Floating Elements */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
              {doctor.experience}
            </div>
            <div
              className={`absolute top-6 right-6 w-12 h-12 bg-gradient-to-r ${doctor.color} rounded-full flex items-center justify-center shadow-lg`}
            >
              <Stethoscope className="w-6 h-6 text-white" />
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <MapPin className="w-4 h-4" />
                  {doctor.location}
                </div>
                <div className="text-lg font-bold text-gray-900">
                  {doctor.department}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className={`p-12 ${isReversed ? "lg:order-1" : ""}`}>
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {doctor.name}
              </h2>
              <p className="text-xl text-blue-600 font-semibold mb-4">
                {doctor.specialty}
              </p>
              <p className="text-sm text-gray-600 mb-6">
                {doctor.qualifications}
              </p>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                {doctor.description}
              </p>
            </div>

            {/* Expertise */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                Areas of Expertise
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {doctor.expertise.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education (if available) */}
            {doctor.education && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Education & Training
                </h3>
                <div className="space-y-2">
                  {doctor.education.map((edu, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{edu}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Philosophy */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Philosophy & Approach
              </h3>
              <p className="text-gray-700 leading-relaxed italic">
                "{doctor.philosophy}"
              </p>
            </div>

            {/* Serving Areas */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Serving Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {doctor.servingAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
