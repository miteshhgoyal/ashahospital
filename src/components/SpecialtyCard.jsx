import Image from "next/image";

const SpecialtyCard = ({ specialty, index }) => {
  return (
    <div
      className={`${specialty.bgColor} p-2 pb-6 rounded-2xl transition-all duration-300 hover:scale-105 group cursor-pointer border border-gray-200`}
    >
      {/* Icon Container */}
      {/* <div className="flex justify-center mb-4">
        <div
          className={`w-16 h-16 bg-gradient-to-r ${specialty.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
        >
          <specialty.icon className="w-8 h-8 text-white" />
        </div>
      </div> */}

      <div className="flex justify-center mb-4">
        <div
          className={`w-full h-40 overflow-hidden rounded-xl flex items-center justify-center transition-transform`}
        >
          <Image
            src={specialty.image}
            width={500}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Specialty Name */}
      <h3 className="text-lg font-bold text-gray-800 text-center mb-3 leading-tight">
        {specialty.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 text-center leading-relaxed">
        {specialty.description}
      </p>
    </div>
  );
};

export default SpecialtyCard;
