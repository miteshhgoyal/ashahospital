// components/about/OurTeam.jsx
import React from "react";
import SectionHeader from "@/components/SectionHeader";
import DoctorCard from "@/components/DoctorCard";

const OurTeam = ({ doctors }) => {
  return (
    <section className="py-24 bg-gradient-to-b ">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <SectionHeader
          badge="Our Expert Team"
          title="Led by"
          highlightText="Specialists"
          description="Our hospital is led by specialists who bring expertise and dedication to every patient's care"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <DoctorCard key={doctor.id} doctor={doctor} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
