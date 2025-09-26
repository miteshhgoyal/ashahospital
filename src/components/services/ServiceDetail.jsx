import React from "react";
import { CheckCircle, Award, ArrowRight, Clock, Users } from "lucide-react";
import Image from "next/image";

const ServiceDetail = ({ service, index, isReversed = false }) => {
  return (
    <section className={`py-24 ${index % 2 === 0 ? "" : "bg-gradient-to-b "}`}>
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
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Floating Icon */}
              <div
                className={`absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-xl`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* 24/7 Badge */}
              <div className="absolute -bottom-6 -left-6 /90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`space-y-8 ${isReversed ? "lg:col-start-1" : ""}`}>
            {/* Header */}
            <div>
              <div
                className={`inline-flex items-center px-4 py-2 ${service.bgColor} text-gray-600 rounded-full font-semibold text-sm mb-6`}
              >
                <service.icon className="w-4 h-4 mr-2" />
                Medical Service
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {service.title}
              </h2>

              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {service.subtitle}
              </p>

              <div
                className={`w-24 h-1 bg-gradient-to-r ${service.color} rounded-full mb-8`}
              ></div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              {service.description}
            </p>

            {/* Why Choose Us */}
            {service.whyChoose && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-blue-600" />
                  Why Choose Our {service.title.split(" ")[0]} Care?
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {service.whyChoose.slice(0, 3).map((item, idx) => (
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
            {(service.conditions ||
              service.services ||
              service.keyServices) && (
              <div
                className={`bg-gradient-to-br ${service.bgColor} to-white rounded-2xl p-6 border border-gray-100`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.conditions
                    ? "Conditions We Treat"
                    : "Our Key Services"}
                </h3>

                {service.conditions && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.conditions.slice(0, 6).map((condition, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">
                          {condition}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {service.services && (
                  <div className="space-y-4">
                    {Object.entries(service.services)
                      .slice(0, 2)
                      .map(([key, value], idx) => (
                        <div key={idx}>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {key}:
                          </h4>
                          <div className="grid grid-cols-1 gap-2 ml-4">
                            {value.slice(0, 2).map((item, itemIdx) => (
                              <div
                                key={itemIdx}
                                className="flex items-center gap-2"
                              >
                                <ArrowRight className="w-3 h-3 text-blue-600 flex-shrink-0" />
                                <span className="text-gray-700 text-sm">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                  </div>
                )}

                {service.keyServices && (
                  <div className="grid grid-cols-1 gap-2">
                    {service.keyServices.slice(0, 4).map((serviceItem, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">
                          {serviceItem}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Commitment */}
            {service.commitment && (
              <div className="bg-gradient-to-r from-blue-50 to-blue-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  Our Commitment
                </h3>
                <p className="text-gray-700 leading-relaxed italic">
                  "{service.commitment}"
                </p>
              </div>
            )}

            {/* CTA Button */}
            <div className="pt-4">
              <button
                className={`bg-gradient-to-r ${service.color} text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2`}
              >
                Book Service
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
