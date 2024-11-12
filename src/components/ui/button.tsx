import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium text-slate-900 ring-offset-stone-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:text-slate-400 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-emerald-400  hover:bg-emerald-400/90 disabled:bg-slate-200",
        outline:
          "border border-emerald-400 hover:bg-slate-100 disabled:bg-slate-100",
        ghost: "hover:bg-slate-100",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2",
        icon: "size-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export default Button;
