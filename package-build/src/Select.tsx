// Select Component

import { useState } from "react";

type OptionType = {
  label: string;
  value: string | number;
};

type SelectProps = {
  label?: string;
  value?: string | number;
  onChange: (event: { target: { value: string | number } }) => void;
  options?: OptionType[];
  placeholder?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  [key: string]: any;
};

export const Select = ({
  label,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  error,
  required,
  disabled,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const selectedOption = options.find((option) => option.value === value);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayValue = selectedOption ? selectedOption.label : "";

  interface SelectEvent {
    target: { value: string | number };
  }

  const handleSelect = (optionValue: string | number): void => {
    const event: SelectEvent = {
      target: { value: optionValue },
    };
    onChange(event);
    setIsOpen(false);
    setSearchTerm("");
    setIsFocused(false);
  };

  interface InputChangeEvent {
    target: { value: string };
  }

  const handleInputChange = (e: InputChangeEvent): void => {
    setSearchTerm(e.target.value);
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleInputFocus = () => {
    setIsFocused(true);
    setIsOpen(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
      setIsOpen(false);
      setSearchTerm("");
    }, 150);
  };

  // Removed unused handleKeyDown function and KeyDownEvent interface

  return (
    <div className="mb-5 max-w-md">
      {label && (
        <label className="block mb-2 font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative w-full">
        <div className="relative">
          <input
            type="text"
            value={isFocused || isOpen ? searchTerm : displayValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            // onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className={`w-full px-4 py-3 pr-10 border-2 rounded-lg text-sm transition-colors duration-200 focus:outline-none focus:border-blue-500 ${
              error
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 hover:border-gray-400"
            } ${
              disabled
                ? "bg-gray-100 cursor-not-allowed opacity-60"
                : "bg-white"
            }`}
            disabled={disabled}
            autoComplete="off"
          />
          <svg
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-3 h-2 text-gray-500 transition-transform duration-300 pointer-events-none ${
              isOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 12 8"
          >
            <path
              d="M1 1l5 5 5-5"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div
          className={`absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-50 transition-all duration-300 ease-out ${
            isOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-2 invisible"
          }`}
        >
          <div className="max-h-60 overflow-y-auto py-2">
            {filteredOptions.length === 0 ? (
              <div className="px-4 py-3 text-sm text-gray-500 italic">
                No options found
              </div>
            ) : (
              filteredOptions.map((option) => (
                <div
                  key={option.value}
                  className={`px-4 py-3 cursor-pointer text-sm transition-colors duration-150 flex justify-between items-center mx-2 rounded-md ${
                    option.value === value
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => handleSelect(option.value)}
                >
                  {option.label}
                  {option.value === value && (
                    <svg
                      className="w-4 h-4 text-white ml-2 flex-shrink-0"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M13.5 4.5L6 12 2.5 8.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {error && (
        <span className="text-red-500 text-xs mt-1 block">{error}</span>
      )}
    </div>
  );
};
