// components/testimonials/TestimonialsHero.jsx
import React from "react";
import { Heart, Star, Users, Award } from "lucide-react";
import Image from "next/image";

const TestimonialsHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-rose-600 via-pink-700 to-red-600 text-white pt-20">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Heart className="w-4 h-4 mr-2" />
              <span className="font-semibold text-sm">
                Patient Testimonials
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Stories of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                Hope & Healing
              </span>
            </h1>

            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Real stories from real patients who experienced exceptional care
              and treatment at Asha Hospital. Their satisfaction is our greatest
              achievement and motivation to continue providing world-class
              healthcare.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">
                  50,000+
                </div>
                <div className="text-sm text-white/70">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <div className="text-sm text-white/70">5-Star Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-sm text-white/70">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=600&auto=format&fit=crop"
                  alt="Happy Patients"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm text-rose-600 p-4 rounded-2xl shadow-xl animate-pulse">
                <Heart className="w-8 h-8" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm text-pink-600 p-4 rounded-2xl shadow-xl animate-bounce">
                <Award className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsHero;
