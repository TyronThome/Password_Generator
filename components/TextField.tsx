import React, { useState } from "react";

interface TextFieldProps {
  password: string;
}

const TextField: React.FC<TextFieldProps> = ({ password }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (password) {
      navigator.clipboard.writeText(password).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={password || ""}
        readOnly
        placeholder="P4$5W0rD!"
        className="w-full py-4 px-8 bg-darkGray text-lightGray placeholder-lightGray text-heading-l font-jetBrainsMono"
      />
      <button
        onClick={handleCopy}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 transition-colors hover:text-lightGray"
        aria-label="Copy password"
      >
        <svg
          width="21"
          height="24"
          viewBox="0 0 21 24"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-mintGreen hover:text-lightGray transition-colors h-6 w-5"
        >
          <path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z" />
        </svg>
      </button>
      {copied && (
        <span className="absolute right-12 top-1/2 transform -translate-y-1/2 text-mintGreen font-jetBrainsMono">
          COPIED
        </span>
      )}
    </div>
  );
};

export default TextField;
