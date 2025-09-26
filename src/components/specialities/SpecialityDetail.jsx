import React from "react";
import { CheckCircle, Award, ArrowRight, Clock } from "lucide-react";
import Image from "next/image";

const SpecialityDetail = ({ specialty, index, isReversed = false }) => {
  return (
    <section
      className={`py-24 ${
        index % 2 === 0 ? "" : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
            isReversed ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          {/* Image Section */}
          <div className={`relative ${isReversed ? "lg:col-start-2" : ""}`}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={specialty.image}
                  alt={specialty.title}
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Floating Icon */}
              <div
                className={`absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r ${specialty.color} rounded-2xl flex items-center justify-center shadow-xl`}
              >
                <specialty.icon className="w-8 h-8 text-white" />
              </div>

              {/* Stats Badge */}
              <div className="absolute -bottom-6 -left-6 /90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Available Care</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`space-y-8 ${isReversed ? "lg:col-start-1" : ""}`}>
            {/* Header */}
            <div>
              <div
                className={`inline-flex items-center px-4 py-2 ${specialty.bgColor} text-gray-600 rounded-full font-semibold text-sm mb-6`}
              >
                <specialty.icon className="w-4 h-4 mr-2" />
                Specialty Care
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {specialty.title}
              </h2>

              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {specialty.subtitle}
              </p>

              <div
                className={`w-24 h-1 bg-gradient-to-r ${specialty.color} rounded-full mb-8`}
              ></div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              {specialty.description}
            </p>

            {/* Why Choose Us */}
            {specialty.whyChoose && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-blue-600" />
                  Why Choose Our {specialty.title.split(" ")[0]} Care?
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {specialty.whyChoose.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Conditions/Services */}
            {(specialty.conditions ||
              specialty.services ||
              specialty.keyServices) && (
              <div
                className={`bg-gradient-to-br ${specialty.bgColor} to-white rounded-2xl p-6 border border-gray-100`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {specialty.conditions
                    ? "Conditions We Treat"
                    : specialty.services
                    ? "Our Key Services"
                    : "Key Services"}
                </h3>

                {specialty.conditions && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {specialty.conditions.slice(0, 6).map((condition, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">
                          {condition}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {specialty.services && (
                  <div className="space-y-3">
                    {Object.entries(specialty.services)
                      .slice(0, 3)
                      .map(([key, value], idx) => (
                        <div key={idx}>
                          <span className="font-semibold text-gray-900">
                            {key}:
                          </span>
                          <span className="text-gray-700 ml-2">{value}</span>
                        </div>
                      ))}
                  </div>
                )}

                {specialty.keyServices && (
                  <div className="grid grid-cols-1 gap-2">
                    {specialty.keyServices.slice(0, 4).map((service, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Treatment Benefits */}
            {specialty.treatmentBenefits && (
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-teal-600" />
                  Treatment Benefits
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {specialty.treatmentBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Button */}
            <div className="pt-4">
              <button
                className={`bg-gradient-to-r ${specialty.color} text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2`}
              >
                Book Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialityDetail;
