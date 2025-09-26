// components/team/TeamStats.jsx
import React from "react";
import { Users, Award, Heart, Clock } from "lucide-react";

const TeamStats = () => {
  const stats = [
    {
      number: "5+",
      label: "Specialist Doctors",
      description: "Expert medical professionals",
      icon: Users,
      color: "from-blue-500 to-indigo-600",
    },
    {
      number: "50+",
      label: "Years Combined Experience",
      description: "Proven medical expertise",
      icon: Award,
      color: "from-emerald-500 to-teal-600",
    },
    {
      number: "10,000+",
      label: "Patients Treated",
      description: "Lives touched and healed",
      icon: Heart,
      color: "from-rose-500 to-pink-600",
    },
    {
      number: "24/7",
      label: "Medical Care",
      description: "Round-the-clock support",
      icon: Clock,
      color: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Our Team{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              in Numbers
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dedicated to providing exceptional healthcare with compassion and
            expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamStats;
