"use client";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Play,
  ArrowRight,
  Heart,
  Shield,
} from "lucide-react";
import Image from "next/image";

const HeroSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}
          />
          <div className="absolute inset-0 bg-black/30" />

          <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-7xl h-full flex items-center min-h-screen pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
              {/* Content */}
              <div className="text-white space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-white font-semibold text-sm">
                    Bihar's Premier Healthcare
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {slide.title}
                </h1>

                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
                  {slide.subtitle}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-6">
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-white">
                      {slide.stats.patients}
                    </div>
                    <div className="text-sm text-white/70">Happy Patients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-white">
                      {slide.stats.doctors}
                    </div>
                    <div className="text-sm text-white/70">Expert Doctors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-white">
                      {slide.stats.experience}
                    </div>
                    <div className="text-sm text-white/70">
                      Years Experience
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <button className="group bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Book Appointment
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2">
                    <Play className="w-5 h-5" />
                    Watch Video
                  </button>
                </div>
              </div>

              {/* Hero Image */}
              <div className="hidden lg:block relative">
                <div className="relative z-10">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={600}
                      height={500}
                      className="w-full h-[500px] object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm text-blue-600 p-4 rounded-2xl shadow-xl animate-pulse">
                    <Heart className="w-8 h-8" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm text-teal-600 p-4 rounded-2xl shadow-xl animate-bounce">
                    <Shield className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-lg"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-lg"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
