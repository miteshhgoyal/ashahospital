"use client";
import React from "react";
import SpecialitiesHero from "@/components/specialities/SpecialitiesHero";
import SpecialitiesOverview from "@/components/SpecialitiesOverview";
import SpecialityDetail from "@/components/specialities/SpecialityDetail";
import SpecialitiesStats from "@/components/specialities/SpecialitiesStats";

// Import data
import {
  detailedSpecialities,
  specialties,
  hospitalStats,
} from "@/data/hospitalData";

const SpecialitiesPage = () => {
  return (
    <div className="min-h-screen ">
      <SpecialitiesHero />
      <SpecialitiesOverview specialties={specialties} />
      <SpecialitiesStats stats={hospitalStats} />

      {/* Detailed Specialities Sections */}
      <div className="space-y-0">
        {detailedSpecialities.map((specialty, index) => (
          <SpecialityDetail
            key={specialty.id}
            specialty={specialty}
            index={index}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialitiesPage;
