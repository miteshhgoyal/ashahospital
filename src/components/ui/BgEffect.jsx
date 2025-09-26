import React from "react";

const BgEffect = () => {
  return (
    <div>
      <div className="jsx-f07b767378fb732b fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Original Blob Effects */}
        <div className="jsx-f07b767378fb732b absolute bottom-[-38%] left-[-10%] w-[30rem] h-[30rem] lg:w-[38rem] lg:h-[34rem] 2xl:w-[40rem] 2xl:h-[40rem] bg-gradient-to-r from-black to-[#5E5E5E] opacity-40 rounded-full animate-blob animation-delay-2 blur-0 lg:blur-[80px] max-md:blur-[200px]"></div>
        <div className="jsx-f07b767378fb732b absolute bottom-[-26%] right-[-5%] w-[35rem] h-[24rem] lg:w-[42rem] lg:h-[28rem] 2xl:w-[48rem] 2xl:h-[32rem] bg-gradient-to-l from-[#B12424] to-[#FF5B19] opacity-30 rounded-full animate-blob animation-delay-4 blur-0 lg:blur-[80px] max-md:blur-[200px]"></div>
        <div className="jsx-f07b767378fb732b absolute bottom-[17%] right-[-10%] w-[30rem] h-[30rem] lg:w-[38rem] lg:h-[34rem] 2xl:w-[40rem] 2xl:h-[50rem] bg-gradient-to-r from-black to-[#5E5E5E] opacity-70 rounded-full animate-blob animation-delay-6 blur-0 lg:blur-[80px] max-md:blur-[200px]"></div>

        {/* Animated Dot Pattern Background */}
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern
                id="dotPattern"
                patternUnits="userSpaceOnUse"
                width="50"
                height="50"
              >
                <circle
                  cx="25"
                  cy="25"
                  r="1.5"
                  fill="currentColor"
                  className="text-white"
                >
                  <animate
                    attributeName="opacity"
                    values="0.2;0.8;0.2"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="10"
                  cy="10"
                  r="1"
                  fill="currentColor"
                  className="text-orange-400"
                >
                  <animate
                    attributeName="opacity"
                    values="0.1;0.6;0.1"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-r ${
                i % 3 === 0
                  ? "from-orange-400 to-red-500"
                  : i % 3 === 1
                  ? "from-white to-gray-300"
                  : "from-gray-400 to-gray-600"
              } rounded-full opacity-60 animate-bounce`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-orange-400 rounded-full opacity-40 animate-ping animation-delay-1"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-red-400 rounded-full opacity-50 animate-ping animation-delay-3"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-ping animation-delay-5"></div>
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-gray-400 rounded-full opacity-30 animate-ping animation-delay-2"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BgEffect;
