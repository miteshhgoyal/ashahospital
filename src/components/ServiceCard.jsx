// components/ServiceCard.jsx
const ServiceCard = ({ service, index }) => {
  return (
    <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100">
      <div
        className={`bg-gradient-to-r ${service.color} p-8 text-center relative`}
      >
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10">
          <service.icon className="w-16 h-16 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
          <h4 className="text-xl font-bold text-white">{service.title}</h4>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 text-center leading-relaxed">
          Specialized care with experienced professionals and modern equipment
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
