"use client";
import React from "react";
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import MissionVision from "@/components/about/MissionVision";
import ExperienceStats from "@/components/about/ExperienceStats";
import OurTeam from "@/components/about/OurTeam";

// Import data from centralized data file
import {
  aboutContent,
  hospitalStats,
  doctors,
} from "@/data/hospitalData";
import MedicalServices from "@/components/about/MedicalServices";
import WhyAshaHospital from "@/components/about/WhyAshaHospital";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Asha Hospital's mission, experienced medical team, and commitment to providing exceptional healthcare services in Bihar.",
  keywords: [
    "about Asha Hospital",
    "healthcare mission",
    "medical team Bihar",
    "hospital history Muzaffarpur",
  ],
};

const AboutPage = () => {
  return (
    <div className="min-h-screen ">
      <AboutHero content={aboutContent} stats={hospitalStats} />
      <AboutIntro content={aboutContent} />
      <OurTeam doctors={doctors} />

      <MedicalServices />

      <ExperienceStats stats={hospitalStats} />
      <MissionVision content={aboutContent} />

      <WhyAshaHospital />
    </div>
  );
};

export default AboutPage;
