import React from "react";
import { Heart, Award, Users, ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";

const AboutHero = ({ content, stats }) => {
  return (
    <section className=" pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=600&auto=format&fit=crop"
                alt="About Asha Hospital"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
              <Heart className="w-4 h-4 mr-2 text-blue-600" />
              <span className="font-semibold text-sm text-blue-700">
                About Asha Hospital
              </span>
            </div>

            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Excellence in <span className="text-blue-600">Healthcare</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                For over {content.experience}, Asha Hospital has been Bihar's
                trusted name in comprehensive medical care, combining advanced
                technology with compassionate treatment.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.slice(0, 3).map((stat, index) => (
                <div key={index} className="text-center p-4  rounded-xl">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
