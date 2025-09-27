// components/FeatureCard.jsx
const FeatureCard = ({ feature, index }) => {
  return (
    <div className="group bg-white/40 backdrop-blur-sm p-6 py-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 hover:border-blue-200 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity" />

      <feature.icon className="w-12 h-12 text-blue-700 mb-6" />

      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
        {feature.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
