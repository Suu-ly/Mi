import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { HTMLAttributes, useRef } from "react";

type ParallaxProps = {
  src: string;
  alt: string;
} & HTMLAttributes<HTMLDivElement>;

const Parallax = ({ className, src, alt }: ParallaxProps) => {
  const location = useRef(null);
  const { scrollYProgress } = useScroll({
    target: location,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div ref={location} className={cn("overflow-hidden", className)}>
      <div className="flex size-full items-center">
        <motion.img
          style={{ y }}
          src={src}
          alt={alt}
          className="min-h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Parallax;
