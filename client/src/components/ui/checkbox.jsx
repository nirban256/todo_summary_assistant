import React from "react";
import { Check } from "lucide-react";
import { cn } from "../../lib/utils.js";

export const Checkbox = ({ id, checked, onChange, className }) => {
    return (
        <label
            htmlFor={id}
            className={cn(
                "inline-flex items-center justify-center w-5 h-5 border-2 border-gray-300 rounded-sm cursor-pointer transition-colors",
                checked ? "bg-primary text-white" : "bg-white",
                className
            )}
        >
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="sr-only"
            />
            {checked && <Check className="w-4 h-4" />}
        </label>
    );
};
