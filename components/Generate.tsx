import React from "react";

interface GenerateProps {
  onGenerate: () => void;
}

const Generate: React.FC<GenerateProps> = ({ onGenerate }) => {
  return (
    <div>
      <button
        onClick={onGenerate}
        className="group flex items-center justify-center p-2 mt-4 border border-transparent bg-mintGreen hover:bg-darkGray hover:border-mintGreen transition-all w-full"
      >
        <div className="flex items-center justify-center gap-x-4">
          <span
            className="text-darkGray text-body font-jetBrainsMono uppercase transition-colors group-hover:text-mintGreen"
            style={{ fontWeight: 600 }}
          >
            Generate
          </span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 21 24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-darkBg group-hover:text-mintGreen transition-colors mt-3"
            style={{ height: "1.5rem", width: "1.5rem" }}
          >
            <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default Generate;
