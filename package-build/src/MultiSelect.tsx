// Multi-Select Component
import React, { useState } from "react";

type Option = {
  label: string;
  value: string | number;
};

type MultiSelectProps = {
  label?: string;
  options: Option[];
  value?: Array<string | number>;
  onChange: (event: { target: { value: Array<string | number> } }) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  [key: string]: any;
};

export const MultiSelect: React.FC<MultiSelectProps> = ({
  label,
  options,
  value = [],
  onChange,
  placeholder = "Select options",
  error,
  required,
  disabled,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const selectedOptions = options.filter((option) =>
    value.includes(option.value)
  );
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  interface HandleSelectEvent {
    target: {
      value: Array<string | number>;
    };
  }

  const handleSelect = (optionValue: string | number): void => {
    const newValue: Array<string | number> = value.includes(optionValue)
      ? value.filter((v) => v !== optionValue)
      : [...value, optionValue];

    onChange({ target: { value: newValue } } as HandleSelectEvent);
  };

  interface RemoveOptionEvent {
    stopPropagation: () => void;
  }

  const removeOption = (
    optionValue: string | number,
    e: React.MouseEvent<HTMLButtonElement> & RemoveOptionEvent
  ): void => {
    e.stopPropagation();
    const newValue: Array<string | number> = value.filter(
      (v) => v !== optionValue
    );
    onChange({ target: { value: newValue } });
  };

  return (
    <div className="mb-5">
      {label && (
        <label className="block mb-2 font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        <div
          className={`min-h-12 p-3 border-2 rounded-lg cursor-pointer transition-colors duration-200 ${
            error
              ? "border-red-500"
              : isOpen
              ? "border-blue-500"
              : "border-gray-300 hover:border-gray-400"
          } ${
            disabled ? "bg-gray-100 cursor-not-allowed opacity-60" : "bg-white"
          }`}
          onClick={() => !disabled && setIsOpen(!isOpen)}
        >
          <div className="flex flex-wrap gap-1">
            {selectedOptions.length === 0 ? (
              <span className="text-gray-500 text-sm">{placeholder}</span>
            ) : (
              selectedOptions.map((option) => (
                <span
                  key={option.value}
                  className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md"
                >
                  {option.label}
                  <button
                    onClick={(e) => removeOption(option.value, e)}
                    className="ml-1 hover:text-blue-600"
                  >
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </span>
              ))
            )}
          </div>
        </div>

        {isOpen && !disabled && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-60 overflow-hidden">
            <div className="p-2 border-b">
              <input
                type="text"
                placeholder="Search options..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 text-sm border rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="max-h-40 overflow-y-auto py-1">
              {filteredOptions.map((option) => (
                <div
                  key={option.value}
                  className={`px-4 py-2 cursor-pointer text-sm hover:bg-gray-100 flex items-center justify-between ${
                    value.includes(option.value)
                      ? "bg-blue-50 text-blue-800"
                      : "text-gray-700"
                  }`}
                  onClick={() => handleSelect(option.value)}
                >
                  {option.label}
                  {value.includes(option.value) && (
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {error && (
        <span className="text-red-500 text-xs mt-1 block">{error}</span>
      )}
    </div>
  );
};
