// components/about/OurServices.jsx
import React from "react";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";

const OurServices = ({ services }) => {
  return (
    <section className="py-24 bg-gradient-to-b ">
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
      </div>
    </section>
  );
};

export default OurServices;
