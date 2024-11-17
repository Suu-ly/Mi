import MaskText from "@/components/maskText";
import Splash from "@/components/splash";
import Button from "@/components/ui/button";
import MiText from "@/components/ui/miText";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Parallax from "@/components/parallax";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

import ProductSplash from "../assets/product/productsplash.jpg";
import ThreeFiltersEdit from "../assets/product/threefilters.png";
import HighEfficiency from "../assets/product/highefficiency.png";
import Bacteria from "../assets/product/bacteria.jpg";
import Replacements from "../assets/product/replacements.png";
import Artist from "../assets/product/artist.png";
import NegativeIons from "../assets/product/negativeions.jpg";
import OneTouch from "../assets/product/onetouch.png";
import Reading from "../assets/product/reading.png";
import Mobile from "../assets/product/mobile.jpg";
import RealTime from "../assets/product/realtime.jpg";
import EasyOpen from "../assets/product/easyopen.png";
import Durable from "../assets/product/durable.png";
import RemoveGrill from "../assets/product/removegrill.png";
import CleanGrill from "../assets/product/cleangrill.png";
import PlaceGrill from "../assets/product/placegrill.png";
import Sleep from "../assets/product/sleep.png";
import Cta from "../assets/product/cta.jpg";
import Certification from "../assets/product/certification.png";
import Tap from "../assets/product/tap.png";
import Phone from "../assets/product/phone.png";
import Mic from "../assets/product/mic.png";

