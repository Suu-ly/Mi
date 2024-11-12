import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { ComponentProps, useRef } from "react";

type SplashProps = {
  src: string;
  alt: string;
  parallax?: boolean;
  squeeze?: boolean;
} & ComponentProps<"div">;

const Splash = ({
  src,
  alt,
  parallax = true,
  squeeze = true,
  className,
  children,
}: SplashProps) => {
  const splash = useRef(null);
  const { scrollYProgress } = useScroll({
    target: splash,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: scrollYProgressZoom } = useScroll({
    target: splash,
    offset: ["start start", "end center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "40vh"]);
  const round = useTransform(scrollYProgressZoom, [0, 1], [0, 32]);
  const scale = useTransform(scrollYProgressZoom, [0, 1], [1, 0.97]);

  return (
    <motion.section
      className={cn("flex h-svh w-full", className)}
      style={squeeze ? { scale } : undefined}
    >
      {children}
      <motion.div
        className="absolute inset-x-0 top-0 -z-10 size-full max-h-svh overflow-hidden"
        style={squeeze ? { borderRadius: round } : undefined}
      >
        <motion.img
          style={parallax ? { y } : undefined}
          src={src}
          ref={splash}
          alt={alt}
          className="size-full object-cover"
        />
      </motion.div>
    </motion.section>
  );
};

export default Splash;
