// File Upload Component
import React, { useState } from "react";
import type { ChangeEvent, DragEvent } from "react";

interface FileUploadProps {
  label?: string;
  onChange?: (
    e: ChangeEvent<HTMLInputElement> | { target: { files: File[] } }
  ) => void;
  accept?: string;
  multiple?: boolean;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  [key: string]: any;
}

export const FileUpload = ({
  label,
  onChange,
  accept,
  multiple,
  error,
  required,
  disabled,
  placeholder = "Choose files or drag and drop",
  ...props
}: FileUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  interface DragEventHandlers {
    (e: DragEvent<HTMLDivElement>): void;
  }

  const handleDrag: DragEventHandlers = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  interface DropEvent {
    preventDefault: () => void;
    stopPropagation: () => void;
    dataTransfer: {
      files: FileList;
    };
  }

  interface CustomOnChangeEvent {
    target: {
      files: File[];
    };
  }

  const handleDrop = (e: DragEvent<HTMLDivElement> & DropEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0] && !disabled) {
      const newFiles: File[] = Array.from(e.dataTransfer.files);
      setFiles(multiple ? [...files, ...newFiles] : [newFiles[0]]);
      if (onChange)
        onChange({
          target: { files: multiple ? [...files, ...newFiles] : [newFiles[0]] },
        } as CustomOnChangeEvent);
    }
  };

  interface FileInputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

  const handleChange = (e: FileInputChangeEvent): void => {
    if (e.target.files) {
      const newFiles: File[] = Array.from(e.target.files);
      setFiles(multiple ? [...files, ...newFiles] : [newFiles[0]]);
      if (onChange) onChange(e);
    }
  };

  interface RemoveFileHandler {
    (index: number): void;
  }

  const removeFile: RemoveFileHandler = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };

  return (
    <div className="mb-5">
      {label && (
        <label className="block mb-2 font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div
        className={`relative border-2 border-dashed rounded-lg p-6 transition-colors duration-200 ${
          dragActive
            ? "border-blue-400 bg-blue-50"
            : error
            ? "border-red-300 bg-red-50"
            : "border-gray-300 bg-gray-50 hover:border-gray-400"
        } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          disabled={disabled}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          {...props}
        />

        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400 mb-4"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-sm text-gray-600 mb-2">{placeholder}</p>
          <p className="text-xs text-gray-500">
            {accept ? `Accepted: ${accept}` : "All file types accepted"}
          </p>
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-3 space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 bg-gray-100 rounded"
            >
              <span className="text-sm text-gray-700 truncate">
                {file.name}
              </span>
              <button
                onClick={() => removeFile(index)}
                className="text-red-500 hover:text-red-700 ml-2"
              >
                <svg
                  className="w-4 h-4"
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
            </div>
          ))}
        </div>
      )}

      {error && (
        <span className="text-red-500 text-xs mt-1 block">{error}</span>
      )}
    </div>
  );
};
