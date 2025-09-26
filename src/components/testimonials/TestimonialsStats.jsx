// components/testimonials/TestimonialsStats.jsx
import React from "react";
import { Heart, Star, Users, Award } from "lucide-react";

const TestimonialsStats = ({ stats }) => {
  const testimonialsStats = [
    {
      number: "50,000+",
      label: "Happy Patients",
      description: "Satisfied with our care",
      icon: Heart,
      color: "from-purple-500 to-blue-600",
    },
    {
      number: "98%",
      label: "Satisfaction Rate",
      description: "Patient satisfaction score",
      icon: Star,
      color: "from-amber-500 to-yellow-600",
    },
    {
      number: "5,000+",
      label: "Positive Reviews",
      description: "Across all platforms",
      icon: Users,
      color: "from-blue-500 to-indigo-600",
    },
    {
      number: "15+",
      label: "Years of Trust",
      description: "Building patient relationships",
      icon: Award,
      color: "from-blue-500 to-blue-600",
    },
  ];

  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Patient{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Satisfaction
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence in patient care
            and satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonialsStats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br  rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
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

export default TestimonialsStats;
