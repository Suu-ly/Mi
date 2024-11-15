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
import { useLenis } from "lenis/react";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import AboutSplash from "../assets/about/about_splash.jpg";
import AboutSplashCrop from "../assets/about/about_splash_crop.png";
import OurMission1 from "../assets/about/ourmission1.jpg";
import OurMission1_cropped from "../assets/about/ourmission1_cropped.jpg";
import OurMission2 from "../assets/about/ourmission2.jpeg";
import OurMission2_cropped from "../assets/about/ourmission2_cropped.jpeg";

import { useRef } from "react";
import Amanda from "../assets/about/amanda.jpg";
import Jamie from "../assets/about/jamie.jpg";
import Joseph from "../assets/about/joseph.jpg";
import PeiJiaXun from "../assets/about/peijiaxun.jpg";
import Ryan from "../assets/about/ryan.jpg";

const About = () => {
  const isLarge = useMediaQuery("(min-width: 768px)");
  const Lenis = useLenis();
  const scrollRef = useRef<HTMLDivElement>(null);

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
      <main className="flex flex-col">
        <Splash
          src={isLarge ? AboutSplash : AboutSplashCrop}
          alt="Xiaomi Smart Air Purifier 4"
        >
          <div className="flex size-full items-end justify-start px-4 py-12 md:items-center md:px-16 md:py-32">
            <div className="flex max-w-lg flex-col items-start gap-8 text-right">
              <MaskText
                variant="splash"
                text="About Us"
                className="text-slate-50"
              />
              <MiText className="max-w-xs text-start font-medium text-slate-50 md:max-w-md">
                Bringing Health and Comfort to Every Corner of Your Home
              </MiText>
              <Button asChild>
                <Link to="/product">Discover More</Link>
              </Button>
            </div>
          </div>
        </Splash>
        <section className="mx-auto flex flex-col items-center gap-8 px-4 py-20 text-center md:px-16 md:py-24">
          <MaskText
            variant="header"
            text="Welcome to the future of home comfort"
            className="mb-8"
          />
          <MiText>
            We're a team of innovators on a mission to bring clean air into the
            lives of today's homeowners. As advocates for high-quality living,
            we're committed to delivering an experience that transforms your
            home into a sanctuary, beginning with the power of pure, breathable
            air.
          </MiText>
          <Button
            onClick={() => {
              if (scrollRef.current)
                Lenis?.scrollTo(scrollRef.current, { duration: 1 });
            }}
          >
            Meet the Team
          </Button>
        </section>
        {/* <div className="h-[200vh]"></div>   ??? whats this ? */}

        <section className="flex flex-col gap-24 bg-white px-4 py-20 md:gap-0 md:px-16 md:py-24">
          <div className="3xl:flex-row-reverse flex w-full flex-col-reverse justify-center gap-16 py-12 md:flex-row md:py-0">
            <div className="flex w-full flex-col items-center justify-center gap-8 md:items-start">
              <MaskText
                variant="header"
                text="Our Mission"
                className="mt-3 md:mt-0"
              />
              <div className="flex flex-col gap-4">
                <MiText>
                  Our mission goes beyond air purification; it's about making a
                  positive impact on everyday lives.
                </MiText>
                <MiText>
                  As a team of passionate problem-solvers, we're dedicated to
                  creating cleaner, healthier spaces where people can thrive.
                  Every home deserves pure, breathable air, and we're committed
                  to making that vision a reality.
                </MiText>
              </div>
              <Button asChild>
                <Link to="/product">Explore Benefits</Link>
              </Button>
            </div>
            {/* <div className="h-full w-full flex-[1]"> */}
            <AspectRatio
              ratio={2 / 1}
              className="flex w-full items-center justify-center"
            >
              <img
                src={isLarge ? OurMission1_cropped : OurMission1}
                alt="Our Mission"
                className="w-full rounded-3xl"
              />
            </AspectRatio>
            {/* </div> */}
          </div>
          <div className="flex w-full flex-col-reverse justify-center gap-16 py-12 md:flex-row-reverse md:py-0">
            <div className="flex w-full flex-col items-center justify-center gap-8 md:items-start">
              <MaskText
                variant="header"
                text="We Care"
                className="mt-3 md:mt-0"
              />
              <div className="flex flex-col gap-4">
                <MiText>
                  For us, clean air isn't just a goal—it's a shared commitment.
                </MiText>
                <MiText>
                  We know firsthand how city life can affect indoor
                  environments, so we bring together diverse skills and fresh
                  ideas to tackle this challenge. United by the belief that a
                  healthy home is a happy home, we're driven to innovate and
                  inspire with each step.
                </MiText>
              </div>
              <Button asChild>
                <Link to="/support">Chat with Us</Link>
              </Button>
            </div>
            {/* <div className="h-full w-full flex-[1]"> */}
            <AspectRatio
              ratio={2 / 1}
              className="flex w-full items-center justify-center"
            >
              <img
                src={isLarge ? OurMission2_cropped : OurMission2}
                alt="We Care"
                className="w-full rounded-3xl"
              />
            </AspectRatio>
            {/* </div> */}
          </div>
        </section>

        <section
          className="overflow-x-hidden px-4 py-20 md:px-16 md:py-24"
          ref={scrollRef}
        >
          <Carousel opts={{ align: "center", loop: false, skipSnaps: true }}>
            <div className="mb-8 flex w-full flex-wrap items-center justify-between gap-8 text-center md:mb-16">
              <MaskText
                variant="header"
                text="Meet the Team"
                className={`w-full text-center`}
              />
              <MiText className={`text-center`}>
                With diverse backgrounds in engineering, design, and customer
                support, we're united by our commitment to creating cleaner,
                healthier living spaces. Together, we're here to make your
                air-purifying journey an exceptional one.
              </MiText>
            </div>

            <CarouselContent>
              {team.map((team) => (
                <CarouselItem
                  className="basis-full justify-items-center sm:basis-1/2 lg:basis-1/4"
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

            <div
              className="m-3 text-center" /* className="order-2 sm:order-1" */
            >
              <CarouselPrevious className={`m-4`} />
              <CarouselNext />
            </div>
          </Carousel>
        </section>
      </main>
    </>
  );
};

export default About;
