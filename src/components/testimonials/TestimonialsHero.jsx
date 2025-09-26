import React from "react";
import {
  Heart,
  Star,
  Users,
  Award,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

const TestimonialsHero = () => {
  return (
    <section className=" pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-rose-50 rounded-full border border-rose-100">
              <MessageCircle className="w-4 h-4 mr-2 text-rose-600" />
              <span className="font-semibold text-sm text-rose-700">
                Patient Testimonials
              </span>
            </div>

            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Stories of <span className="text-rose-600">Hope & Healing</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Real stories from real patients who experienced exceptional care
                and treatment at Asha Hospital. Their satisfaction is our
                greatest achievement and motivation.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center bg-rose-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-rose-600 mb-1">
                  50,000+
                </div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center bg-yellow-50 p-6 rounded-xl">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600">5-Star Reviews</div>
              </div>
              <div className="text-center bg-green-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-1">
                  98%
                </div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>

            {/* Patient Feedback Highlights */}
            <div className=" p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-2">
                    What Patients Say
                  </div>
                  <div className="text-gray-600 text-sm italic">
                    "Excellent care, professional staff, and modern facilities.
                    The doctors took time to explain everything clearly."
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    - Recent Patient Review
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop"
                alt="Happy Patients"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Testimonial Preview */}
            <div className="absolute -bottom-8 -right-8  p-6 rounded-2xl shadow-xl max-w-sm">
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600 mb-2">
                "Outstanding care and professional service. Highly recommended!"
              </div>
              <div className="text-xs text-gray-500">- Anjali S.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsHero;
