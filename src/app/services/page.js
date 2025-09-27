"use client";
import React from "react";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesOverview from "@/components/services/ServicesOverview";
import ServiceDetail from "@/components/services/ServiceDetail";
import ServicesStats from "@/components/services/ServicesStats";

// Import data
import { detailedServices, services, hospitalStats } from "@/data/hospitalData";

const ServicesPage = () => {
    return (
        <div className="min-h-screen ">
            <ServicesHero />

            <div className="space-y-0">
                {detailedServices.map((service, index) => (
                    <ServiceDetail
                        key={service.id}
                        service={service}
                        index={index}
                        isReversed={index % 2 !== 0}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;
