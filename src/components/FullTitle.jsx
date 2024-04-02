import React from "react";

const FullTitle = ({ title, subtitle }) => {
  return (
    <div>
      <p className="font-medium text-black text-sm md:text-base">{subtitle}</p>
      <h2 className="font-bold text-primary text-xl md:text-2xl">{title}</h2>
    </div>
  );
};

export default FullTitle;
