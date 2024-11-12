import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes } from "react";

const textVariants = cva("", {
  variants: {
    variant: {
      body: "text-lg sm:text-xl lg:text-2xl",
      splash: "font-display text-4xl font-semibold sm:text-5xl lg:text-6xl",
      header: "font-display text-3xl font-semibold sm:text-4xl lg:text-5xl",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export type textProps = VariantProps<typeof textVariants> &
  HTMLAttributes<HTMLParagraphElement>;

const MiText = forwardRef<HTMLParagraphElement, textProps>(
  ({ className, variant, ...props }, ref) => {
    const Comp =
      variant === "splash" ? "h1" : variant === "header" ? "h2" : "p";
    return (
      <Comp
        className={cn(textVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

export default MiText;
