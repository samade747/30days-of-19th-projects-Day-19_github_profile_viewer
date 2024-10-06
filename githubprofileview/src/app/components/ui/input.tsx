import React, { useRef } from 'react';
import { Input } from '@/app/components/ui/input'; // Assuming Input is in the same directory

const ParentComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // This focuses the input using the ref
    }
  };

  return (
    <div>
      <Input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
        className="w-full"
      />
      <button onClick={focusInput} className="mt-4 bg-blue-500 text-white p-2 rounded">
        Focus Input
      </button>
    </div>
  );
};

export default ParentComponent;
