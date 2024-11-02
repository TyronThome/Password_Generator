import React, { useState } from "react";
import { iconCheck } from "@/public/assets";
import Image from "next/image";

interface CheckboxProps {
  onOptionsChange: (options: {
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
  }) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ onOptionsChange }) => {
  const [options, setOptions] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  const handleCheckboxChange = (option: keyof typeof options) => {
    const updatedOptions = { ...options, [option]: !options[option] };
    setOptions(updatedOptions);
    onOptionsChange(updatedOptions);
  };

  return (
    <div className="space-y-4 mb-6 mt-4">
      {Object.entries(options).map(([key, checked], index) => (
        <label
          key={index}
          className="flex items-center cursor-pointer font-jetBrainsMono"
        >
          <div className="relative flex items-center justify-center">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => handleCheckboxChange(key as keyof typeof options)}
              className="appearance-none h-5 w-5 border border-lightGray checked:bg-mintGreen transition-all hover:cursor-pointer hover:border-mintGreen mr-4 p-1"
            />
            {checked && (
              <Image
                src={iconCheck}
                alt="check icon"
                className="absolute w-3 h-3 mr-4 text-darkBg"
              />
            )}
          </div>
          <span className="text-lightGray text-body">
            {key === "uppercase" && "Include Uppercase Letters"}
            {key === "lowercase" && "Include Lowercase Letters"}
            {key === "numbers" && "Include Numbers"}
            {key === "symbols" && "Include Symbols"}
          </span>
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
