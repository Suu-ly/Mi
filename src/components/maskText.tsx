import { motion, useInView } from "framer-motion";
import { Fragment, useRef } from "react";
import MiText, { type textProps } from "./ui/miText";

type MaskTextProps = textProps & {
  text: string;
};

const MaskText = ({ text, ...rest }: MaskTextProps) => {
  const body = useRef(null);

  const isInView = useInView(body, {
    once: true,
    amount: "some",
    margin: "0px 0px -5% 0px",
  });

  const phrases = text.split(" ");

  const animation = {
    initial: { y: "100%", clipPath: "inset(0% 0% 100% 0%)" },
    closed: { y: "100%", clipPath: "inset(0% 0% 100% 0%)" },
    enter: (i: number) => ({
      y: "0",
      clipPath: "inset(0% 0% -15% 0%)",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.04 * i,
      },
    }),
  };

  return (
    <MiText ref={body} {...rest}>
      {phrases.map((phrase, index) => {
        return (
          <Fragment key={index}>
            <span className="relative inline-flex">
              <motion.span
                custom={index}
                variants={animation}
                initial="initial"
                animate={isInView ? "enter" : "closed"}
              >
                {phrase}
              </motion.span>
            </span>{" "}
          </Fragment>
        );
      })}
    </MiText>
  );
};

export default MaskText;
