import React from "react";

const Card = ({username, buttontext}) => {
  return (
    <div className="relative max-w-[300px] max-h-[320px] bg-gradient-to-b from-[#c3e6ec] to-[#a7d1d9] rounded-[10px] p-8 mx-3 overflow-hidden font-sans group">
      
      {/* Hover expanding circle (replaces ::before) */}
      <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-gradient-to-br from-[#364a60] to-[#384c6c] scale-100 group-hover:scale-[28] transition-transform duration-300 ease-out -z-10"></div>

      {/* Product Title */}
      <p className="text-[#262626] text-2xl font-bold mb-2 group-hover:text-white transition-all duration-500">
        {username}
      </p>

      {/* Description */}
      <p className="text-[#452c2c] text-base leading-6 group-hover:text-white/80 transition-all duration-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
        veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
        officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
        eum nihil itaque!
      </p>

      {/* Go corner arrow */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-[#6293c8] to-[#384c6c] rounded-tr-[4px] rounded-bl-[32px] flex items-center justify-center overflow-hidden">
        <div className="text-white -mt-1 -mr-1 font-mono">→</div>
      </div>
    </div>
  );
};

export default Card;
