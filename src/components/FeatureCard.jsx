// components/FeatureCard.jsx
const FeatureCard = ({ feature, index }) => {
  return (
    <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 hover:border-blue-200 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          backgroundImage: `linear-gradient(to right, ${
            feature.color.split(" ")[1]
          }, ${feature.color.split(" ")[3]})`,
        }}
      />

      <div
        className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
      >
        <feature.icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
        {feature.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
