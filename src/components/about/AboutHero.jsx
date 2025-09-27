import React from "react";
import { Heart, Award, Users, ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";

const AboutHero = ({ content, stats }) => {
  return (
    <section className="pt-8 pb-12 md:pt-12 md:pb-16 lg:pt-16 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Mobile Header */}
        <div className="block md:hidden mb-8">
          <div className="inline-flex items-center px-3 py-2 bg-blue-50 rounded-full border border-blue-100 mb-4">
            <Heart className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-xs sm:text-sm text-blue-700">
              About Asha Hospital
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-4">
            Excellence in <span className="text-blue-600">Healthcare</span>
          </h1>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start lg:items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=600&auto=format&fit=crop"
                alt="About Asha Hospital - Modern healthcare facility"
                width={600}
                height={500}
                className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Optional overlay for better text contrast on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent md:hidden"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
            {/* Desktop/Tablet Header */}
            <div className="hidden md:block">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-6 lg:mb-8">
                <Heart className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
                <span className="font-semibold text-sm text-blue-700">
                  About Asha Hospital
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 lg:mb-6">
                Excellence in <span className="text-blue-600">Healthcare</span>
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                Asha Hospital, Muzaffarpur is a leading multi-specialty
                healthcare center providing trusted and advanced treatment in
                Neurology, Obstetrics & Gynaecology, Orthopaedics, and Critical
                Care.
              </p>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                With modern facilities, experienced doctors, and a patient-first
                approach, we aim to deliver healthcare that combines medical
                excellence with compassion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
