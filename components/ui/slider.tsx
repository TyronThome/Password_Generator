"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

interface SliderProps {
  min?: number;
  max?: number;
  defaultValue?: number;
  onChange?: (length: number) => void;
}

const Slider: React.FC<SliderProps> = ({
  min = 1,
  max = 20,
  defaultValue = 10,
  onChange,
}) => {
  const [charLength, setCharLength] = React.useState(defaultValue);

  const handleSliderChange = (value: number[]) => {
    const length = value[0];
    setCharLength(length);
    if (onChange) onChange(length);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <span className="font-jetBrainsMono text-lightGray">
          Character Length
        </span>
        <span className="font-jetBrainsMono text-mintGreen text-heading-m">
          {charLength}
        </span>
      </div>
      <SliderPrimitive.Root
        className={cn(
          "relative flex w-full touch-none select-none items-center"
        )}
        value={[charLength]}
        min={min}
        max={max}
        step={1}
        onValueChange={handleSliderChange}
      >
        <SliderPrimitive.Track
          className="relative h-2 w-full grow overflow-hidden mb-6"
          style={{
            background: `linear-gradient(to right, #A4FFAF ${
              ((charLength - min) / (max - min)) * 100
            }%, #18171F ${((charLength - min) / (max - min)) * 100}%)`,
          }}
        >
          <SliderPrimitive.Range className="absolute h-full" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          className={cn(
            "block h-5 w-5 rounded-full border-2 border-transparent",
            " bg-lightGray hover:bg-darkBg hover:ring-1 hover:ring-mintGreen transition-colors",
            "cursor-pointer mb-6"
          )}
        />
      </SliderPrimitive.Root>
    </div>
  );
};

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
