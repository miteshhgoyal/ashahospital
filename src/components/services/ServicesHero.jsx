import React from "react";
import {
  Stethoscope,
  Heart,
  Shield,
  Clock,
  ArrowRight,
  Award,
} from "lucide-react";
import Image from "next/image";

const ServicesHero = () => {
  return (
    <section className=" pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image First */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop"
                alt="Medical Services"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">8+</div>
                <div className="text-sm text-gray-600">Medical Services</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
              <Stethoscope className="w-4 h-4 mr-2 text-blue-600" />
              <span className="font-semibold text-sm text-blue-700">
                Our Medical Services
              </span>
            </div>

            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Comprehensive <span className="text-blue-600">Healthcare</span>{" "}
                Services
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Experience complete medical care across multiple specialties
                with advanced technology, expert doctors, and compassionate
                patient-centered approach.
              </p>
            </div>

            {/* Service Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Heart,
                  title: "8+ Services",
                  desc: "Medical Specialties",
                },
                { icon: Clock, title: "24/7 Care", desc: "Emergency Services" },
                { icon: Award, title: "Expert Team", desc: "Skilled Doctors" },
                {
                  icon: Shield,
                  title: "Advanced Care",
                  desc: "Modern Technology",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl border border-blue-200"
                >
                  <div className="w-10 h-10 bg-white/50 backdrop-blur-xs rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">
                      {item.title}
                    </div>
                    <div className="text-xs text-gray-600">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
