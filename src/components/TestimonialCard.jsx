// components/TestimonialCard.jsx
import { Star, Quote } from "lucide-react";

const TestimonialCard = ({ testimonial, variant = "default" }) => {
  if (variant === "compact") {
    return (
      <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="flex items-start gap-6">
          <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
            {testimonial.avatar}
          </div>
          <div className="flex-1">
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
    <div className="group bg-gradient-to-r from-blue-50 via-white to-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 relative border border-gray-100">
      <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full flex items-center justify-center">
        <Quote className="w-4 h-4 text-white" />
      </div>

      <div className="flex mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-blue-400 fill-current" />
        ))}
      </div>

      <p className="text-gray-700 leading-relaxed mb-8 text-lg">
        "{testimonial.content}"
      </p>

      <div className="flex items-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
          {testimonial.avatar}
        </div>
        <div>
          <h4 className="font-bold text-lg text-gray-900">
            {testimonial.name}
          </h4>
          <p className="text-blue-600 font-semibold">{testimonial.treatment}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
