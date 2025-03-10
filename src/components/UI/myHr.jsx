import React from "react";

function Hr({ children }) {
  return (
    <div className="relative flex items-center text-center justify-center hover:hue-rotate-[360deg] transition duration-[1s] ease-in-out  my-8 ">
      <div className="flex-grow h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#5e5e5e] to-[#adc98b]"></div>
      {children && (
        <div className="mx-4 hover:px-10 transition-all px-4 py-2 bg-[#202020] text-[#c2e29c] text-sm font-bold  shadow-md border border-[#c2e29c] rounded-full hover: ">
          {children}
        </div>
      )}
      <div className="flex-grow h-[2px] rounded-full bg-gradient-to-l from-transparent via-[#5e5e5e] to-[#a4be83]"></div>
    </div>
  );
}

export default Hr;
