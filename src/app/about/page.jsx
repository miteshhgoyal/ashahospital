"use client";
import React from "react";
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import MissionVision from "@/components/about/MissionVision";
import ExperienceStats from "@/components/about/ExperienceStats";
import OurTeam from "@/components/about/OurTeam";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import OurServices from "@/components/about/OurServices";

// Import data from centralized data file
import {
  aboutContent,
  hospitalStats,
  doctors,
  features,
  services,
  specialties,
} from "@/data/hospitalData";
import SpecialitiesOverview from "@/components/SpecialitiesOverview";

const AboutPage = () => {
  return (
    <div className="min-h-screen ">
      <AboutHero content={aboutContent} stats={hospitalStats} />
      <AboutIntro content={aboutContent} />
      <ExperienceStats stats={hospitalStats} />
      <MissionVision content={aboutContent} />
      <OurTeam doctors={doctors} />
      <WhyChooseUs features={features} />
      <OurServices services={services} />
      <SpecialitiesOverview specialties={specialties} />
    </div>
  );
};

export default AboutPage;
