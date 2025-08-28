// Range Slider Component
import React from "react";

type RangeSliderProps = {
  label?: string;
  value: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  showValue?: boolean;
  error?: string;
  [key: string]: any;
};

export const RangeSlider: React.FC<RangeSliderProps> = ({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  disabled,
  showValue = true,
  error,
  ...props
}) => {
  return (
    <div className="mb-5">
      {label && (
        <label className="block mb-2 font-medium text-gray-700">
          {label}
          {showValue && <span className="text-gray-500 ml-2">({value})</span>}
        </label>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        style={{
          background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
            ((value - min) / (max - min)) * 100
          }%, #e5e7eb ${((value - min) / (max - min)) * 100}%, #e5e7eb 100%)`,
        }}
        {...props}
      />
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>{min}</span>
        <span>{max}</span>
      </div>
      {error && (
        <span className="text-red-500 text-xs mt-1 block">{error}</span>
      )}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .slider::-webkit-slider-thumb {
            appearance: none;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #3b82f6;
            cursor: pointer;
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }
          .slider::-moz-range-thumb {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #3b82f6;
            cursor: pointer;
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }
        `,
        }}
      />
    </div>
  );
};
