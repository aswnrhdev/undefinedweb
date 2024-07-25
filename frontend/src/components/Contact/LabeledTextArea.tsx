import React, { useState, ChangeEvent } from "react";

export const LabeledTextArea = ({ label, id, value, onChange, errorMsg, touched }: { label: string, id: string, value: string, onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void, errorMsg: string | undefined, touched: boolean | undefined }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full mt-[-10px]">
      <textarea
        id={id}
        className={`block w-full p-3 bg-gray-800 border text-primary border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-primary peer ${isFocused || value ? 'placeholder-transparent' : ''}`}
        placeholder=" "
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
        value={value}
      />
      <label
        htmlFor={id}
        className={`absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] left-2.5 peer-focus:left-2.5 peer-focus:text-[#EEE4B1] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 ${isFocused || value ? 'scale-75 -translate-y-8 top-2' : ''}`}
      >
        {label}
      </label>
      {errorMsg && touched && (
        <div className="text-red-500 text-sm m-2">{errorMsg}</div>
      )}
    </div>
  )
}

