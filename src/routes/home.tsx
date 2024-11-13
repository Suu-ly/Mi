import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel";
import MaskText from "@/components/maskText";
import Parallax from "@/components/parallax";
import Splash from "@/components/splash";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Button from "@/components/ui/button";
import MiText from "@/components/ui/miText";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import HomeSplash from "../assets/home/home_splash.png";
import HomeSplashCrop from "../assets/home/home_splash_crop.png";

import dust1 from "../assets/home/dust_1.png";
import dust2 from "../assets/home/dust_2.png";
import dust3 from "../assets/home/dust_3.png";
import Efficient from "../assets/home/efficiency.jpg";
import Introduction from "../assets/home/introduction.png";
import Couch from "../assets/home/living_room.png";
import Durable from "../assets/home/long_lasting.png";
import Purification from "../assets/home/purification.jpg";
import Smart from "../assets/home/smart_control.jpg";

import Night from "../assets/home/night.png";
import NightCrop from "../assets/home/night_crop.png";
import Sustainability from "../assets/home/sustainability.png";

import Amanda from "../assets/home/amanda.png";
import Arshad from "../assets/home/arshad.png";
import Emily from "../assets/home/emily.png";
import Jeremy from "../assets/home/jeremy.png";
import JunJie from "../assets/home/jun_jie.png";
import LiChen from "../assets/home/li_chen.png";
import Ryan from "../assets/home/ryan.png";
import WenMing from "../assets/home/wen_ming.png";

import { articles } from "@/data/articles";

import Delivery from "../assets/home/delivery_deal.jpg";
import Filter from "../assets/home/filter_deal.png";
import Warranty from "../assets/home/warranty_deal.png";

import CallToAction from "../assets/home/call_to_action.png";

const keyFeatures = [
  {
    title: "Advanced Filtration",
    body: "Captures 99.97% of particles as small as 0.3 microns.",
    image: Purification,
  },
  {
    title: "Smart Control",
    body: "Easily manage your air quality with your smart home app of choice.",
    image: Smart,
  },
  {
    title: "Instant Purification",
    body: "Quickly purifies the air in your home, so you can breathe easier, sooner.",
    image: Efficient,
  },
  {
    title: "Long-Lasting",
    body: "Durable filters that last up to a year and keep your air purifier running longer.",
    image: Durable,
  },
];

const reviews = [
  {
    title: "Feeling good!",
    body: "Hi Xiaomi! This cleaner works! My other half suffers from asthma, and we also have a few dogs. Dust is a constant issue where we have carpets. I tried it overnight, and.. miracle, my partner, had no wet cough first thing in the morning. I tried it in the living room, and my own Phantosmia symptoms gone, amazing stuff!",
    name: "Teo Jun Jie",
    pic: JunJie,
  },
  {
    title: "Surprisingly quiet machine",
    body: "I was amazed at how quiet this air purifier is. My baby sleeps through the night, and I don't have to worry about the noise disturbing her. Plus, the app control is super handy for adjusting settings from the next room.",
    name: "Jeremy Goh",
    pic: Jeremy,
  },
  {
    title: "Works fast",
    body: "What impressed me most about this air purifier is how quickly and efficiently it filters out pollutants. Within minutes, I noticed a significant improvement in the air quality.",
    name: "Amanda Lee",
    pic: Amanda,
  },
  {
    title: "Great addition for any house",
    body: "During the haze season, having clean air inside is so important. This purifier has a sleek design that blends into our home decor, and the real-time air quality updates on the app are a fantastic feature. It's been a reliable addition to our home.",
    name: "Li Chen",
    pic: LiChen,
  },
  {
    title: "Nice Filters",
    body: "One of my favourite features is the filter life indicator. I know when I need to replace and ensures that the purifier is always working at its best. The filters also last quite long so I think it's quite value for money.",
    name: "Emily Tong",
    pic: Emily,
  },
  {
    title: "Obsessed",
    body: "This air purifier exceeded my expectations. We have an open-plan living area, and it does a great job keeping the air fresh without being loud or intrusive. It's also nice to know we're choosing a product that's environmentally friendly.",
    name: "Chua Wen Ming",
    pic: WenMing,
  },
  {
    title: "Good looking purifier!",
    body: "We've had a constant battle with pet hair and dust in our home, but this air purifier has made such a difference. It's stylish too, so it fits perfectly in our modern living room without being an eyesore.",
    name: "Arshad",
    pic: Arshad,
  },
  {
    title: "Pretty Cool",
    body: "Seems to work, this is our second unit for the living room, after working fine in the living room. I like how you can control everything from the app. Wife's coughing got better.",
    name: "Ryan Tan",
    pic: Ryan,
  },
];

