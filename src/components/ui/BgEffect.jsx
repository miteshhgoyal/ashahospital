import React from "react";

const BgEffect = () => {
  // Configuration for gradient blobs
  const gradientBlobs = [
    {
      position: "top-[-15%] left-[-8%]",
      size: "w-[25rem] h-[25rem] lg:w-[35rem] lg:h-[35rem] 2xl:w-[42rem] 2xl:h-[42rem]",
      gradient: "from-blue-100 to-blue-200",
      opacity: "opacity-40",
      blur: "blur-[120px] max-md:blur-[180px]",
      delay: "animation-delay-2",
    },
    {
      position: "top-[20%] right-[-10%]",
      size: "w-[30rem] h-[20rem] lg:w-[40rem] lg:h-[28rem] 2xl:w-[45rem] 2xl:h-[32rem]",
      gradient: "from-blue-100 to-cyan-200",
      opacity: "opacity-35",
      blur: "blur-[100px] max-md:blur-[160px]",
      delay: "animation-delay-4",
    },
    {
      position: "bottom-[-20%] left-[10%]",
      size: "w-[28rem] h-[28rem] lg:w-[38rem] lg:h-[38rem] 2xl:w-[40rem] 2xl:h-[45rem]",
      gradient: "from-blue-100 to-purple-200",
      opacity: "opacity-30",
      blur: "blur-[110px] max-md:blur-[170px]",
      delay: "animation-delay-6",
    },
    {
      position: "bottom-[15%] right-[-5%]",
      size: "w-[22rem] h-[22rem] lg:w-[32rem] lg:h-[32rem] 2xl:w-[38rem] 2xl:h-[38rem]",
      gradient: "from-indigo-100 to-blue-200",
      opacity: "opacity-25",
      blur: "blur-[90px] max-md:blur-[150px]",
      delay: "animation-delay-8",
    },
  ];

  // Main healthcare dots configuration
  const mainDots = [
    {
      cx: 30,
      cy: 30,
      r: 2,
      color: "text-blue-400",
      opacityRange: "0.2;0.6;0.2",
      duration: "4s",
      hasRadiusAnimation: true,
    },
    {
      cx: 15,
      cy: 15,
      r: 1.5,
      color: "text-blue-300",
      opacityRange: "0.1;0.5;0.1",
      duration: "5s",
    },
    {
      cx: 45,
      cy: 15,
      r: 1,
      color: "text-blue-400",
      opacityRange: "0.15;0.4;0.15",
      duration: "3.5s",
    },
    {
      cx: 15,
      cy: 45,
      r: 1,
      color: "text-indigo-300",
      opacityRange: "0.1;0.3;0.1",
      duration: "6s",
    },
    {
      cx: 45,
      cy: 45,
      r: 0.8,
      color: "text-blue-300",
      opacityRange: "0.05;0.25;0.05",
      duration: "4.5s",
    },
  ];

  // Secondary dots configuration
  const secondaryDots = [
    {
      cx: 20,
      cy: 20,
      r: 1.5,
      color: "text-cyan-300",
      opacityRange: "0.3;0.8;0.3",
      duration: "3s",
      begin: "1s",
    },
    {
      cx: 10,
      cy: 30,
      r: 1,
      color: "text-blue-200",
      opacityRange: "0.2;0.6;0.2",
      duration: "4.5s",
      begin: "0.5s",
    },
    {
      cx: 30,
      cy: 10,
      r: 1.2,
      color: "text-blue-200",
      opacityRange: "0.1;0.4;0.1",
      duration: "5.5s",
      begin: "2s",
    },
  ];

  // Medical cross dots
  const crossDots = {
    vertical: [
      { x: 0, y: -20, r: 1.5, color: "text-blue-300", opacity: 0.8 },
      { x: 0, y: -10, r: 1.5, color: "text-blue-300", opacity: 0.8 },
      { x: 0, y: 0, r: 2, color: "text-blue-400", opacity: 0.5 },
      { x: 0, y: 10, r: 1.5, color: "text-blue-300", opacity: 0.8 },
      { x: 0, y: 20, r: 1.5, color: "text-blue-300", opacity: 0.8 },
    ],
    horizontal: [
      { x: -20, y: 0, r: 1.5, color: "text-blue-300", opacity: 0.8 },
      { x: -10, y: 0, r: 1.5, color: "text-blue-300", opacity: 0.8 },
      { x: 10, y: 0, r: 1.5, color: "text-blue-300", opacity: 0.8 },
      { x: 20, y: 0, r: 1.5, color: "text-blue-300", opacity: 0.8 },
    ],
  };

  // Corner accent dots
  const cornerDots = [
    { cx: 20, cy: 20, r: 1, color: "text-blue-200", opacity: 0.3 },
    { cx: 100, cy: 20, r: 1, color: "text-indigo-200", opacity: 0.3 },
    { cx: 20, cy: 100, r: 1, color: "text-indigo-200", opacity: 0.3 },
    { cx: 100, cy: 100, r: 1, color: "text-blue-200", opacity: 0.3 },
  ];

  // Floating dots configuration
  const floatingDotStyles = [
    "w-2 h-2 bg-blue-400 opacity-30",
    "w-1.5 h-1.5 bg-blue-400 opacity-25",
    "w-1 h-1 bg-blue-400 opacity-35",
    "w-1.5 h-1.5 bg-indigo-400 opacity-20",
  ];

  // Pulsing dots configuration
  const pulsingDots = [
    {
      position: "top-1/5 left-1/4",
      size: "w-3 h-3",
      color: "bg-blue-200",
      opacity: "opacity-20",
      delay: "animation-delay-1",
    },
    {
      position: "top-3/4 right-1/3",
      size: "w-2 h-2",
      color: "bg-blue-200",
      opacity: "opacity-25",
      delay: "animation-delay-3",
    },
    {
      position: "top-1/2 right-1/5",
      size: "w-2.5 h-2.5",
      color: "bg-blue-200",
      opacity: "opacity-15",
      delay: "animation-delay-5",
    },
    {
      position: "bottom-1/4 left-2/5",
      size: "w-2 h-2",
      color: "bg-indigo-200",
      opacity: "opacity-30",
      delay: "animation-delay-2",
    },
    {
      position: "top-1/3 right-2/5",
      size: "w-1.5 h-1.5",
      color: "bg-cyan-200",
      opacity: "opacity-25",
      delay: "animation-delay-4",
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Clean Healthcare Gradient Blobs */}
      {gradientBlobs.map((blob, index) => (
        <div
          key={`blob-${index}`}
          className={`absolute ${blob.position} ${blob.size} bg-gradient-to-r ${blob.gradient} ${blob.opacity} rounded-full animate-blob ${blob.delay} ${blob.blur}`}
        />
      ))}

      {/* Animated Healthcare Dot Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern
              id="healthcareDots"
              patternUnits="userSpaceOnUse"
              width="60"
              height="60"
            >
              {mainDots.map((dot, index) => (
                <circle
                  key={`main-dot-${index}`}
                  cx={dot.cx}
                  cy={dot.cy}
                  r={dot.r}
                  fill="currentColor"
                  className={dot.color}
                >
                  <animate
                    attributeName="opacity"
                    values={dot.opacityRange}
                    dur={dot.duration}
                    repeatCount="indefinite"
                  />
                  {dot.hasRadiusAnimation && (
                    <animate
                      attributeName="r"
                      values="1.5;2.5;1.5"
                      dur={dot.duration}
                      repeatCount="indefinite"
                    />
                  )}
                </circle>
              ))}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#healthcareDots)" />
        </svg>
      </div>

      {/* Additional Layered Dot Pattern with Different Timing */}
      <div className="absolute inset-0 opacity-15">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern
              id="secondaryDots"
              patternUnits="userSpaceOnUse"
              width="40"
              height="40"
            >
              {secondaryDots.map((dot, index) => (
                <circle
                  key={`secondary-dot-${index}`}
                  cx={dot.cx}
                  cy={dot.cy}
                  r={dot.r}
                  fill="currentColor"
                  className={dot.color}
                >
                  <animate
                    attributeName="opacity"
                    values={dot.opacityRange}
                    dur={dot.duration}
                    repeatCount="indefinite"
                    begin={dot.begin}
                  />
                </circle>
              ))}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#secondaryDots)" />
        </svg>
      </div>

      {/* Subtle Medical Cross Pattern with Dots */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern
              id="medicalDotsPattern"
              patternUnits="userSpaceOnUse"
              width="120"
              height="120"
            >
              <g transform="translate(60,60)">
                {/* Vertical line of dots */}
                {crossDots.vertical.map((dot, index) => (
                  <circle
                    key={`vertical-${index}`}
                    cx={dot.x}
                    cy={dot.y}
                    r={dot.r}
                    fill="currentColor"
                    className={dot.color}
                    opacity={dot.opacity}
                  />
                ))}

                {/* Horizontal line of dots */}
                {crossDots.horizontal.map((dot, index) => (
                  <circle
                    key={`horizontal-${index}`}
                    cx={dot.x}
                    cy={dot.y}
                    r={dot.r}
                    fill="currentColor"
                    className={dot.color}
                    opacity={dot.opacity}
                  />
                ))}
              </g>

              {/* Corner accent dots */}
              {cornerDots.map((dot, index) => (
                <circle
                  key={`corner-${index}`}
                  cx={dot.cx}
                  cy={dot.cy}
                  r={dot.r}
                  fill="currentColor"
                  className={dot.color}
                  opacity={dot.opacity}
                />
              ))}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#medicalDotsPattern)" />
        </svg>
      </div>

      {/* Clean Floating Dot Elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={`floating-${i}`}
            className={`absolute rounded-full ${
              floatingDotStyles[i % 4]
            } animate-float-dots`}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${5 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle Pulsing Dots */}
      {pulsingDots.map((dot, index) => (
        <div
          key={`pulsing-${index}`}
          className={`absolute ${dot.position} ${dot.size} ${dot.color} rounded-full ${dot.opacity} animate-pulse ${dot.delay}`}
        />
      ))}

      {/* Very Subtle Dot Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.4) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Clean Gradient Overlay for Healthcare Feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-blue-50/5 to-blue-50/8 opacity-60"></div>
    </div>
  );
};

export default BgEffect;
