import React, { useState } from "react";
import { CircleAlert, Eye, EyeOff } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "../../../lib/utils";


export function FromInput({
  name,
  type = "text",
  eye = false,
  label,
  readOnly = false,
  placeholder,
  className,
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const { control } = useFormContext();

  const inputType = eye && isPasswordVisible ? "password" : type;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div>
          {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
          <div className="relative">
            <input
              className={cn("mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",className)}
              {...field}
              type={inputType}
              placeholder={placeholder}
              readOnly={readOnly}
            />
            {eye && (
              <h1
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                className="absolute cursor-pointer top-[6px] right-2"
              >
                {isPasswordVisible ? (
                  <EyeOff className="text-black" size={20} />
                ) : (
                  <Eye className="text-black" size={20} />
                )}
              </h1>
            )}
          </div>
          {error?.message && (
            <h3 className="text-sm pt-[1px] text-end text-[#f73f4e] flex gap-1 items-center justify-end">
              {error.message}
              <CircleAlert size={14} />
            </h3>
          )}
        </div>
      )}
    />
  );
}
