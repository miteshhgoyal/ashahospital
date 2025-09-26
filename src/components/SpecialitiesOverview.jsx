import React from "react";
import SectionHeader from "@/components/SectionHeader";
import SpecialtyCard from "@/components/SpecialtyCard";

const SpecialitiesOverview = ({ specialties }) => {
  return (
    <section className="py-24 bg-gradient-to-b ">
      <div className="container mx-auto px-4 lg:px-8 max-w-8xl">
        <SectionHeader
          badge="Our Specialities"
          title="Comprehensive"
          highlightText="Medical Specialities"
          description="From neurology to orthopedics, we offer specialized care across multiple medical disciplines with expert doctors and advanced technology."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-8 justify-center gap-6">
          {specialties.map((specialty, index) => (
            <SpecialtyCard key={index} specialty={specialty} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialitiesOverview;
