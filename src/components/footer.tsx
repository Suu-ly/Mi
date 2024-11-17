import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { Link, LinkProps } from "react-router-dom";

type FooterLinkProps = LinkProps & {
  to: string;
};

const FooterLink = ({ to, children, ...rest }: FooterLinkProps) => {
  return (
    <Link
      className="relative whitespace-nowrap text-xl font-medium text-slate-700 transition-colors before:absolute before:left-0 before:top-full before:block before:h-0.5 before:w-full before:origin-bottom-left before:scale-x-0 before:bg-slate-900 before:transition-transform before:ease-out hover:text-slate-900 hover:before:scale-x-100"
      to={to}
      {...rest}
    >
      {children}
    </Link>
  );
};

const Footer = () => {
  const footerRef = useRef(null);
  const inView = useInView(footerRef, {
    once: true,
    margin: "0px 0px -5% 0px",
  });
  const itemVariants: Variants = {
    isHidden: {
      opacity: 0,
      y: 40,
    },
    isInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };
  const parentVariants: Variants = {
    isInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const animate = inView ? "isInView" : "isHidden";
  return (
    <footer className="mt-32 px-4 py-6 md:mt-48 md:p-16 md:pb-8">
      <div className="mb-16 flex flex-col justify-between gap-32 md:mb-32 md:flex-row">
        <Link to="/" className="size-16">
          <span className="sr-only">Xiaomi Homepage</span>
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_9352_758)">
              <path
                d="M57.3293 6.687C51.2913 0.67225 42.6094 0 32 0C21.3773 0 12.6822 0.68 6.64675 6.711C0.612124 12.7395 0 21.4205 0 32.0311C0 42.6435 0.612125 51.3271 6.64925 57.3577C12.6844 63.3896 21.3784 64.0001 32 64.0001C42.6217 64.0001 51.3142 63.3896 57.3494 57.3577C63.3861 51.326 64 42.6435 64 32.0311C64 21.4069 63.3795 12.7165 57.3293 6.687Z"
                fill="#FF6900"
              />
              <path
                d="M50.5692 19.8257C50.789 19.8257 50.972 20.0028 50.972 20.2208V43.8941C50.972 44.1084 50.789 44.2864 50.5692 44.2864H45.3822C45.1595 44.2864 44.9787 44.1084 44.9787 43.8941V20.2208C44.9787 20.0029 45.1594 19.8257 45.3822 19.8257H50.5692ZM28.0594 19.8257C31.9723 19.8257 36.0635 20.0051 38.0814 22.0243C40.0653 24.0114 40.2802 27.9679 40.2884 31.8101V43.8939C40.2884 44.1083 40.1077 44.2863 39.886 44.2863H34.6998C34.4777 44.2863 34.2962 44.1083 34.2962 43.8939V31.6022C34.2907 29.4563 34.1673 27.2509 33.0607 26.1407C32.1082 25.1856 30.3308 24.9668 28.4825 24.9214H19.0813C18.8608 24.9214 18.6803 25.0988 18.6803 25.3134V43.8941C18.6803 44.1084 18.4975 44.2864 18.2757 44.2864H13.0862C12.8644 44.2864 12.686 44.1084 12.686 43.8941V20.2208C12.686 20.0029 12.8643 19.8257 13.0862 19.8257H28.0594ZM29.2203 29.2541C29.441 29.2541 29.6204 29.4307 29.6204 29.6469V43.8941C29.6204 44.1084 29.4409 44.2864 29.2203 44.2864H23.7723C23.5483 44.2864 23.3688 44.1084 23.3688 43.8941V29.6469C23.3688 29.4307 23.5483 29.2541 23.7723 29.2541H29.2203Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_9352_758">
                <rect width="64" height="64" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
        <div
          className="flex flex-1 flex-wrap gap-12 md:max-w-2xl"
          ref={footerRef}
        >
          <motion.nav
            className="flex-1"
            animate={animate}
            variants={parentVariants}
          >
            <motion.p
              className="mb-4 text-lg text-slate-500"
              variants={itemVariants}
            >
              Navigation
            </motion.p>
            <ul className="flex flex-col items-start gap-2">
              <motion.li variants={itemVariants}>
                <FooterLink to="/">Home</FooterLink>
              </motion.li>
              <motion.li variants={itemVariants}>
                <FooterLink to="/product">Product</FooterLink>
              </motion.li>
              <motion.li variants={itemVariants}>
                <FooterLink to="/about">About</FooterLink>
              </motion.li>
              <motion.li variants={itemVariants}>
                <FooterLink to="/sustainability">Sustainability</FooterLink>
              </motion.li>
              <motion.li variants={itemVariants}>
                <FooterLink to="/blog">Articles</FooterLink>
              </motion.li>
            </ul>
          </motion.nav>
          <motion.nav
            className="flex-1"
            animate={animate}
            variants={parentVariants}
          >
            <motion.p
              className="mb-4 text-lg text-slate-500"
              variants={itemVariants}
            >
              Support
            </motion.p>
            <ul className="flex flex-col items-start gap-2">
              <motion.li variants={itemVariants}>
                <FooterLink to="/support">Contact</FooterLink>
              </motion.li>
              <motion.li variants={itemVariants}>
                <FooterLink to="/guide">User Guide</FooterLink>
              </motion.li>
            </ul>
          </motion.nav>
          <motion.nav animate={animate} variants={parentVariants}>
            <motion.p
              className="mb-4 text-lg text-slate-500"
              variants={itemVariants}
            >
              Socials
            </motion.p>
            <ul className="flex flex-col items-start gap-2">
              <motion.li variants={itemVariants}>
                <FooterLink
                  to="https://www.instagram.com/xiaomi.singapore/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </FooterLink>
              </motion.li>
              <motion.li variants={itemVariants}>
                <FooterLink
                  to="https://www.facebook.com/XiaomiSingapore/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </FooterLink>
              </motion.li>
              <motion.li variants={itemVariants}>
                <FooterLink
                  to="https://x.com/xiaomisingapore?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X
                </FooterLink>
              </motion.li>
              <motion.li variants={itemVariants}>
                <FooterLink
                  to="https://www.youtube.com/channel/UCqfpRyxjui3YDP0PBhkR-NA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </FooterLink>
              </motion.li>
            </ul>
          </motion.nav>
        </div>
      </div>
      <div className="flex flex-col justify-normal gap-4 md:flex-row md:justify-between">
        <Link
          to="/privacy"
          className="text-slate-500 transition-colors hover:text-slate-700"
        >
          Privacy Policy
        </Link>
        <p className="text-slate-500">
          &copy; Xiaomi 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
