import FadeIn from "@/components/fadein";
import MaskText from "@/components/maskText";
import Splash from "@/components/splash";
import Button from "@/components/ui/button";
import MiText from "@/components/ui/miText";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useLenis } from "lenis/react";
import { useRef } from "react";

import AboutSplash from "../assets/about/about_splash.jpg";

import OurMission1 from "../assets/about/xiaomi1.jpeg";
import OurMission1_long from "../assets/about/xiaomi1_long.jpeg";
import OurMission2 from "../assets/about/xiaomi2.jpg";
import OurMission2_long from "../assets/about/xiaomi2_long.jpg";

import Amanda from "../assets/about/amanda.jpg";
import Jamie from "../assets/about/jamie.jpg";
import Joseph from "../assets/about/joseph.jpg";
import PeiJiaXun from "../assets/about/peijiaxun.jpg";
import Ryan from "../assets/about/ryan.jpg";

const About = () => {
  const isLarge = useMediaQuery("(min-width: 768px)");
  const Lenis = useLenis();
  const scrollRef = useRef(null);

  const team = [
    { pic: Ryan, name: "Ryan Ong", position: "Product Engineer" },
    { pic: Jamie, name: "Jamie Lee", position: "Customer Experience Lead" },
    {
      pic: Joseph,
      name: "Joseph Kai",
      position: "Digital Marketing Strategist",
    },
    { pic: Amanda, name: "Amanda Chai", position: "Sustainability Advocate" },
    { pic: PeiJiaXun, name: "Pei Jia Xun", position: "Design Specialist" },
  ];

  return (
    <>
      <Helmet>
        <title>About · Xiaomi</title>
      </Helmet>
      <main className="flex flex-col gap-48">
        <Splash
          src={AboutSplash}
          alt="Xiaomi Smart Air Purifier 4"
          className="relative"
        >
          <div className="z-10 flex size-full items-start justify-center px-4 py-12 pt-32 md:items-center md:justify-start md:px-16 md:py-32">
            <div className="flex max-w-lg flex-col items-center gap-8 md:items-start">
              <MaskText
                variant="splash"
                text="About Us"
                className="md:text-slate-50"
              />
              <FadeIn>
                <MiText className="max-w-xs text-center font-medium text-slate-800 md:text-start md:text-slate-200 lg:max-w-md">
                  Bringing Health and Comfort to Every Corner of Your Home
                </MiText>
              </FadeIn>
            </div>
          </div>
          <div className="absolute inset-0 right-1/2 from-black/80 to-white/0 md:bg-gradient-to-r"></div>
        </Splash>
        <section className="mx-auto flex flex-col items-center gap-8 px-4 text-center md:px-16">
          <MaskText
            variant="header"
            text="Welcome to the future of home comfort"
          />
          <FadeIn className="max-w-6xl">
            <MiText>
              We're a team of innovators on a mission to bring clean air into
              the lives of today's homeowners. As advocates for high-quality
              living, we're committed to delivering an experience that
              transforms your home into a sanctuary, beginning with the power of
              pure, breathable air.
            </MiText>
          </FadeIn>
          <FadeIn>
            <Button
              onClick={() => {
                if (scrollRef.current)
                  Lenis?.scrollTo(scrollRef.current, { duration: 1 });
              }}
            >
              Meet the Team
            </Button>
          </FadeIn>
        </section>

        <section className="flex flex-col gap-24 bg-white px-4 py-16 md:gap-32 md:px-16 md:py-24">
          <div className="flex w-full flex-col-reverse justify-center gap-8 md:flex-row">
            <div className="flex w-full flex-col items-center justify-center gap-8 md:items-start">
              <MaskText variant="header" text="Our Mission" />
              <FadeIn>
                <MiText>
                  Our mission goes beyond air purification; it's about making a
                  positive impact on everyday lives.
                  <br />
                  <br />
                  As a team of passionate problem-solvers, we're dedicated to
                  creating cleaner, healthier spaces where people can thrive.
                  Every home deserves pure, breathable air, and we're committed
                  to making that vision a reality.
                </MiText>
              </FadeIn>
              <FadeIn>
                <Button asChild>
                  <Link to="/product">Explore Benefits</Link>
                </Button>
              </FadeIn>
            </div>
            <AspectRatio
              ratio={2}
              className="flex w-full items-center justify-center"
            >
              <img
                src={isLarge ? OurMission1 : OurMission1_long}
                alt="Our Mission"
                className="size-full rounded-3xl object-cover"
              />
            </AspectRatio>
          </div>
          <div className="flex w-full flex-col-reverse justify-center gap-8 md:flex-row-reverse md:py-0">
            <div className="flex w-full flex-col items-center justify-center gap-8 md:items-start">
              <MaskText variant="header" text="We Care" />
              <FadeIn>
                <MiText>
                  For us, clean air isn't just a goal—it's a shared commitment.
                  <br />
                  <br />
                  We know firsthand how city life can affect indoor
                  environments, so we bring together diverse skills and fresh
                  ideas to tackle this challenge. United by the belief that a
                  healthy home is a happy home, we're driven to innovate and
                  inspire with each step.
                </MiText>
              </FadeIn>
              <FadeIn>
                <Button asChild>
                  <Link to="/support">Chat with Us</Link>
                </Button>
              </FadeIn>
            </div>
            <AspectRatio
              ratio={2}
              className="flex w-full items-center justify-center"
            >
              <img
                src={isLarge ? OurMission2 : OurMission2_long}
                alt="We Care"
                className="size-full rounded-3xl object-cover"
              />
            </AspectRatio>
          </div>
        </section>

        <section className="overflow-x-hidden px-4 md:px-16" ref={scrollRef}>
          <Carousel opts={{ align: "center", loop: false, skipSnaps: true }}>
            <div className="mb-16 flex w-full flex-col items-center justify-center gap-8 text-center">
              <MaskText
                variant="header"
                text="Meet the Team"
                className={`w-full`}
              />
              <FadeIn>
                <MiText className={`max-w-4xl`}>
                  With diverse backgrounds in engineering, design, and customer
                  support, we're united by our commitment to creating cleaner,
                  healthier living spaces. Together, we're here to make your
                  air-purifying journey an exceptional one.
                </MiText>
              </FadeIn>
            </div>
            <FadeIn>
              <CarouselContent>
                {team.map((team) => (
                  <CarouselItem
                    className="basis-full justify-items-center sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                    key={team.name}
                  >
                    <div className="flex h-full w-auto flex-col justify-between gap-6 rounded-3xl">
                      <div className="flex items-center gap-3">
                        <img
                          src={team.pic}
                          alt={team.name}
                          className="aspect-[3/4] w-full min-w-52 rounded-3xl object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="mb-1 font-display text-2xl font-semibold">
                          {team.name}
                        </h6>
                        <p className="text-slate-700">{team.position}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </FadeIn>

            <FadeIn className="mt-8 flex justify-center">
              <CarouselPrevious className="mr-4" />
              <CarouselNext />
            </FadeIn>
          </Carousel>
        </section>
      </main>
    </>
  );
};

export default About;
