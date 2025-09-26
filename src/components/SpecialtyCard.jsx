// components/SpecialtyCard.jsx
const SpecialtyCard = ({ specialty, index }) => {
  return (
    <div
      className={`${specialty.bgColor} p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer border border-gray-100`}
    >
      <div
        className={`w-16 h-16 bg-gradient-to-r ${specialty.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
      >
        <specialty.icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-sm font-bold text-gray-800 text-center leading-tight">
        {specialty.name}
      </h3>
    </div>
  );
};

export default SpecialtyCard;
