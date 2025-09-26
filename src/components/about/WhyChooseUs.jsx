// components/about/WhyChooseUs.jsx
import React from "react";
import { Microscope, Ambulance, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";

const WhyChooseUs = ({ features }) => {
  const additionalServices = [
    {
      title: "24/7 Pharmacy Services",
      description: "Easy access to medicines",
      icon: Microscope,
      color: "from-blue-600 to-teal-600",
    },
    {
      title: "Emergency Ambulance",
      description: "Critical care support",
      icon: Ambulance,
      color: "from-blue-600 to-teal-600",
    },
    {
      title: "Skilled Medical Staff",
      description: "Personalized treatment",
      icon: CheckCircle,
      color: "from-blue-600 to-teal-600",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <SectionHeader
          badge="Why Choose Asha Hospital"
          title="Why"
          highlightText="ASHA HOSPITAL"
          description="Experience world-class healthcare with compassionate care and cutting-edge medical technology"
        />

        {/* Main Features - Reusing existing FeatureCard component */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-r from-blue-50 via-white to-teal-50 rounded-3xl p-12 border border-gray-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Complete Medical Services{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              Under One Roof
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
