import React from "react";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceDetail from "@/components/services/ServiceDetail";

// Import data
import { detailedServices } from "@/data/hospitalData";

export const metadata = {
    title: 'Medical Services',
    description: 'Comprehensive healthcare services at Asha Hospital including emergency care, surgery, diagnostics, and specialized treatments in Bihar.',
    keywords: ['medical services', 'healthcare Bihar', 'emergency services', 'surgery', 'diagnostics', 'hospital services Muzaffarpur']
}

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
