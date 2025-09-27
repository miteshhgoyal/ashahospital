import React from "react";
import SpecialitiesOverview from "@/components/SpecialitiesOverview";
import SpecialityDetail from "@/components/specialities/SpecialityDetail";

// Import data
import {
  detailedSpecialities,
  specialties,
} from "@/data/hospitalData";

export const metadata = {
  title: "Medical Specialities",
  description:
    "Expert medical specialities at Asha Hospital: Neurology, Obstetrics & Gynaecology, Orthopedics, and Critical Care in Bihar.",
  keywords: [
    "medical specialities",
    "neurology Bihar",
    "obstetrics gynaecology",
    "orthopedics",
    "critical care",
    "specialists Muzaffarpur",
  ],
};

const SpecialitiesPage = () => {
  return (
    <div className="min-h-screen ">
      <SpecialitiesOverview specialties={specialties} />

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
