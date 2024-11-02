"use client";

import React from "react";

interface StrengthProps {
  level?: "Too weak!" | "Weak" | "Medium" | "Strong";
}

const Strength: React.FC<StrengthProps> = ({ level }) => {
  const colorMap = {
    "Too weak!": "bg-red",
    Weak: "bg-orange",
    Medium: "bg-yellow",
    Strong: "bg-mintGreen",
  };

  const blockFills = {
    "Too weak!": 1,
    Weak: 2,
    Medium: 3,
    Strong: 4,
  };

  const isStrengthDefined = !!level;

  return (
    <div className="flex items-center justify-between mt-4 w-full p-2 bg-darkBg">
      <h1 className="font-bold font-jetBrainsMono uppercase text-gray mt-3 mb-3 ml-2 p-2">
        Strength
      </h1>
      <div className="flex items-center">
        <span
          className={`font-jetBrainsMono text-heading-m font-light uppercase p-4 ${
            isStrengthDefined ? "text-lightGray" : "text-transparent"
          }`}
          style={{
            fontWeight: 300,
            minWidth: "60px",
          }}
        >
          {level || ""}
        </span>

        <div className="flex items-center justify-between gap-1">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={`w-2 h-6 transition-all border border-lightGray ${
                isStrengthDefined && index < blockFills[level!]
                  ? colorMap[level!]
                  : "border-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Strength;
