"use client";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Settings,
  Zap,
  Star,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const HeroSlider = ({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true,
  showProgress = true,
  transitionDuration = 600,
  pauseOnHover = true,
  enableKeyboard = true,
  maxHeight = "90vh",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [currentSlide, autoPlay, isPaused, autoPlayInterval]);

  // Keyboard navigation
  useEffect(() => {
    if (!enableKeyboard) return;

    const handleKeyPress = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === " ") {
        e.preventDefault();
        setIsPaused(!isPaused);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [enableKeyboard, isPaused]);

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
    <section
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900"
      style={{ height: maxHeight }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-blue-600/20 via-transparent to-transparent rotate-12 animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-600/20 via-transparent to-transparent -rotate-12 animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl animate-bounce delay-500"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-400/30 to-purple-500/30 rounded-full blur-2xl animate-bounce delay-1500"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-6 lg:px-12 max-w-7xl h-full relative z-10">
        <div className="relative h-full flex items-center">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                index === currentSlide
                  ? "opacity-100 translate-x-0 scale-100"
                  : index < currentSlide
                  ? "opacity-0 -translate-x-12 scale-95"
                  : "opacity-0 translate-x-12 scale-95"
              }`}
            >
              <div className="h-full flex items-center">
                <div className="w-full">
                  {/* Main Layout - Mobile First Responsive */}
                  <div className="relative">
                    {/* Mobile Layout - Stack Content */}
                    <div className="lg:hidden space-y-6 px-4 py-8">
                      {/* Image First on Mobile */}
                      <div
                        className={`transition-all duration-700 delay-300 ${
                          index === currentSlide
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 translate-y-8 scale-95"
                        }`}
                      >
                        <div className="relative">
                          <div className="relative overflow-hidden rounded-2xl group">
                            <Image
                              src={slide.image}
                              alt={slide.title}
                              width={600}
                              height={400}
                              className="w-full h-[200px] sm:h-[250px] object-cover transition-transform duration-700 group-hover:scale-105"
                              priority={index === 0}
                            />
                            {/* Mobile Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>

                            {/* Mobile Floating Element */}
                            <div className="absolute top-3 right-3 w-8 h-8 bg-white/25 backdrop-blur-sm rounded-xl flex items-center justify-center">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content Below on Mobile */}
                      <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-4 sm:p-6 shadow-2xl">
                        {/* Mobile Badge */}
                        <div
                          className={`transition-all duration-700 delay-200 ${
                            index === currentSlide
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-4"
                          }`}
                        >
                          <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold mb-4 shadow-lg">
                            <Zap className="w-3 h-3" />
                            Healthcare Excellence
                            <Star className="w-3 h-3 fill-current" />
                          </div>
                        </div>

                        {/* Mobile Content */}
                        <div
                          className={`transition-all duration-700 delay-400 ${
                            index === currentSlide
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-4"
                          }`}
                        >
                          <h1 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-3">
                            {slide.title}
                          </h1>

                          {/* Mobile Underline */}
                          <div className="relative mb-4">
                            <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                            <div className="absolute top-0 left-0 w-4 h-0.5 bg-white rounded-full animate-pulse"></div>
                          </div>

                          <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                            {slide.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout - Asymmetrical Design */}
                    <div className="hidden lg:block">
                      {/* Content Section - Left Side */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 z-20">
                        <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 xl:p-12 shadow-2xl">
                          {/* Desktop Badge */}
                          <div
                            className={`transition-all duration-700 delay-200 ${
                              index === currentSlide
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                            }`}
                          >
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                              <Zap className="w-4 h-4" />
                              Healthcare Excellence
                              <Star className="w-4 h-4 fill-current" />
                            </div>
                          </div>

                          {/* Desktop Content */}
                          <div
                            className={`transition-all duration-700 delay-400 ${
                              index === currentSlide
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                            }`}
                          >
                            <h1 className="text-3xl xl:text-5xl font-bold text-white leading-tight mb-4">
                              {slide.title}
                            </h1>

                            {/* Desktop Animated Underline */}
                            <div className="relative mb-6">
                              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                              <div className="absolute top-0 left-0 w-8 h-1 bg-white rounded-full animate-pulse"></div>
                            </div>

                            <p className="text-lg xl:text-xl text-gray-200 leading-relaxed max-w-lg">
                              {slide.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Desktop Image Section - Right Side */}
                      <div className="w-3/5 ml-auto">
                        <div
                          className={`transition-all duration-700 delay-300 ${
                            index === currentSlide
                              ? "opacity-100 translate-x-0 scale-100"
                              : "opacity-0 translate-x-12 scale-95"
                          }`}
                        >
                          <div className="relative">
                            <div className="relative ml-auto w-full">
                              <div className="relative overflow-hidden rounded-3xl group">
                                <Image
                                  src={slide.image}
                                  alt={slide.title}
                                  width={700}
                                  height={500}
                                  className="w-full h-[350px] xl:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                                  priority={index === 0}
                                />

                                {/* Desktop Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                                {/* Desktop Floating Elements */}
                                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                                </div>
                              </div>

                              {/* Desktop Decorative Elements */}
                              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-pink-500/30 to-purple-600/30 rounded-full blur-xl"></div>
                              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-tl from-cyan-500/30 to-blue-600/30 rounded-full blur-2xl"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Controls */}
      {showControls && (
        <>
          {/* Settings Panel */}
          {showSettings && (
            <div className="absolute top-16 sm:top-20 right-3 sm:right-6 bg-white/15 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/20 p-4 sm:p-6 z-40 min-w-[200px] sm:min-w-[250px] shadow-2xl">
              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-white">
                <div className="flex items-center justify-between">
                  <span>Current Slide:</span>
                  <span className="bg-white/20 px-2 py-1 rounded-lg text-xs">
                    {currentSlide + 1} / {slides.length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Status:</span>
                  <span
                    className={`px-2 py-1 rounded-lg text-xs ${
                      isPaused ? "bg-red-500/30" : "bg-green-500/30"
                    }`}
                  >
                    {isPaused ? "Paused" : "Playing"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Interval:</span>
                  <span className="bg-white/20 px-2 py-1 rounded-lg text-xs">
                    {autoPlayInterval / 1000}s
                  </span>
                </div>
                <div className="pt-2 sm:pt-3 border-t border-white/20">
                  <p className="text-xs text-gray-300">
                    ← → Space | Hover to pause
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Bottom Controls Container - Centered */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30">
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Left Arrow */}
          {showControls && (
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-[-1px] transition-transform duration-200" />
            </button>
          )}

          {/* Indicators */}
          {showIndicators && (
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-xl rounded-full px-3 sm:px-4 py-2 sm:py-3 border border-white/20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                  className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-6 sm:w-8 h-2.5 sm:h-3 bg-gradient-to-r from-cyan-400 to-blue-500"
                      : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/30 hover:bg-white/50"
                  } disabled:cursor-not-allowed`}
                >
                  {index === currentSlide && (
                    <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Right Arrow */}
          {showControls && (
            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-[1px] transition-transform duration-200" />
            </button>
          )}
        </div>
      </div>

      {/* Enhanced Progress Bar */}
      {showProgress && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-300 ease-out relative overflow-hidden"
            style={{
              width: `${((currentSlide + 1) / slides.length) * 100}%`,
            }}
          >
            <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSlider;