const Product = () => {
  const introRef = useRef(null);
  const { scrollYProgress: introScrollYProgress } = useScroll({
    target: introRef,
    offset: ["start end", "end start"],
  });

  return (
    <>
      <Helmet>
        <title>Product · Smart Air Purifier 4</title>
      </Helmet>
      <main className="flex flex-col gap-48">
        <Splash src={ProductSplash} alt="Xiaomi Smart Air Purifier 4">
          <div className="flex size-full items-end justify-start px-4 py-12 md:px-16 md:py-32">
            <div className="flex max-w-xl flex-col items-start gap-8 text-left">
              <MaskText
                variant="splash"
                text="Smart Air Purifier 4"
                className="text-slate-50"
              />
              <MiText className="text-slate-50">
                Experience fresh, clean air, for a healthier you.
              </MiText>
              <Button asChild>
                <Link to="/precheckout">Buy Now</Link>
              </Button>
            </div>
          </div>
        </Splash>

        {/* Section Title 1: Air Cleansing System */}
        <section>
          <div className="px-2 py-4 md:px-16">
            <div className="mx-auto max-w-3xl text-center">
              <MaskText
                variant="body"
                text="Our Air Cleansing System"
                className="font-light text-slate-500"
              />
            </div>
          </div>

          <div className="relative">
            <div className="mb-8 px-4 md:mb-16 md:px-16">
              <div className="mx-auto max-w-3xl text-center">
                <MaskText
                  variant="header"
                  text="Advanced Triple Filtration System"
                  className="mb-8"
                />
                <MiText>
                  With our Advanced Triple Filtration System, breathe easy and
                  enjoy fresh air in the comfort of your own home.
                </MiText>
              </div>
            </div>
          </div>

          <div
            className="relative h-svh w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${ThreeFiltersEdit})` }}
          >
            <div className="flex size-full items-center justify-start px-2 py-6 md:px-16 md:py-48">
              <div className="flex max-w-lg flex-col items-start gap-8 text-left">
                <MaskText variant="header" text="" className="text-slate-50" />
                <MiText></MiText>
              </div>
            </div>
          </div>

          <div
            className="relative h-svh w-full bg-cover bg-center md:px-16"
            style={{ backgroundImage: `url(${HighEfficiency})` }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-transparent md:bg-gradient-to-r" />
            <div className="flex size-full items-center justify-start px-4 py-6 md:py-48">
              <div className="z-10 mb-4 mt-4 flex max-w-lg flex-col items-start gap-10 text-left">
                <MaskText
                  variant="header"
                  text="Elevating Standards"
                  className="text-slate-50"
                />
                <div>
                  <MiText className="p-50 text-slate-50">1. Cleaner Air</MiText>
                  <p className="font-light text-slate-50">
                    Advanced melt-blown PP fibers with electrostatic technology
                    ensure greater airflow.
                  </p>
                </div>
                <div>
                  <MiText className="p-50 text-slate-50">2. Less Noise</MiText>
                  <p className="font-light text-slate-50">
                    The less dense fibers enable smooth, high-speed airflow,
                    significantly reducing noise.
                  </p>
                </div>
                <div>
                  <MiText className="p-50 text-slate-50">
                    3. Lower Energy Consumption
                  </MiText>
                  <p className="font-light text-slate-50">
                    Optimized High Efficiency Filter requires less energy for
                    the same volume of clean air.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative h-svh w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${Bacteria})` }}
          >
            <div className="flex size-full items-center justify-end px-2 py-6 md:px-16 md:py-48">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-black to-transparent md:bg-gradient-to-l" />
              <div className="relative z-10 flex flex-col items-start gap-16 text-left md:max-w-lg">
                <MaskText
                  variant="header"
                  text="Breathe Clean and Safe"
                  className="text-slate-50"
                />
                <div>
                  <MiText className="p-50 text-slate-50">
                    1. Reduces H1N1 Virus in the Air
                  </MiText>
                  <p className="font-light text-slate-50">
                    Xiaomi Smart Air Purifier 4 effortlessly traps and
                    eliminates airborne viruses, helping create a safer
                    environment in your home.
                  </p>
                </div>
                <div>
                  <MiText className="p-50 text-slate-50">
                    2. Removes Harmful Bacteria
                  </MiText>
                  <p className="font-light text-slate-50">
                    Breathe easy as harmful bacterial strains such as e-coli,
                    responsible for respiratory infections are filtered away.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative h-svh w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${Replacements})` }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-white to-transparent md:bg-gradient-to-b" />
            <div className="flex size-full items-start justify-center px-2 py-6 md:px-32 md:py-16">
              <div className="z-10 mx-auto max-w-3xl px-4 text-center">
                <MaskText
                  variant="header"
                  text="Fresh Air, Every Day, All Year Round"
                  className="mb-8 mt-4"
                />
                <MiText>
                  Designed for maximum efficiency, our filter’s durable
                  performance reduces the need for frequent replacements, with a
                  single filter lasting between 6 to 12 months.
                </MiText>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 px-4 py-20 md:flex-row md:items-center md:px-16">
            <div className="flex w-full max-w-5xl flex-1 flex-col items-start gap-8 md:m-16">
              <MaskText
                variant="header"
                text="TÜV Rheinland Allergy Care Certification"
              />
              <MiText>
                Worried about allergies? Don’t be. Elevate your home’s air
                quality with the peace of mind that comes from the TÜV Rheinland
                Allergy Care Certification.
              </MiText>
              <img
                src={Certification}
                alt="certification"
                className="size-20"
              />
            </div>
            <div className="max-h-[100vh] w-full min-w-60 max-w-[100vh] flex-[1]">
              <img
                src={Artist}
                alt="Artist"
                className="size-full rounded-3xl object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 px-4 py-20 md:flex-row md:items-center md:px-16">
            <div className="flex w-full max-w-5xl flex-1 flex-col items-start gap-8 md:m-16 md:hidden">
              <MaskText variant="header" text="Negative Air Ionisation" />
              <MiText>
                As your purifier releases negative ions into the air, our
                Negative Air Ionization technology neutralizes airborne
                pollutants, creating an environment that feels invigorating and
                revitalizing.
              </MiText>
            </div>
            <div className="max-h-[100vh] w-full min-w-60 max-w-[100vh] flex-[1]">
              <img
                src={NegativeIons}
                alt="NegativeIons"
                className="size-full rounded-3xl object-cover"
              />
            </div>
            <div className="flex hidden w-full max-w-5xl flex-1 flex-col items-start gap-8 md:m-16 md:block">
              <MaskText
                variant="header"
                text="Negative Air Ionisation"
                className="mb-8"
              />
              <MiText>
                As your purifier releases negative ions into the air, our
                Negative Air Ionization technology neutralizes airborne
                pollutants, creating an environment that feels invigorating and
                revitalizing.
              </MiText>
            </div>
          </div>
        </section>

        {/* Section Title 2: Advanced Control Systems */}
        <section>
          <div className="px-2 py-4 md:px-16">
            <div className="mx-auto max-w-3xl text-center">
              <MaskText
                variant="body"
                text="Controlling Our Purifier"
                className="font-light text-slate-500"
              />
            </div>
          </div>
          <div className="mb-8 px-4 md:mb-16 md:px-16">
            <div className="mx-auto max-w-3xl text-center">
              <MaskText
                variant="header"
                text="Advanced Control Systems"
                className="mb-8"
              />
            </div>
          </div>

          <section className="flex w-full flex-col gap-2 px-4 pb-14 md:flex-row md:px-16">
            <div className="flex flex-1 flex-col items-center gap-4 text-center md:items-center md:text-center">
              <img
                src={Tap}
                alt="TapIcon"
                className="h-[80px] w-[80px] max-w-full object-cover object-center"
              />
              <MaskText
                variant="body"
                text="One-touch Auto Mode"
                className="mb-6 w-full text-slate-900"
              />
            </div>

            <div className="flex flex-1 flex-col items-center gap-4 text-center md:items-center md:text-center">
              <img
                src={Phone}
                alt="PhoneIcon"
                className="h-[80px] w-[80px] max-w-full items-center rounded-3xl object-cover object-center"
              />
              <MaskText
                variant="body"
                text="Smart Control"
                className="mb-6 w-full text-slate-900"
              />
            </div>
            <div className="flex flex-1 flex-col items-center gap-4 text-center md:items-center md:text-center">
              <img
                src={Mic}
                alt="Mic Icon"
                className="h-[80px] w-[80px] max-w-full rounded-3xl object-cover object-center"
              />
              <MaskText
                variant="body"
                text="Voice-Control Support"
                className="mb-6 w-full text-slate-900"
              />
            </div>
          </section>

          <section className="mb-48">
            <div>
              <div
                ref={introRef}
                className="relative mx-4 my-8 h-[100vh] overflow-hidden rounded-3xl md:mx-16"
              >
                {/* Image */}
                <img
                  src={OneTouch}
                  alt="OneTouch"
                  className="size-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-black to-transparent" />

                {/* Overlay Text */}
                <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-4 md:max-w-lg md:p-16 md:px-16 md:py-16">
                  <MaskText
                    variant="header"
                    text="One-Touch Auto Mode"
                    className="mb-16 text-slate-50"
                  />
                  <MiText className="text-slate-50">
                    Precision laser sensors monitor air quality in real time and
                    automatically adjusts its purification speed for optimal
                    performance, ensuring clean air with minimal effort and
                    energy.
                  </MiText>
                </div>
              </div>
            </div>

            <div
              ref={introRef}
              className="relative mx-4 my-8 h-[100vh] overflow-hidden rounded-3xl md:mx-16"
            >
              <div
                className="relative h-svh w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${Reading})` }}
              >
                <div className="flex size-full items-center justify-end px-2 py-6 md:px-16 md:py-48">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 z-0 bg-gradient-to-l from-black to-transparent md:bg-gradient-to-l" />
                  <div className="relative z-10 flex flex-col items-end gap-16 text-right md:max-w-lg">
                    <MaskText
                      variant="header"
                      text="Voice-Control Support"
                      className="text-slate-50"
                    />
                    <div>
                      <MiText className="p-50 text-slate-50">
                        Transform your air purification experience with our
                        cutting-edge Voice-Control Support, allowing you to
                        activate your purifier effortlessly with just your
                        voice.
                      </MiText>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                ref={introRef}
                className="relative mx-4 my-8 h-[100vh] overflow-hidden rounded-3xl md:mx-16"
              >
                {/* Image */}
                <img
                  src={Mobile}
                  alt="Mobile"
                  className="size-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-black to-transparent" />

                {/* Overlay Text */}
                <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-4 md:max-w-lg md:p-16 md:px-16 md:py-16">
                  <MaskText
                    variant="header"
                    text="Smart Control"
                    className="mb-16 text-slate-50"
                  />
                  <MiText className="text-slate-50">
                    Elevate your air purification experience with our
                    sophisticated Smart Control feature, designed to keep your
                    home fresh and welcoming, no matter where life takes you.
                  </MiText>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Smart, Simple, and Reliable Solutions */}
          <section>
            <div className="px-2 py-4 md:px-16">
              <div className="mx-auto mt-4 max-w-3xl text-center">
                <MaskText
                  variant="body"
                  text="Using Our Product
              "
                  className="font-light text-slate-500"
                />
              </div>
            </div>
            <div className="mb-8 px-4 md:mb-16 md:px-16">
              <div className="mx-auto max-w-3xl text-center">
                <MaskText
                  variant="header"
                  text="Smart, Simple, and Reliable Solutions"
                  className="mb-20"
                />
              </div>
            </div>

            <div
              className="relative h-svh w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${RealTime})` }}
            >
              <div className="flex size-full items-start justify-center px-4 py-6 md:px-32 md:py-16">
                <div className="mx-auto max-w-3xl text-center">
                  <MaskText
                    variant="header"
                    text="Real-time Air Quality"
                    className="mb-8"
                  />

                  <MiText>
                    The Smart Air Purifier 4 features a dynamic PM2.5 OLED
                    display with real-time air quality data and a color-coded
                    indicator for easy at-a-glance monitoring.
                  </MiText>
                </div>
              </div>
            </div>

            <div className="mt-10 px-4 py-16 md:mb-4 md:px-16">
              <div className="mx-auto max-w-3xl text-center">
                <MaskText
                  variant="header"
                  text="Durable and Easy to Use"
                  className="mb-4"
                />
                <MiText>
                  Embrace the luxury of a product designed for modern living
                </MiText>
              </div>
            </div>

            <section className="flex w-full flex-col gap-8 px-4 md:flex-row md:px-16">
              <div className="mt-4 flex flex-1 flex-col items-center gap-4 text-center md:items-start md:text-center">
                <img
                  src={EasyOpen}
                  alt="Easy Open"
                  className="h-[415px] w-full max-w-full rounded-3xl object-cover object-center"
                />

                <p className="w-full text-center text-xl font-medium text-slate-900">
                  Easy, Intuitive Design
                </p>
                <p className="w-full text-center text-lg text-slate-700">
                  Magnetic-doors
                </p>
              </div>
              <div className="mt-4 flex flex-1 flex-col items-center gap-4 text-center md:items-start md:text-center">
                <img
                  src={Durable}
                  alt="Durable"
                  className="h-[415px] w-full max-w-full rounded-3xl object-cover object-center"
                />
                <p className="w-full text-center text-xl font-medium text-slate-900">
                  Built to Last
                </p>
                <p className="w-full text-center text-lg text-slate-700">
                  Weather-resistant ABS material
                </p>
              </div>
            </section>

            <div className="mt-8 px-4 py-16 md:px-16">
              <div className="mx-auto max-w-3xl text-center">
                <MaskText
                  variant="header"
                  text="Easy to Clean"
                  className="mb-8"
                />
                <MiText>
                  Maintain the purity of your indoor environment with our
                  thoughtfully designed Easy-Clean Air Ducts, ensuring that your
                  air purifier remains as pristine as the air it delivers.
                </MiText>
              </div>
            </div>

            <section className="flex w-full flex-col gap-3 px-4 pb-20 md:flex-row md:px-16">
              <div className="flex flex-1 flex-col items-center gap-4 text-center md:items-start md:text-center">
                <img
                  src={RemoveGrill}
                  alt="Remove Grill"
                  className="mt-8 h-[500px] w-full max-w-full rounded-3xl object-cover object-center"
                />
                <p className="w-full text-center text-xl font-medium text-slate-900">
                  Step 1
                </p>
                <p className="w-full text-center text-lg text-slate-700">
                  Remove the Grill
                </p>
              </div>
              <div className="flex flex-1 flex-col items-center gap-4 text-center md:items-start md:text-center">
                <img
                  src={CleanGrill}
                  alt="Clean Grill"
                  className="mt-8 h-[500px] w-full max-w-full rounded-3xl object-cover object-center"
                />
                <p className="w-full text-center text-xl font-medium text-slate-900">
                  Step 2
                </p>
                <p className="w-full text-center text-lg text-slate-700">
                  Clean air ducts and blades
                </p>
              </div>
              <div className="flex flex-1 flex-col items-center gap-4 text-center md:items-start md:text-center">
                <img
                  src={PlaceGrill}
                  alt="Place Grill"
                  className="mt-8 h-[500px] w-full max-w-full rounded-3xl object-cover object-center"
                />
                <p className="w-full text-center text-xl font-medium text-slate-900">
                  Step 3
                </p>
                <p className="w-full text-center text-lg text-slate-700">
                  Screw grill back in place
                </p>
              </div>
            </section>

            <div
              className="relative h-svh w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${Sleep})` }}
            >
              <div className="flex size-full items-start justify-center px-4 py-6 md:px-32 md:py-16">
                <div className="mx-auto max-w-3xl text-center">
                  <MaskText
                    variant="header"
                    text="Low-Noise 32.1dB(A) Night Mode"
                    className="mb-8 text-slate-50"
                  />
                  <MiText className="text-slate-50">
                    Enjoy peaceful sleep with our Low-Noise 32.1dB(A) Night
                    Mode, designed for an undisturbed slumber.
                  </MiText>
                </div>
              </div>
            </div>

            <section className="relative">
              <div className="absolute inset-0 z-10 flex flex-col items-center gap-8 px-4 py-8 md:p-16">
                <MaskText variant="header" text="Discover Fresh Air Today" />
                <Button asChild>
                  <Link to="/order">Order now</Link>
                </Button>
              </div>
              <Parallax src={Cta} alt="CTA" className="h-[100vh] w-full" />
            </section>
          </section>
        </section>
      </main>
    </>
  );
};

export default Product;
