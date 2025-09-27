"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <div className="relative">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-600 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : index < currentSlide
                  ? "opacity-0 -translate-x-8"
                  : "opacity-0 translate-x-8"
              }`}
              style={{
                position: index === currentSlide ? "relative" : "absolute",
                top: index !== currentSlide ? 0 : "auto",
                left: index !== currentSlide ? 0 : "auto",
                width: index !== currentSlide ? "100%" : "auto",
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-12 sm:py-16 lg:py-24">
                {/* Content */}
                <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
                  {/* Badge */}
                  <div
                    className={`transition-all duration-500 delay-100 ${
                      index === currentSlide
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <span className="inline-block text-xs sm:text-sm font-semibold text-blue-700 bg-blue-100 px-3 sm:px-4 py-2 rounded-full border border-blue-200">
                      Healthcare Excellence
                    </span>
                  </div>

                  {/* Title */}
                  <div
                    className={`transition-all duration-500 delay-200 ${
                      index === currentSlide
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-4">
                      {slide.title}
                    </h1>
                    <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded mb-4 sm:mb-6"></div>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`transition-all duration-600 delay-200 order-1 lg:order-2 ${
                    index === currentSlide
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-6"
                  }`}
                >
                  <div className="relative group">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={700}
                      height={500}
                      className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl group-hover:rounded-2xl transition-all duration-300"
                      priority={index === 0}
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl group-hover:rounded-2xl transition-all duration-300"></div>

                    {/* Corner accent */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white backdrop-blur-sm rounded-xl border border-gray-200/70 flex items-center justify-center transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed z-10"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white backdrop-blur-sm rounded-xl border border-gray-200/70 flex items-center justify-center transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed z-10"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-blue-600 w-6 sm:w-8"
                : "bg-white/70 hover:bg-white/90 w-2 sm:w-2.5 backdrop-blur-sm border border-gray-200/50"
            } disabled:cursor-not-allowed`}
          />
        ))}
      </div>

      {/* Progress */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-gray-200">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-300 ease-out"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </section>
  );
};

export default HeroSlider;
