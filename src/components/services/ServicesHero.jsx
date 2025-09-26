import React from "react";
import { Stethoscope, Award, Users, Heart, Shield } from "lucide-react";
import Image from "next/image";

const ServicesHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-teal-600 via-blue-700 to-indigo-600 text-white pt-20">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Stethoscope className="w-4 h-4 mr-2" />
              <span className="font-semibold text-sm">
                Our Medical Services
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Comprehensive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                Healthcare
              </span>{" "}
              Services
            </h1>

            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Experience complete medical care across multiple specialties with
              advanced technology, expert doctors, and compassionate
              patient-centered approach.
            </p>

            {/* Service Highlights */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">
                    8+ Services
                  </div>
                  <div className="text-sm text-white/70">
                    Medical Specialties
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">24/7 Care</div>
                  <div className="text-sm text-white/70">
                    Emergency Services
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">
                    Expert Team
                  </div>
                  <div className="text-sm text-white/70">Skilled Doctors</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">
                    Advanced Care
                  </div>
                  <div className="text-sm text-white/70">Modern Technology</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=600&auto=format&fit=crop"
                  alt="Medical Services"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm text-blue-600 p-4 rounded-2xl shadow-xl animate-pulse">
                <Award className="w-8 h-8" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm text-teal-600 p-4 rounded-2xl shadow-xl animate-bounce">
                <Heart className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
