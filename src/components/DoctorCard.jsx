// components/DoctorCard.jsx
import { MapPin, Stethoscope } from "lucide-react";
import Image from "next/image";

const DoctorCard = ({ doctor, index }) => {
  return (
    <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <Image
          src={doctor.image}
          alt={doctor.name}
          width={400}
          height={400}
          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Experience Badge */}
        <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
          {doctor.experience}
        </div>

        {/* Stethoscope Icon */}
        <div
          className={`absolute top-4 right-4 w-10 h-10 bg-gradient-to-r ${doctor.color} rounded-full flex items-center justify-center`}
        >
          <Stethoscope className="w-5 h-5 text-white" />
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Doctor Information */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 transition-colors group-hover:text-blue-600">
            {doctor.name}
          </h3>
          <p className="text-blue-600 font-semibold mb-3 text-lg">
            {doctor.specialty}
          </p>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {doctor.qualifications}
          </p>
        </div>

        {/* Location Section - Now properly positioned */}
        <div className="flex items-center text-gray-500 text-sm pt-4 border-t border-gray-100">
          <MapPin className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
          <span className="truncate">{doctor.location}</span>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
