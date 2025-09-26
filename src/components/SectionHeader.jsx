// components/SectionHeader.jsx
const SectionHeader = ({
  badge,
  title,
  highlightText,
  description,
  className = "",
}) => {
  return (
    <div className={`text-center mb-20 ${className}`}>
      {badge && (
        <div className="inline-flex items-center px-4 py-2 bg-white/40 text-blue-600 rounded-full font-semibold text-sm mb-6">
          {badge}
        </div>
      )}

      {title && highlightText && (
        <>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {title}{" "}
            {highlightText && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600">
                {highlightText}
              </span>
            )}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full mx-auto mb-8" />
        </>
      )}

      {description && (
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
