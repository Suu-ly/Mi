import { motion, Variants } from "framer-motion";
import { useLenis } from "lenis/react";
import { HTMLAttributes, useLayoutEffect } from "react";

type TransitionProps = HTMLAttributes<HTMLDivElement>;

const Transition = ({ children }: TransitionProps) => {
  const Lenis = useLenis();

  const anim = (variants: Variants, custom?: number) => {
    return {
      initial: "initial",
      animate: "animate",
      exit: "exit",
      variants,
      custom,
    };
  };

  const slideWhiteExit: Variants = {
    initial: {
      y: 0,
    },
    animate: {
      y: "-100%",
      transition: {
        duration: 0.75,
        ease: [0.7, 0, 0.3, 1],
      },
    },
  };
  const darken: Variants = {
    initial: {
      opacity: 0.8,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 0.75,
        ease: [0.7, 0, 0.3, 1],
      },
    },
  };
  const page: Variants = {
    initial: {
      y: 80,
    },
    animate: {
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.7, 0, 0.3, 1],
      },
    },
  };

  useLayoutEffect(() => {
    Lenis?.start();
    window.scrollTo(0, 0);
    return () => Lenis?.stop();
  }, [Lenis]);

  return (
    <>
      <motion.div
        {...anim(slideWhiteExit)}
        className="fixed inset-0 z-40 bg-stone-50"
        onAnimationStart={() => Lenis?.stop()}
        onAnimationComplete={() => Lenis?.start()}
      />
      <motion.div
        {...anim(darken)}
        className="pointer-events-none fixed inset-0 z-30 bg-neutral-950"
      />
      <motion.div {...anim(page)}>{children}</motion.div>
    </>
  );
};

export default Transition;
