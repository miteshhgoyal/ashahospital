import React from "react";
import { Brain, Heart, Shield, Users, ArrowRight, Award } from "lucide-react";
import Image from "next/image";

const SpecialitiesHero = () => {
  return (
    <section className=" pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-6">
            <Brain className="w-4 h-4 mr-2 text-blue-600" />
            <span className="font-semibold text-sm text-blue-700">
              Our Medical Specialities
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Advanced <span className="text-blue-600">Medical Care</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Experience world-class healthcare across our key specialties with
            advanced technology, expert doctors, and compassionate care tailored
            to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Specialties */}
          <div className="space-y-6">
            {[
              { icon: Brain, title: "Neurology", desc: "Brain & Spine Care" },
              { icon: Heart, title: "Gynaecology", desc: "Women's Health" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6  rounded-xl hover:bg-blue-50 transition-colors group"
              >
                <div className="w-12 h-12  rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">{item.title}</div>
                  <div className="text-sm text-gray-600">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=600&auto=format&fit=crop"
                alt="Medical Specialities"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Right Specialties */}
          <div className="space-y-6">
            {[
              { icon: Shield, title: "Orthopedics", desc: "Bone & Joint Care" },
              { icon: Users, title: "Medicine", desc: "Internal Medicine" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6  rounded-xl hover:bg-blue-50 transition-colors group"
              >
                <div className="w-12 h-12  rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">{item.title}</div>
                  <div className="text-sm text-gray-600">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialitiesHero;
