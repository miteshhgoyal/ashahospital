import React from "react";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";

const ServicesOverview = ({ services }) => {
  return (
    <section className="py-24 bg-gradient-to-b ">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <SectionHeader
          badge="Our Services"
          title="Comprehensive"
          highlightText="Medical Services"
          description="From emergency care to specialized treatments, we provide complete healthcare solutions under one roof with expert medical professionals and advanced technology."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
