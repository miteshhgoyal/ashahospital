"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";

const HeroSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 100);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 100);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 100);
  };

  return (
    <section className="relative  min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="relative">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : index < currentSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
              }`}
              style={{
                position: index === currentSlide ? "relative" : "absolute",
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
                {/* Content */}
                <div className="space-y-8">
                  {/* Simple Badge */}
                  <div
                    className={`inline-block transition-all duration-500 delay-200 ${
                      index === currentSlide
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <span className="text-sm font-medium text-blue-600  px-4 py-2 rounded-full">
                      Bihar's Premier Healthcare
                    </span>
                  </div>

                  {/* Clean Heading */}
                  <div
                    className={`transition-all duration-500 delay-300 ${
                      index === currentSlide
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {slide.subtitle}
                    </p>
                  </div>

                  {/* Simple Stats */}
                  <div
                    className={`flex gap-12 transition-all duration-500 delay-400 ${
                      index === currentSlide
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {slide.stats.patients}
                      </div>
                      <div className="text-sm text-gray-500">Patients</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {slide.stats.doctors}
                      </div>
                      <div className="text-sm text-gray-500">Doctors</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {slide.stats.experience}
                      </div>
                      <div className="text-sm text-gray-500">Years</div>
                    </div>
                  </div>

                  {/* Clean Buttons */}
                  <div
                    className={`flex gap-4 transition-all duration-500 delay-500 ${
                      index === currentSlide
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <a
                      href="/about"
                      className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>

                {/* Clean Image */}
                <div
                  className={`relative transition-all duration-500 delay-400 ${
                    index === currentSlide
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={600}
                    height={500}
                    className="w-full h-[500px] object-cover rounded-2xl"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover: rounded-full shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed z-10"
      >
        <ChevronLeft className="w-5 h-5 text-gray-600" />
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover: rounded-full shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed z-10"
      >
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-blue-600 w-8"
                : "bg-gray-300 hover:bg-gray-400 w-2"
            } disabled:cursor-not-allowed`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
        <div
          className="h-full bg-blue-600 transition-all duration-5000 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 backdrop-blur-sm px-4 py-2 rounded-full bg-white/80 text-sm font-medium text-gray-700 shadow-sm border border-gray-200 z-10">
        {String(currentSlide + 1).padStart(2, "0")} /{" "}
        {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
};

export default HeroSlider;