const promotion = [
  {
    title: "Extended coverage",
    body: "Get an additional year of warranty and use your air purifier worry-free.",
    pic: Warranty,
  },
  {
    title: "Additional filter",
    body: "Get an additional filter to last you even longer, on us.",
    pic: Filter,
  },
  {
    title: "Free delivery and installation",
    body: "Get your air purifier up and running absolutely hassle-free.",
    pic: Delivery,
  },
];

const Home = () => {
  const isLarge = useMediaQuery("(min-width: 768px)");
  const couchRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: couchRef,
    offset: ["start start", "end end"],
  });
  const showDust = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
  const showText = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const dustMotion1 = useTransform(scrollYProgress, [0.15, 1], ["2%", "-2%"]);
  const dustMotion2 = useTransform(scrollYProgress, [0.15, 1], ["-5%", "5%"]);
  const dustMotion3 = useTransform(scrollYProgress, [0.15, 1], ["-4%", "10%"]);
  const rotate = useTransform(scrollYProgress, [0.15, 1], [-5, 20]);

  const introRef = useRef(null);
  const { scrollYProgress: introScrollYProgress } = useScroll({
    target: introRef,
    offset: ["start end", "end start"],
  });
  const borderRadius = useTransform(introScrollYProgress, [0, 1], [0, 24]);
  const scale = useTransform(introScrollYProgress, [0, 1], [1, 0.9]);

  const keyFeaturesRef = useRef(null);
  const { scrollYProgress: featuresScrollYProgress } = useScroll({
    target: keyFeaturesRef,
    offset: ["start center", "end end"],
  });
  const x = useTransform(featuresScrollYProgress, [0, 1], ["0%", "-100%"]);

  const colourFlipRef = useRef(null);

  const [flipped, setFlipped] = useState(false);
  const { scrollYProgress: flipProgress } = useScroll({
    target: colourFlipRef,
    offset: ["start start", "end center"],
  });
  useMotionValueEvent(flipProgress, "change", (y) => {
    if (y > 0 && y < 1) setFlipped(true);
    else setFlipped(false);
  });

  return (
    <>
      <Helmet>
        <title>Home · Smart Air Purifier 4</title>
      </Helmet>
      <main
        className={cn(
          "transition-colors duration-500",
          flipped && "bg-stone-900",
        )}
      >
        <Splash
          src={isLarge ? HomeSplash : HomeSplashCrop}
          alt="Xiaomi Smart Air Purifier 4"
        >
          <div className="flex size-full flex-col items-end justify-between gap-8 px-4 pb-16 pt-[104px] md:justify-end md:px-16 md:py-32">
            <div className="flex max-w-lg flex-col items-end gap-8 text-right">
              <MaskText
                variant="splash"
                text="Breathe easy, we make sure you can"
              />
              <MiText className="font-medium text-slate-800">
                Meet Xiaomi Smart Air Purifier 4, your new best friend for
                cleaner, fresher air at home
              </MiText>
            </div>
            <Button asChild>
              <Link to="/product">Discover More</Link>
            </Button>
          </div>
        </Splash>
        <section className="mb-48 h-[250vh]" ref={couchRef}>
          <div className="sticky top-0 flex h-screen flex-col justify-center gap-16 overflow-x-hidden px-4 md:px-16">
            <div className="relative max-h-[50%]">
              <img
                src={Couch}
                alt="Living room rouch"
                className="size-full object-contain"
              />
              <motion.div
                className="absolute top-0 size-full"
                style={{ opacity: showDust }}
              >
                <motion.img
                  src={dust1}
                  alt="Living room rouch"
                  className="absolute size-full object-contain"
                  style={{
                    y: dustMotion1,
                  }}
                />
                <motion.img
                  src={dust2}
                  alt="Living room rouch"
                  className="absolute size-full object-contain"
                  style={{ y: dustMotion2 }}
                />
                <motion.img
                  src={dust3}
                  alt="Living room rouch"
                  className="absolute size-full object-contain"
                  style={{ y: dustMotion3, rotateZ: rotate }}
                />
              </motion.div>
            </div>
            <motion.div
              className="mx-auto max-w-2xl text-center"
              style={{ opacity: showText }}
            >
              <MiText variant="header" className="mb-6">
                Did you know?
              </MiText>
              <MiText>
                The air inside your home can be up to five times more polluted
                than the air outside.
              </MiText>
            </motion.div>
          </div>
        </section>
        <section className="mb-48">
          <div className="mb-8 px-4 md:mb-16 md:px-16">
            <div className="mx-auto max-w-3xl text-center">
              <MaskText
                variant="header"
                text="Introducing Smart Air Purifier 4"
                className="mb-8"
              />
              <MiText>
                Designed to tackle indoor air pollution head-on and ensure that
                every breath you take is pure and healthy.
              </MiText>
            </div>
          </div>
          <motion.div
            ref={introRef}
            style={{ scale, borderRadius }}
            className="h-[75vh] overflow-hidden"
          >
            <img
              src={Introduction}
              alt="Smart Air Purifier 4"
              className="size-full object-cover"
            />
          </motion.div>
        </section>
        <section className="mb-48 md:mb-0 md:h-[250vh]" ref={keyFeaturesRef}>
          <div className="w-full overflow-x-hidden md:sticky md:top-0">
            <div className="mb-8 px-4 md:absolute md:top-1/2 md:-translate-y-1/2 md:px-16">
              <MaskText variant="header" text="All the features you need." />
            </div>
            <motion.div
              className={`relative flex flex-col gap-16 p-4 transition-colors duration-500 md:left-full md:h-screen md:min-w-max md:flex-row md:items-center md:pl-0 md:pr-16 ${flipped ? "bg-stone-900" : "bg-stone-50"}`}
              style={isLarge ? { x } : undefined}
            >
              {keyFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex h-full flex-col justify-center gap-6 md:max-w-xl"
                >
                  <div className="aspect-[3/2] size-full max-h-[768px]">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="size-full rounded-3xl object-cover"
                    />
                  </div>
                  <div className="flex w-full flex-col gap-2 md:flex-row md:gap-12">
                    <h6
                      className={`font-display text-2xl font-semibold transition-colors duration-500 md:min-w-56 ${flipped ? "text-slate-50" : "text-slate-900"}`}
                    >
                      {feature.title}
                    </h6>
                    <p
                      className={cn(
                        "transition-colors duration-500",
                        flipped ? "text-slate-200" : "text-slate-700",
                      )}
                    >
                      {feature.body}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
        <section className="mb-48 flex flex-col gap-32" ref={colourFlipRef}>
          <div className="h-[125vh] px-4 md:px-16">
            <MaskText
              variant="header"
              text="When night comes, sleep tight."
              className={`sticky top-1/2 mx-auto mt-48 max-w-2xl -translate-y-1/2 text-center transition-colors duration-500 ${flipped ? "text-slate-50" : ""}`}
            />
          </div>
          <div className="relative">
            <div className="absolute inset-0 z-10 px-4 py-8 md:p-16">
              <MaskText
                variant="header"
                text="Shhh... no more noise."
                className="mb-8 text-slate-50"
              />
              <MiText className="text-slate-200">
                Traditional air purifiers can be loud and disruptive. <br />
                This one isn't.
              </MiText>
            </div>
            <Parallax
              src={isLarge ? Night : NightCrop}
              alt="Smart Air Purifier 4 at night"
              className="h-[75vh] w-full"
            />
          </div>
          <div className="flex flex-col gap-8 px-4 md:flex-row md:items-center md:px-16">
            <div className="flex w-full max-w-2xl flex-1 flex-col items-start gap-8">
              <MaskText
                variant="header"
                text="Good for you, good for the planet"
                className={`transition-colors duration-500 ${flipped ? "text-slate-50" : ""}`}
              />
              <MiText
                className={`transition-colors duration-500 ${flipped ? "text-slate-200" : ""}`}
              >
                it's not enough to merely aspire to eco-friendly ideals. We need
                tangible actions to tackle root causes of environmental
                challenges. That's why we're committed to sustainability as a
                core value.
              </MiText>
              <Button asChild>
                <Link to="/sustainability">Find out more</Link>
              </Button>
            </div>
            <div className="aspect-[3/4] max-h-[75vh] w-full min-w-60 flex-[2]">
              <img
                src={Sustainability}
                alt="Sustainability"
                className="size-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </section>
        <section className="mb-48 overflow-x-hidden px-4 md:px-16">
          <Carousel opts={{ align: "center", loop: true, skipSnaps: true }}>
            <div className="mb-8 flex w-full flex-wrap items-center justify-between gap-8 md:mb-16">
              <div className="order-2 sm:order-1">
                <CarouselPrevious
                  className={`mr-3 ${flipped ? "text-slate-50 duration-500 hover:bg-stone-800" : ""}`}
                />
                <CarouselNext
                  className={
                    flipped
                      ? "text-slate-50 duration-500 hover:bg-stone-800"
                      : ""
                  }
                />
              </div>
              <MaskText
                variant="header"
                text="What people say"
                className={`transition-colors duration-500 sm:order-2 sm:text-right ${flipped ? "text-slate-50" : ""}`}
              />
            </div>
            <CarouselContent className="-ml-8">
              {reviews.map((review) => (
                <CarouselItem
                  className="basis-full pl-8 sm:basis-8/12 lg:basis-1/3 2xl:basis-1/4"
                  key={review.name}
                >
                  <div className="flex h-full flex-col justify-between gap-6 rounded-3xl bg-white p-4 md:p-6">
                    <div>
                      <h6 className="mb-3 font-display text-lg font-medium text-slate-900">
                        {review.title}
                      </h6>
                      <p className="text-slate-700">{review.body}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <img
                        src={review.pic}
                        alt={review.name}
                        className="size-12 rounded-full object-cover"
                      />
                      <span className="font-semibold">{review.name}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
        <section className="mb-48 flex flex-col items-center px-4 md:px-16">
          <MaskText
            variant="header"
            text="For a limited time"
            className={`mb-8 text-center transition-colors duration-500 ${flipped ? "text-slate-50" : ""}`}
          />
          <MiText
            className={`mb-16 text-center transition-colors duration-500 ${flipped ? "text-slate-200" : ""}`}
          >
            Receive the following when you order now
          </MiText>
          <div className="mb-16 grid w-full grid-cols-1 gap-16 md:grid-cols-3 md:gap-8">
            {promotion.map((promo) => (
              <div key={promo.title}>
                <AspectRatio ratio={3 / 2} className="mb-6">
                  <img
                    src={promo.pic}
                    alt={promo.title}
                    className="size-full rounded-3xl object-cover"
                  />
                </AspectRatio>
                <h6
                  className={`mb-2 font-display text-2xl font-semibold transition-colors duration-500 ${flipped ? "text-slate-50" : "text-slate-900"}`}
                >
                  {promo.title}
                </h6>
                <p
                  className={cn(
                    "transition-colors duration-500",
                    flipped ? "text-slate-200" : "text-slate-700",
                  )}
                >
                  {promo.body}
                </p>
              </div>
            ))}
          </div>
          <Button asChild>
            <Link to="/order">Order now</Link>
          </Button>
        </section>
        <section className="mb-48 flex flex-col gap-8 overflow-hidden px-4 md:gap-16 md:px-16">
          <div className="flex justify-between">
            <MaskText
              variant="header"
              text="Articles"
              className={`transition-colors duration-500 ${flipped ? "text-slate-50" : ""}`}
            />
            <Button
              asChild
              variant="outline"
              className={`hidden md:block ${flipped ? "text-slate-50 duration-500 hover:bg-stone-800" : ""}`}
            >
              <Link to="/blog">View all</Link>
            </Button>
          </div>
          <Carousel
            opts={{
              align: "start",
              breakpoints: {
                "(min-width: 1024px)": { active: false },
                "(min-width: 640px)": { align: "center" },
              },
            }}
          >
            <CarouselContent className="-ml-8">
              {articles.slice(0, 3).map((article, index) => (
                <CarouselItem
                  className="basis-10/12 pl-8 sm:basis-2/3 lg:basis-1/3"
                  key={article.title}
                >
                  <Link
                    to={`/article/${index}`}
                    className="group flex size-full flex-col gap-3 rounded-3xl bg-white p-4 md:p-6"
                  >
                    <AspectRatio
                      ratio={3 / 2}
                      className="overflow-hidden rounded-2xl"
                    >
                      <img
                        src={article.pic}
                        alt={article.title}
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </AspectRatio>
                    <h6
                      className={`font-display text-lg font-medium transition-colors duration-500 ${flipped ? "text-slate-50" : "text-slate-900"} lg:text-2xl`}
                    >
                      {article.title}
                    </h6>
                    <p
                      className={`transition-colors duration-500 ${flipped ? "text-slate-200" : "text-slate-700"}`}
                    >
                      {article.date}
                    </p>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex justify-center md:hidden">
            <Button asChild variant="outline">
              <Link to="/blog">View all</Link>
            </Button>
          </div>
        </section>
        <section className="relative">
          <div className="absolute inset-0 z-10 flex flex-col items-center gap-8 px-4 py-8 md:p-16">
            <MaskText variant="header" text="Clean air awaits" />
            <Button asChild>
              <Link to="/order">Order now</Link>
            </Button>
          </div>
          <Parallax
            src={CallToAction}
            alt="Smart Air Purifier 4"
            className="h-[75vh] w-full"
          />
        </section>
      </main>
    </>
  );
};

export default Home;
