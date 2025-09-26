import React from "react";
import {
  Users,
  Award,
  Heart,
  Stethoscope,
  ArrowRight,
  Star,
} from "lucide-react";
import Image from "next/image";

const TeamHero = () => {
  return (
    <section className="bg-gradient-to-b  pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-violet-50 rounded-full border border-violet-100">
              <Users className="w-4 h-4 mr-2 text-violet-600" />
              <span className="font-semibold text-sm text-violet-700">
                Our Medical Team
              </span>
            </div>

            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Expert <span className="text-violet-600">Medical Team</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                At Asha Hospital, Muzaffarpur, we provide advanced medical care
                across key specialties with a focus on Neurology, Obstetrics &
                Gynaecology, and Orthopaedics.
              </p>
            </div>

            {/* Team Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className=" p-6 rounded-xl border border-gray-100 text-center">
                <div className="text-3xl font-bold text-violet-600 mb-2">
                  25+
                </div>
                <div className="text-sm text-gray-600">Expert Doctors</div>
              </div>
              <div className=" p-6 rounded-xl border border-gray-100 text-center">
                <div className="text-3xl font-bold text-violet-600 mb-2">
                  15+
                </div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              {[
                {
                  icon: Award,
                  title: "Highly Qualified Specialists",
                  desc: "Board-certified doctors with advanced training",
                },
                {
                  icon: Heart,
                  title: "Compassionate Care",
                  desc: "Patient-centered approach to treatment",
                },
                {
                  icon: Stethoscope,
                  title: "Modern Treatment",
                  desc: "Latest medical techniques and technology",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-violet-50 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=600&auto=format&fit=crop"
                alt="Medical Team"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Rating Badge */}
            <div className="absolute -top-6 -left-6  p-4 rounded-2xl shadow-lg">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <div className="text-sm font-semibold text-gray-900">4.9/5</div>
              </div>
              <div className="text-xs text-gray-600">Patient Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
