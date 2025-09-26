// components/testimonials/TestimonialsCallToAction.jsx
import React from "react";
import { Calendar, Phone, ArrowRight, Heart, Star } from "lucide-react";

const TestimonialsCallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-700 to-teal-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl text-center">
        <div className="inline-flex items-center px-4 py-2 /10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
          <Star className="w-4 h-4 mr-2 text-yellow-400" />
          <span className="text-white font-semibold text-sm">
            Join Our Happy Patients
          </span>
        </div>

        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Experience{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
            Exceptional Care
          </span>
          ?
        </h2>

        <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
          Join thousands of satisfied patients who have experienced world-class
          healthcare at Asha Hospital. Your journey to better health starts with
          a single appointment.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto mb-16">
          <button className="group  text-gray-900 px-10 py-5 rounded-xl font-bold text-lg hover: transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 flex items-center justify-center gap-3">
            <Calendar className="w-6 h-6" />
            Book Your Appointment
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover: hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3">
            <Phone className="w-6 h-6" />
            Call Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <Heart className="w-10 h-10 text-rose-400 mx-auto mb-4" />
            <h3 className="font-bold text-white mb-2 text-lg">
              Compassionate Care
            </h3>
            <p className="text-white/80 text-sm">
              Treating every patient with empathy and respect
            </p>
          </div>
          <div className="/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <Star className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
            <h3 className="font-bold text-white mb-2 text-lg">
              5-Star Service
            </h3>
            <p className="text-white/80 text-sm">
              Consistently rated excellent by our patients
            </p>
          </div>
          <div className="/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <ArrowRight className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
            <h3 className="font-bold text-white mb-2 text-lg">
              Quick Response
            </h3>
            <p className="text-white/80 text-sm">
              Fast appointment scheduling and care delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCallToAction;
