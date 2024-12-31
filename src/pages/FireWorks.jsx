import React from 'react';

const Fireworks = () => {
  return (
    <div className="fireworks">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="firework" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`
        }} />
      ))}
      <style>{`
        .firework {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #fff;
          animation: explode 2s ease-out infinite;
        }

        @keyframes explode {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          50% {
            transform: scale(20);
            opacity: 0.5;
          }
          100% {
            transform: scale(40);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Fireworks;
