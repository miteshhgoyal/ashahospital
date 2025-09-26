// components/testimonials/TestimonialsMain.jsx
import React from "react";
import SectionHeader from "@/components/SectionHeader";
import TestimonialCard from "@/components/TestimonialCard";

const TestimonialsMain = ({ testimonials }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <SectionHeader
          badge="Patient Testimonials"
          title="Meet Our"
          highlightText="Happy Patients"
          description="Real stories from real patients who experienced exceptional care and treatment at Asha Hospital. Their satisfaction is our greatest achievement."
        />

        {/* Featured Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Compact Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {testimonials.slice(3).map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              variant="compact"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMain;
