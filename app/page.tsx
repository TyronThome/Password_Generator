"use client";

import React, { useState, useEffect } from "react";
import Strength from "@/components/Strength";
import Checkbox from "@/components/Checkbox";
import TextField from "@/components/TextField";
import Generate from "@/components/Generate";
import { Slider } from "@/components/ui/slider";

const HomePage: React.FC = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState<
    "Too weak!" | "Weak" | "Medium" | "Strong" | undefined
  >(undefined);
  const [charLength, setCharLength] = useState<number>(10);
  const [options, setOptions] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });
  const [interactionOccurred, setInteractionOccurred] = useState(false);

  const handleGeneratePassword = () => {
    const { uppercase, lowercase, numbers, symbols } = options;
    const charset = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      symbols: "!@#$%^&*()_+-=[]{}|;':,.<>?/~`",
    };
    let availableChars = "";
    if (uppercase) availableChars += charset.uppercase;
    if (lowercase) availableChars += charset.lowercase;
    if (numbers) availableChars += charset.numbers;
    if (symbols) availableChars += charset.symbols;

    const generatedPassword = Array.from({ length: charLength }, () =>
      availableChars.charAt(Math.floor(Math.random() * availableChars.length))
    ).join("");

    setPassword(generatedPassword);
  };

  useEffect(() => {
    const calculateStrength = () => {
      const { uppercase, lowercase, numbers, symbols } = options;
      let score = 0;

      if (uppercase) score++;
      if (lowercase) score++;
      if (numbers) score++;
      if (symbols) score++;

      if (charLength >= 12 && score >= 3) {
        setStrength("Strong");
      } else if (charLength >= 8 && score >= 2) {
        setStrength("Medium");
      } else if (charLength >= 6 && score >= 1) {
        setStrength("Weak");
      } else {
        setStrength("Too weak!");
      }
    };

    if (interactionOccurred) {
      calculateStrength();
    } else {
      setStrength(undefined);
    }
  }, [options, charLength, interactionOccurred]);

  const handleInteraction = () => {
    setInteractionOccurred(true);
  };

  return (
    <div className="bg-darkBg flex justify-center">
      <div className="flex flex-col items-center min-h-screen py-10 px-5 lg:w-1/2 text-lightGray">
        <h1 className="text-2xl font-bold font-jetBrainsMono text-gray mb-8">
          Password Generator
        </h1>
        <TextField password={password} />
        <div className="bg-darkGray w-full p-8 mt-5">
          <Slider
            defaultValue={charLength}
            max={20}
            onChange={(value) => {
              setCharLength(value);
              handleInteraction();
            }}
          />
          <Checkbox
            onOptionsChange={(newOptions) => {
              setOptions(newOptions);
              handleInteraction();
            }}
          />
          <Strength level={strength} />
          <Generate onGenerate={handleGeneratePassword} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
