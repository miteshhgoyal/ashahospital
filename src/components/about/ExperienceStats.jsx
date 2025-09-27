// components/about/ExperienceStats.jsx
import React from "react";

const ExperienceStats = ({ stats }) => {
  const statsWithColors = stats.map((stat, index) => ({
    ...stat,
    color: [
      "from-blue-500 to-indigo-600",
      "from-purple-500 to-blue-600",
      "from-blue-500 to-blue-600",
      "from-blue-500 to-purple-600",
    ][index % 4],
  }));

  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl text-center">
        <div className="inline-flex items-center px-4 py-2 /10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
          <span className="text-white font-semibold text-sm">
            Our Achievements
          </span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          More Than{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
            15 Years
          </span>{" "}
          of Excellence
        </h2>

        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          At Asha Hospital, we are committed to bringing compassionate,
          comprehensive, and cutting-edge healthcare closer to the people of
          Muzaffarpur and surrounding regions.
        </p>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsWithColors.map((stat, index) => (
            <div
              key={index}
              className="/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:/20 transition-all duration-300 group"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </h3>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default ExperienceStats;
