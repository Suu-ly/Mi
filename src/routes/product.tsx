import MaskText from "@/components/maskText";
import Splash from "@/components/splash";
import Button from "@/components/ui/button";
import MiText from "@/components/ui/miText";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Parallax from "@/components/parallax";

import FadeIn from "@/components/fadein";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Night from "../assets/home/night.png";
import NightCrop from "../assets/home/night_crop.png";
import Artist from "../assets/product/artist.png";
import Bacteria from "../assets/product/bacteria.jpg";
import Certification from "../assets/product/certification.png";
import CleanGrill from "../assets/product/cleangrill.png";
import Cta from "../assets/product/cta.jpg";
import Durable from "../assets/product/durable.png";
import EasyOpen from "../assets/product/easyopen.png";
import HighEfficiency from "../assets/product/highefficiency.png";
import Mic from "../assets/product/mic.png";
import Mobile from "../assets/product/mobile.jpg";
import NegativeIons from "../assets/product/negativeions.jpg";
import OneTouch from "../assets/product/onetouch.png";
import Phone from "../assets/product/phone.png";
import PlaceGrill from "../assets/product/placegrill.png";
import ProductSplash from "../assets/product/productsplash.jpg";
import ProductSplash2 from "../assets/product/productsplash2.jpg";
import Reading from "../assets/product/reading.png";
import RealTime from "../assets/product/realtime.jpg";
import RemoveGrill from "../assets/product/removegrill.png";
import Replacements from "../assets/product/replacements.png";
import Tap from "../assets/product/tap.png";
import ThreeFiltersOne from "../assets/product/threefilters1.png";
import ThreeFiltersTwo from "../assets/product/threefilters2.png";

