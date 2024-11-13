import * as React from "react";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "large" | "default";
}

const inputVariants = cva(
  " flex w-full rounded-3xl border border-slate-300 bg-transparent text-slate-900 transition-shadow file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600  disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "px-4 py-3 text-base",
        large: "px-6 py-4 text-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
