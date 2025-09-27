// components/TestimonialCard.jsx
import { Star, Quote } from "lucide-react";

const TestimonialCard = ({ testimonial, variant = "default" }) => {
  // Shared mobile layout for both variants
  const mobileLayout = (
    <>
      {/* Mobile Rating Stars */}
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-blue-400 fill-current" />
        ))}
      </div>

      {/* Mobile Content */}
      <p className="text-gray-700 leading-relaxed mb-6 text-base">
        "{testimonial.content}"
      </p>

      {/* Mobile Author Info */}
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base mr-3 flex-shrink-0">
          {testimonial.avatar}
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-bold text-base text-gray-900 truncate">
            {testimonial.name}
          </h4>
          <p className="text-blue-600 font-semibold text-sm truncate">
            {testimonial.treatment}
          </p>
        </div>
      </div>
    </>
  );

  if (variant === "compact") {
    return (
      <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        {/* Mobile Layout (same for both variants) */}
        <div className="block lg:hidden">{mobileLayout}</div>

        {/* Desktop Compact Layout */}
        <div className="hidden lg:flex lg:items-start lg:gap-6">
          <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
            {testimonial.avatar}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-4 mb-3">
              <h4 className="font-bold text-lg text-gray-900">
                {testimonial.name}
              </h4>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-blue-400 fill-current"
                  />
                ))}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-2">
              "{testimonial.content}"
            </p>

            <p className="text-blue-600 font-semibold text-sm">
              {testimonial.treatment}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-gradient-to-r from-blue-50 via-white to-blue-50 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 relative border border-gray-100">
      {/* Mobile Layout (same for both variants) */}
      <div className="block lg:hidden">{mobileLayout}</div>

      {/* Desktop Default Layout */}
      <div className="hidden lg:block">
        {/* Quote Icon */}
        <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full flex items-center justify-center">
          <Quote className="w-4 h-4 text-white" />
        </div>

        {/* Rating Stars */}
        <div className="flex mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-blue-400 fill-current" />
          ))}
        </div>

        {/* Testimonial Content */}
        <p className="text-gray-700 leading-relaxed mb-8 text-lg">
          "{testimonial.content}"
        </p>

        {/* Author Info */}
        <div className="flex items-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">
            {testimonial.avatar}
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="font-bold text-lg text-gray-900 truncate">
              {testimonial.name}
            </h4>
            <p className="text-blue-600 font-semibold text-base truncate">
              {testimonial.treatment}
            </p>
          </div>
        </div>

        {/* Desktop hover effect */}
        <div className="lg:group-hover:scale-105 transition-transform duration-500"></div>
      </div>
    </div>
  );
};

export default TestimonialCard;
