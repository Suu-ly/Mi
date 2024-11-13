import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

type HeaderLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  to: string;
};

const HeaderLink = ({ to, children }: HeaderLinkProps) => {
  return (
    <Link
      className="relative w-fit text-4xl font-medium text-slate-700 transition-colors before:absolute before:left-0 before:top-full before:block before:h-[3px] before:w-0 before:bg-slate-900 before:transition-all hover:text-slate-900 hover:before:w-full"
      to={to}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const anim = {
    initial: {
      rotate: "-30deg",
    },
    animate: {
      rotate: "0deg",
      transition: {
        ease: [0, 0.8, 0.25, 1.4],
        duration: 0.3,
      },
    },
  };
  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.2 },
      transitionEnd: { y: 20 },
    },
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 p-6">
      <div className="flex justify-between">
        <Link
          to="/"
          className="pointer-events-auto z-[100] flex size-14 items-center justify-center"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Logo" clipPath="url(#clip0_9352_69)">
              <path
                id="Squircle"
                d="M35.8308 4.17938C32.057 0.420156 26.6309 0 20 0C13.3608 0 7.92641 0.425 4.15422 4.19438C0.382578 7.96219 0 13.3878 0 20.0195C0 26.6522 0.382578 32.0795 4.15578 35.8486C7.92773 39.6185 13.3615 40.0001 20 40.0001C26.6386 40.0001 32.0714 39.6185 35.8434 35.8486C39.6163 32.0788 40 26.6522 40 20.0195C40 13.3793 39.6122 7.94781 35.8308 4.17938Z"
                fill="#FF6900"
              />
              <path
                id="Text"
                d="M31.6057 12.3911C31.7431 12.3911 31.8575 12.5018 31.8575 12.6381V27.4338C31.8575 27.5678 31.7431 27.6791 31.6057 27.6791H28.3638C28.2247 27.6791 28.1116 27.5678 28.1116 27.4338V12.6381C28.1116 12.5019 28.2246 12.3911 28.3638 12.3911H31.6057ZM17.5371 12.3911C19.9826 12.3911 22.5396 12.5032 23.8008 13.7653C25.0407 15.0072 25.175 17.48 25.1802 19.8813V27.4338C25.1802 27.5678 25.0672 27.679 24.9287 27.679H21.6873C21.5485 27.679 21.435 27.5678 21.435 27.4338V19.7514C21.4316 18.4103 21.3545 17.0319 20.6629 16.338C20.0675 15.741 18.9567 15.6043 17.8015 15.576H11.9257C11.7879 15.576 11.6751 15.6868 11.6751 15.821V27.4338C11.6751 27.5678 11.5609 27.6791 11.4222 27.6791H8.17879C8.0402 27.6791 7.92871 27.5678 7.92871 27.4338V12.6381C7.92871 12.5019 8.04012 12.3911 8.17879 12.3911H17.5371ZM18.2626 18.2838C18.4006 18.2838 18.5127 18.3942 18.5127 18.5294V27.4338C18.5127 27.5678 18.4005 27.6791 18.2626 27.6791H14.8576C14.7176 27.6791 14.6054 27.5678 14.6054 27.4338V18.5294C14.6054 18.3942 14.7176 18.2838 14.8576 18.2838H18.2626Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_9352_69">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
        <NavigationMenu className="pointer-events-auto gap-2 rounded-full bg-white p-2">
          <NavigationMenuList>
            <NavigationMenuItem className="hidden lg:block">
              <NavigationMenuLink to="/">Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden lg:block">
              <NavigationMenuLink to="/product" asChild>
                Product
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden lg:block">
              <NavigationMenuTrigger>Company</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col gap-2">
                  <li>
                    <NavigationMenuLink
                      to="/about"
                      className="w-full justify-start"
                    >
                      About
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      to="/sustainability"
                      className="w-full justify-start"
                    >
                      Sustainability
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden lg:block">
              <NavigationMenuTrigger>Support</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col gap-2">
                  <li>
                    <NavigationMenuLink
                      to="/support"
                      className="w-full justify-start"
                    >
                      Contact
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      to="/guide"
                      className="w-full justify-start"
                    >
                      User Guide
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden lg:block">
              <NavigationMenuLink to="/blog">Articles</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                to="/order"
                className="w-28 bg-emerald-400 hover:bg-emerald-400/90 data-[active]:text-slate-700"
              >
                Order now
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="lg:hidden">
              <Button
                variant="ghost"
                className="size-10 rounded-full fill-slate-700 p-0 hover:fill-slate-900 focus:fill-slate-900"
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <motion.span {...anim} key="close">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
                    </svg>
                  </motion.span>
                ) : (
                  <motion.span {...anim} key="open">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" />
                    </svg>
                  </motion.span>
                )}
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <motion.nav
        className="pointer-events-auto"
        animate={open ? "open" : "closed"}
        variants={{
          open: {
            transition: {
              delayChildren: 0.4,
              staggerChildren: 0.05,
            },
          },
        }}
      >
        <motion.ul
          initial={{
            top: 24,
            right: 24,
            width: 176,
            height: 56,
            borderRadius: 28,
          }}
          animate={
            open
              ? {
                  top: 0,
                  right: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: 0,
                  transition: {
                    duration: 0.7,
                    ease: [0.8, 0, 0.2, 1],
                  },
                }
              : {
                  top: 24,
                  right: 24,
                  width: 176,
                  height: 56,
                  borderRadius: 28,
                  transition: {
                    delay: 0.1,
                    duration: 0.7,
                    ease: [0.8, 0, 0.2, 1],
                  },
                }
          }
          className="fixed -z-10 overflow-hidden bg-white lg:hidden"
        >
          <div className="absolute left-8 flex flex-col justify-center gap-8 pt-32">
            <motion.li variants={itemVariants} className="list-none">
              <HeaderLink to="/">Home</HeaderLink>
            </motion.li>
            <motion.li variants={itemVariants} className="list-none">
              <HeaderLink to="/product">Product</HeaderLink>
            </motion.li>
            <motion.li variants={itemVariants} className="list-none">
              <HeaderLink to="/about">About</HeaderLink>
            </motion.li>
            <motion.li variants={itemVariants} className="list-none">
              <HeaderLink to="/sustainability">Sustainability</HeaderLink>
            </motion.li>
            <motion.li variants={itemVariants} className="list-none">
              <HeaderLink to="/blog">Articles</HeaderLink>
            </motion.li>
            <motion.li variants={itemVariants} className="list-none">
              <HeaderLink to="/support">Contact</HeaderLink>
            </motion.li>
            <motion.li variants={itemVariants} className="list-none">
              <HeaderLink to="/guide">User Guide</HeaderLink>
            </motion.li>
          </div>
        </motion.ul>
      </motion.nav>
    </header>
  );
};

export default Header;
