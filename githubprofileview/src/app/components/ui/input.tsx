import React from "react";

// Creating a custom input component that uses `forwardRef` to pass refs down to the input element.
// This allows external components to interact with the input field, e.g., for focusing or validations.
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    // The input component uses `className` for custom styles and `...props` to spread any other props passed to it.
    return (
      <input
        ref={ref} // Forward the ref so the parent component can access the input field directly.
        className={`border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400 ${className}`}
        {...props} // Spread other props (like type, placeholder, etc.) to the input element.
      />
    );
  }
);

Input.displayName = "Input"; // Necessary to give a name to the forward-ref component for debugging purposes.
