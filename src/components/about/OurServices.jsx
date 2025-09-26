// components/about/OurServices.jsx
import React from "react";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import SpecialtyCard from "@/components/SpecialtyCard";

const OurServices = ({ services, specialties }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <SectionHeader
          badge="Our Services"
          title="Comprehensive"
          highlightText="Healthcare Services"
          description="From preventive health check-ups to complex surgeries, we provide end-to-end healthcare solutions under one roof"
        />

        {/* Main Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Medical Specialties */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Medical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              Specialties
            </span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {specialties.map((specialty, index) => (
              <SpecialtyCard key={index} specialty={specialty} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