const Product = () => {
  const isLarge = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Helmet>
        <title>Introducing · Smart Air Purifier 4</title>
      </Helmet>
      <main className="flex flex-col gap-48">
        <Splash
          src={ProductSplash}
          alt="Xiaomi Smart Air Purifier 4"
          className="hidden md:block"
        >
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

        <Splash
          src={ProductSplash2}
          alt="Xiaomi Smart Air Purifier 4"
          className="md:hidden"
        >
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
          <div className="mb-16 px-4 text-center md:px-16">
            <MaskText
              variant="body"
              text="Our Air Cleansing System"
              className="mb-4 font-light text-slate-500"
            />
            <MaskText
              variant="header"
              text="Advanced Triple Filtration System"
              className="mb-8"
            />
            <FadeIn className="mx-auto max-w-3xl">
              <MiText>
                With our Advanced Triple Filtration System, breathe easy and
                enjoy fresh air in the comfort of your own home.
              </MiText>
            </FadeIn>
          </div>

          <Parallax
            src={ThreeFiltersOne}
            alt="Xiaomi filter system"
            className="hidden h-svh w-full md:block" // Hide on mobile, show on large screens
          />

          <img
            src={ThreeFiltersTwo}
            alt="Xiaomi filter system"
            className="gap-8 bg-gray-200/50 md:hidden" // Show only on mobile (sm screens)
          />

          <div className="relative h-svh min-h-[576px] w-full bg-cover bg-center md:px-16">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-transparent md:bg-gradient-to-r" />
            <Parallax
              src={HighEfficiency}
              alt="Xiaomi filter system"
              className="absolute inset-0 -z-10"
            />
            <div className="flex size-full items-center justify-start px-4 py-6 md:py-48">
              <div className="z-10 my-4 flex max-w-lg flex-col items-start gap-10 text-left">
                <MaskText
                  variant="header"
                  text="Elevating Standards"
                  className="text-slate-50"
                />
                <FadeIn>
                  <MiText className="mb-2 text-slate-50">1. Cleaner Air</MiText>
                  <p className="font-light text-slate-200">
                    Advanced melt-blown PP fibers with electrostatic technology
                    ensure greater airflow.
                  </p>
                </FadeIn>
                <FadeIn>
                  <MiText className="mb-2 text-slate-50">2. Less Noise</MiText>
                  <p className="font-light text-slate-200">
                    The less dense fibers enable smooth, high-speed airflow,
                    significantly reducing noise.
                  </p>
                </FadeIn>
                <FadeIn>
                  <MiText className="mb-2 text-slate-50">
                    3. Lower Energy Consumption
                  </MiText>
                  <p className="font-light text-slate-200">
                    Optimized High Efficiency Filter requires less energy for
                    the same volume of clean air.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>

          <div className="relative h-svh w-full bg-cover bg-center">
            <div className="flex size-full items-center justify-end px-4 py-6 md:px-16 md:py-48">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-black to-transparent md:bg-gradient-to-l" />
              <Parallax
                src={Bacteria}
                alt="Xiaomi filter system with bacteria"
                className="absolute inset-0 -z-10"
              />
              <div className="relative z-10 flex flex-col items-start gap-16 text-left md:max-w-lg">
                <MaskText
                  variant="header"
                  text="Breathe Clean and Safe"
                  className="text-slate-50"
                />
                <FadeIn>
                  <MiText className="mb-2 text-slate-50">
                    1. Reduces H1N1 Virus in the Air
                  </MiText>
                  <p className="font-light text-slate-200">
                    Xiaomi Smart Air Purifier 4 effortlessly traps and
                    eliminates airborne viruses, helping create a safer
                    environment in your home.
                  </p>
                </FadeIn>
                <FadeIn>
                  <MiText className="mb-2 text-slate-50">
                    2. Removes Harmful Bacteria
                  </MiText>
                  <p className="font-light text-slate-200">
                    Breathe easy as harmful bacterial strains such as e-coli,
                    responsible for respiratory infections are filtered away.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>

          <div className="relative h-svh w-full bg-cover bg-center">
            <Parallax
              src={Replacements}
              alt="Smart Air Purifier 4 in use"
              className="absolute inset-0 -z-10"
            />
            <div className="flex size-full items-start justify-center px-4 pb-8 pt-[104px] md:px-16">
              <div className="z-10 mx-auto max-w-3xl px-4 text-center">
                <MaskText
                  variant="header"
                  text="Fresh Air, Every Day, All Year Round"
                  className="mb-8 mt-4"
                />
                <MiText>
                  Designed for maximum efficiency, our filter's durable
                  performance reduces the need for frequent replacements, with a
                  single filter lasting between 6 to 12 months.
                </MiText>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 px-4 py-20 md:flex-row md:items-center md:px-16">
            <div className="flex w-full max-w-5xl flex-1 flex-col items-start gap-8">
              <MaskText
                variant="header"
                text="TÜV Rheinland Allergy Care Certification"
              />
              <FadeIn>
                <MiText>
                  Worried about allergies? Don't be. Elevate your home's air
                  quality with the peace of mind that comes from the TÜV
                  Rheinland Allergy Care Certification.
                </MiText>
              </FadeIn>
              <FadeIn>
                <img
                  src={Certification}
                  alt="certification"
                  className="size-20"
                />
              </FadeIn>
            </div>
            <div className="w-full min-w-60 flex-1">
              <img
                src={Artist}
                alt="Xiaomi Smart Air Purifier 4 TÜV Rheinland Allergy Care Certification"
                className="size-full rounded-3xl object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 px-4 py-20 md:flex-row md:items-center md:px-16">
            <div className="flex w-full max-w-5xl flex-1 flex-col items-start gap-8 md:hidden">
              <MaskText variant="header" text="Negative Air Ionisation" />
              <FadeIn>
                <MiText>
                  As your purifier releases negative ions into the air, our
                  Negative Air Ionization technology neutralizes airborne
                  pollutants, creating an environment that feels invigorating
                  and revitalizing.
                </MiText>
              </FadeIn>
            </div>
            <div className="w-full min-w-60 flex-1">
              <img
                src={NegativeIons}
                alt="Smart Air Purifier 4"
                className="size-full rounded-3xl object-cover"
              />
            </div>
            <div className="hidden w-full max-w-5xl flex-1 flex-col items-start gap-8 md:block">
              <MaskText
                variant="header"
                text="Negative Air Ionisation"
                className="mb-8"
              />
              <FadeIn>
                <MiText>
                  As your purifier releases negative ions into the air, our
                  Negative Air Ionization technology neutralizes airborne
                  pollutants, creating an environment that feels invigorating
                  and revitalizing.
                </MiText>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Section Title 2: Advanced Control Systems */}
        <section>
          <div className="mb-16 px-4 text-center md:px-16">
            <MaskText
              variant="body"
              text="Controlling Our Purifier"
              className="mb-4 font-light text-slate-500"
            />
            <MaskText variant="header" text="Advanced Control Systems" />
          </div>

          <FadeIn className="mb-16 flex w-full flex-col gap-6 px-4 sm:flex-row md:px-16">
            <div className="flex flex-1 flex-col items-center gap-2 text-center md:items-center md:text-center">
              <img
                src={Tap}
                alt="Tap Icon"
                className="size-20 max-w-full object-cover"
              />
              <MiText variant="body" className="mb-6 w-full text-slate-900">
                One-touch Auto Mode
              </MiText>
            </div>

            <div className="flex flex-1 flex-col items-center gap-2 text-center md:items-center md:text-center">
              <img
                src={Phone}
                alt="Phone Icon"
                className="size-20 max-w-full items-center rounded-3xl object-cover"
              />
              <MiText variant="body" className="mb-6 w-full text-slate-900">
                Smart Control
              </MiText>
            </div>
            <div className="flex flex-1 flex-col items-center gap-2 text-center md:items-center md:text-center">
              <img
                src={Mic}
                alt="Mic Icon"
                className="size-20 max-w-full rounded-3xl object-cover"
              />
              <MiText variant="body" className="mb-6 w-full text-slate-900">
                Voice-Control Support
              </MiText>
            </div>
          </FadeIn>

          <div className="space-y-8 px-4 md:px-16">
            <div className="relative h-[75vh] overflow-hidden rounded-3xl">
              {/* Image */}
              <img
                src={OneTouch}
                alt="OneTouch"
                className="size-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-black to-transparent" />

              {/* Overlay Text */}
              <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-4 md:max-w-lg md:px-16">
                <MaskText
                  variant="header"
                  text="One-Touch Auto Mode"
                  className="mb-16 text-slate-50"
                />
                <FadeIn>
                  <MiText className="text-slate-200">
                    Precision laser sensors monitor air quality in real time and
                    automatically adjusts its purification speed for optimal
                    performance, ensuring clean air with minimal effort and
                    energy.
                  </MiText>
                </FadeIn>
              </div>
            </div>

            <div className="relative h-[75vh] overflow-hidden rounded-3xl">
              <div
                className="relative size-full bg-cover bg-center"
                style={{ backgroundImage: `url(${Reading})` }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-l from-black to-transparent md:bg-gradient-to-l" />
                <div className="flex size-full items-center justify-end px-4 md:px-16">
                  <div className="relative z-10 flex flex-col items-end gap-16 text-right md:max-w-lg">
                    <MaskText
                      variant="header"
                      text="Voice-Control Support"
                      className="text-slate-50"
                    />
                    <FadeIn>
                      <MiText className="text-slate-200">
                        Transform your air purification experience with our
                        cutting-edge Voice-Control Support, allowing you to
                        activate your purifier effortlessly with just your
                        voice.
                      </MiText>
                    </FadeIn>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[75vh] overflow-hidden rounded-3xl">
              {/* Image */}
              <img
                src={Mobile}
                alt="Mobile"
                className="size-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-black to-transparent" />

              {/* Overlay Text */}
              <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-4 md:max-w-lg md:px-16">
                <MaskText
                  variant="header"
                  text="Smart Control"
                  className="mb-16 text-slate-50"
                />
                <FadeIn>
                  <MiText className="text-slate-200">
                    Elevate your air purification experience with our
                    sophisticated Smart Control feature, designed to keep your
                    home fresh and welcoming, no matter where life takes you.
                  </MiText>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Smart, Simple, and Reliable Solutions */}
        <section>
          <div className="mx-auto mb-16 max-w-3xl px-4 text-center md:px-16">
            <MaskText
              variant="body"
              text="Using Our Product"
              className="mb-4 font-light text-slate-500"
            />
            <MaskText
              variant="header"
              text="Smart, Simple, and Reliable Solutions"
            />
          </div>

          <div
            className="relative h-svh w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${RealTime})` }}
          >
            <div className="flex size-full items-start justify-center px-4 pb-8 pt-[104px] md:px-16">
              <div className="mx-auto max-w-3xl text-center">
                <MaskText
                  variant="header"
                  text="Real-time Air Quality"
                  className="mb-8"
                />
                <FadeIn>
                  <MiText>
                    The Smart Air Purifier 4 features a dynamic PM2.5 OLED
                    display with real-time air quality data and a color-coded
                    indicator for easy at-a-glance monitoring.
                  </MiText>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="mx-auto mb-16 max-w-3xl px-4 text-center md:px-16">
            <MaskText
              variant="header"
              text="Durable and Easy to Use"
              className="mb-4"
            />
            <FadeIn>
              <MiText>
                Embrace the luxury of a product designed for modern living
              </MiText>
            </FadeIn>
          </div>

          <FadeIn className="flex w-full flex-col justify-center gap-16 px-4 text-center md:flex-row md:gap-8 md:px-16">
            <div>
              <img
                src={EasyOpen}
                alt="Easy Open"
                className="mb-4 aspect-[3/2] w-full rounded-3xl object-cover"
              />

              <p className="mb-2 font-display text-2xl font-medium text-slate-900">
                Easy, Intuitive Design
              </p>
              <p className="text-lg text-slate-700">Magnetic-doors</p>
            </div>
            <div>
              <img
                src={Durable}
                alt="Durable"
                className="mb-4 aspect-[3/2] w-full rounded-3xl object-cover"
              />
              <p className="mb-2 text-xl font-medium text-slate-900">
                Built to Last
              </p>
              <p className="text-lg text-slate-700">
                Weather-resistant ABS material
              </p>
            </div>
          </FadeIn>
        </section>

        <section>
          <div className="mx-auto mb-16 max-w-3xl px-4 text-center md:px-16">
            <MaskText variant="header" text="Easy to Clean" className="mb-8" />
            <FadeIn>
              <MiText>
                Maintain the purity of your indoor environment with our
                thoughtfully designed Easy-Clean Air Ducts, ensuring that your
                air purifier remains as pristine as the air it delivers.
              </MiText>
            </FadeIn>
          </div>

          <FadeIn className="flex w-full flex-col justify-center gap-16 px-4 text-center md:flex-row md:gap-8 md:px-16">
            <div>
              <img
                src={RemoveGrill}
                alt="Remove Grill"
                className="mb-4 aspect-[3/2] w-full rounded-3xl object-cover"
              />
              <p className="mb-2 font-display text-2xl font-medium text-slate-900">
                Step 1
              </p>
              <p className="text-lg text-slate-700">Remove the Grill</p>
            </div>
            <div>
              <img
                src={CleanGrill}
                alt="Clean Grill"
                className="mb-4 aspect-[3/2] w-full rounded-3xl object-cover"
              />
              <p className="mb-2 font-display text-2xl font-medium text-slate-900">
                Step 2
              </p>
              <p className="text-lg text-slate-700">
                Clean air ducts and blades
              </p>
            </div>
            <div>
              <img
                src={PlaceGrill}
                alt="Place Grill"
                className="mb-4 aspect-[3/2] w-full rounded-3xl object-cover"
              />
              <p className="mb-2 font-display text-2xl font-medium text-slate-900">
                Step 3
              </p>
              <p className="text-lg text-slate-700">
                Screw grill back in place
              </p>
            </div>
          </FadeIn>
        </section>

        <section className="relative h-svh w-full">
          <Parallax
            src={isLarge ? Night : NightCrop}
            alt="Smart Air Purifier 4 night mode"
            className="absolute inset-0 -z-10"
          />
          <div className="flex size-full items-start justify-center px-4 pb-8 pt-[104px] md:px-16">
            <div className="mx-auto max-w-3xl text-center">
              <MaskText
                variant="header"
                text="Low-Noise 32.1dB(A) Night Mode"
                className="mb-8 text-slate-50"
              />
              <FadeIn>
                <MiText className="text-slate-200">
                  Enjoy peaceful sleep with our Low-Noise 32.1dB(A) Night Mode,
                  designed for an undisturbed slumber.
                </MiText>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="absolute inset-0 z-10 flex flex-col items-center gap-8 px-4 py-8 md:px-16">
            <MaskText variant="header" text="Discover Fresh Air Today" />
            <Button asChild>
              <Link to="/order">Order now</Link>
            </Button>
          </div>
          <Parallax
            src={Cta}
            alt="Smart Air Purifier 4"
            className="h-[75vh] w-full"
          />
        </section>
      </main>
    </>
  );
};

export default Product;
