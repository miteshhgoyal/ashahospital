import React from "react";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";

const WhyChooseUs = ({ features }) => {
  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <SectionHeader
          badge="Why Choose Asha Hospital"
          title="Why"
          highlightText="Asha Hospital"
          description="Best Neurology, Gynaecology & Orthopaedic Care in Muzaffarpur"
        />

        {/* Main Features - Reusing existing FeatureCard component */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
