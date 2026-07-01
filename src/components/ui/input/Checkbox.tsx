import * as React from "react";
import { cn } from "../../../core/lib/cn";

interface CustomCheckboxProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
    disabled?: boolean;
    LableClassName?: string;
    className?: string;
}

export function CustomCheckbox({
    checked = false,
    onChange,
    label,
    disabled = false,
    LableClassName,
    className,
}: CustomCheckboxProps) {
    const [isChecked, setIsChecked] = React.useState(checked);

    React.useEffect(() => {
        setIsChecked(checked);
    }, [checked]);

    const handleChange = () => {
        if (!disabled) {
            const newValue = !isChecked;
            setIsChecked(newValue);
            onChange?.(newValue);
        }
    };

    return (
        <label
            className={cn(
                "flex items-center gap-3 cursor-pointer select-none",
                disabled && "opacity-80 cursor-not-allowed",
                className
            )}
        >
            <div
                onClick={handleChange}
                className={cn(
                    "w-7 h-7 rounded-md border-2 flex items-center justify-center transition-all duration-200",
                    isChecked
                        ? "bg-brand-600 border-brand-600 shadow-sm"
                        : "bg-white border-gray-400 hover:border-brand-500 hover:bg-brand-50",
                    disabled && "bg-gray-200 border-gray-400"
                )}
            >
                {isChecked && (
                    <svg
                        className="w-5 h-5 text-white transition-all duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                )}
            </div>

            <span
                className={cn(
                    "text-base font-medium transition-colors duration-200",
                    isChecked ? "text-brand-700" : "text-gray-800",
                    disabled && "text-gray-400",
                    LableClassName
                )}
            >
                {label}
            </span>
        </label>
    );
}