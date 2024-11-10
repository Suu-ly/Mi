import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes } from "react";

const textVariants = cva("", {
  variants: {
    variant: {
      body: "text-lg md:text-2xl",
      splash: "text-4xl md:text-6xl font-display font-semibold",
      header: "text-3xl md:text-5xl font-display font-semibold",
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
