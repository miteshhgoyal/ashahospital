// components/WhyAshaHospital.jsx
import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { Users, Building2, Heart, Shield, Globe } from "lucide-react";

const WhyAshaHospital = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Team of Specialists",
      description:
        "Our panel includes renowned doctors across cardiology, neurology, orthopedics, gastroenterology, oncology, nephrology, pediatrics, gynecology, and more.",
    },
    {
      icon: Building2,
      title: "State-of-the-Art Infrastructure",
      description:
        "Equipped with modern operation theatres, advanced ICU facilities, digital diagnostics, robotic surgeries, and 24×7 emergency care.",
    },
    {
      icon: Heart,
      title: "Patient-First Approach",
      description:
        "We believe in delivering human-touch care, focusing on safety, empathy, and transparency in every treatment.",
    },
    {
      icon: Shield,
      title: "Comprehensive Services",
      description:
        "From preventive health check-ups to complex surgeries, we provide end-to-end healthcare solutions under one roof.",
    },
    {
      icon: Globe,
      title: "International Patient Care",
      description:
        "Trusted by patients across the globe, offering dedicated support, visa assistance, and multilingual staff for a seamless medical journey.",
    },
  ];

  const gradientColors = [
    "from-blue-500/10 to-blue-600/20",
    "from-emerald-500/10 to-emerald-600/20",
    "from-purple-500/10 to-purple-600/20",
    "from-orange-500/10 to-orange-600/20",
    "from-teal-500/10 to-teal-600/20",
  ];

  const iconColors = [
    "text-blue-600",
    "text-emerald-600",
    "text-purple-600",
    "text-orange-600",
    "text-teal-600",
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <SectionHeader
          badge="Why Choose Us"
          title="Why"
          highlightText="Asha Hospital"
          description="Best Neurology, Gynaecology & Orthopaedic Care in Muzaffarpur"
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 hover:border-gray-200"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  gradientColors[index % gradientColors.length]
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Top Border Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <feature.icon
                  className={`w-14 h-14 ${
                    iconColors[index % iconColors.length]
                  } mb-6 group-hover:scale-110 transition-transform duration-300`}
                />

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row - Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.slice(3).map((feature, index) => (
            <div
              key={index + 3}
              className="group relative overflow-hidden bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 hover:border-gray-200"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  gradientColors[(index + 3) % gradientColors.length]
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Top Border Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <feature.icon
                  className={`w-14 h-14 ${
                    iconColors[(index + 3) % iconColors.length]
                  } mb-6 group-hover:scale-110 transition-transform duration-300`}
                />

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAshaHospital;
