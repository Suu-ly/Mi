import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel";
import FadeIn from "@/components/fadein";
import MaskText from "@/components/maskText";
import Splash from "@/components/splash";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Button from "@/components/ui/button";
import MiText from "@/components/ui/miText";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Award1 from "../assets/sustainability/award1.png";
import Award2 from "../assets/sustainability/award2.png";
import Award3 from "../assets/sustainability/award3.png";
import Award4 from "../assets/sustainability/award4.png";
import Durability from "../assets/sustainability/durability.png";
import EcoFriendly from "../assets/sustainability/ecofriendly.png";
import ESGPDF from "../assets/sustainability/ESG.pdf";
import ESG from "../assets/sustainability/esg.webp";
import Filter from "../assets/sustainability/filter.png";
import SmartSensors from "../assets/sustainability/smart_sensors.png";
import SustainabilitySplash from "../assets/sustainability/sustainability_splash.jpg";
import TaskForce from "../assets/sustainability/taskforce.jpg";
import TaskForcePDF from "../assets/sustainability/TaskForce.pdf";
import WhitePaper from "../assets/sustainability/whitepaper.jpg";
import WhitePaperPDF from "../assets/sustainability/WhitePaper.pdf";

const carouselSlides = [
  {
    image: ESG,
    header:
      "Xiaomi Corporation 2023 Environmental, Social, and Governance (ESG) Report",
    description:
      "Xiaomi Group sees sustainable development as a multidimensional system, integrating innovation, environmental and social responsibility, and efficient governance.",
    pdfLink: ESGPDF,
  },
  {
    image: WhitePaper,
    header: "Xiaomi Corporation White Paper on Climate Action",
    description:
      "We envision technological progress as a seamless blend of innovation, net-zero goals, business efficiency, and sustainable growth.",
    pdfLink: WhitePaperPDF,
  },
  {
    image: TaskForce,
    header:
      "Xiaomi Corporation The Task Force on Climate-related Financial Disclosures",
    description:
      "Xiaomi is committed to aligning its strategy with global climate goals through transparent risk management, steering the company toward a low-carbon future.",
    pdfLink: TaskForcePDF,
  },
];

const Sustainability = () => {
  return (
    <>
      <Helmet>
        <title>Sustainability · Smart Air Purifier 4</title>
      </Helmet>
      <main className="flex flex-col gap-48">
        <Splash src={SustainabilitySplash} alt="Xiaomi Smart Air Purifier 4">
          <div className="z-10 flex size-full items-start justify-end px-4 pb-16 pt-[104px] md:px-16 md:pb-32">
            <div className="flex max-w-sm flex-col items-end gap-8 text-right">
              <MaskText
                variant="splash"
                text="Sustainability at Xiaomi"
                className="text-slate-50"
              />
              <MiText className="text-slate-100">
                Breathing Clean, Living Green
              </MiText>
            </div>
          </div>
          <div className="absolute inset-0 bottom-1/2 bg-gradient-to-b from-stone-900/80 to-white/0 md:bottom-0 md:left-1/2 md:bg-gradient-to-l"></div>
        </Splash>
        <div className="flex max-w-full flex-col items-center px-4 text-center md:px-16">
          <MaskText variant="header" text="Purifying your space," />
          <MaskText
            variant="header"
            text="Protecting our planet."
            className="mb-8 text-emerald-600"
          />
          <FadeIn className="max-w-4xl">
            <MiText>
              At Xiaomi, we're committed to clean air and a healthy planet. Our
              mission is to improve indoor air quality with products designed
              for sustainability, using eco-friendly materials and
              energy-efficient designs every step of the way.
            </MiText>
          </FadeIn>
        </div>
        <section className="relative h-screen w-full">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              containScroll: "trimSnaps",
            }}
            className="overflow-hidden"
          >
            <CarouselContent className="ml-0 size-full">
              {carouselSlides.map((src, index) => (
                <CarouselItem
                  key={src.image}
                  className="relative h-screen w-screen shrink-0 pl-0"
                >
                  <img
                    src={src.image}
                    alt={`Slide ${index + 1}`}
                    className="size-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-start bg-black/40 px-4 md:p-32">
                    <div className="flex max-w-3xl flex-col items-start">
                      <MaskText
                        variant="header"
                        text={src.header}
                        className="mb-8 text-slate-50"
                      />
                      <FadeIn>
                        <MiText className="mb-8 text-slate-100">
                          {src.description}
                        </MiText>
                      </FadeIn>
                      <FadeIn>
                        <Button asChild>
                          <a
                            href={src.pdfLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Learn More
                          </a>
                        </Button>
                      </FadeIn>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute bottom-12 left-4 border-slate-50 text-slate-50 hover:bg-emerald-500 md:left-8 md:top-1/2 md:-translate-y-1/2" />
            <CarouselNext className="absolute bottom-12 left-20 border-slate-50 text-slate-50 hover:bg-emerald-500 md:left-auto md:right-8 md:top-1/2 md:-translate-y-1/2" />
          </Carousel>
        </section>
        <section className="flex w-full flex-col gap-20 px-4 md:flex-row md:gap-8 md:px-16">
          <div className="flex flex-1 flex-col items-center gap-6 text-center md:items-start md:text-left">
            <FadeIn className="w-full">
              <AspectRatio ratio={3 / 2} className="w-full">
                <img
                  src={EcoFriendly}
                  alt="Eco-Friendly Materials"
                  className="size-full rounded-3xl object-cover"
                />
              </AspectRatio>
            </FadeIn>
            <FadeIn>
              <h6 className="mb-2 font-display text-2xl font-semibold">
                Eco-Friendly Materials
              </h6>
              <p className="text-slate-700">
                We prioritise sustainable, recyclable materials in our designs.
                Built to last, our air purifiers minimise waste and reduce
                environmental impact from production to disposal.
              </p>
            </FadeIn>
          </div>
          <div className="flex flex-1 flex-col items-center gap-6 text-center md:items-start md:text-left">
            <FadeIn className="w-full">
              <AspectRatio ratio={3 / 2} className="w-full">
                <img
                  src={Durability}
                  alt="Long-Lasting Durability"
                  className="size-full rounded-3xl object-cover"
                />
              </AspectRatio>
            </FadeIn>
            <FadeIn>
              <h6 className="mb-2 font-display text-2xl font-semibold">
                Long-Lasting Durability
              </h6>
              <p className="text-slate-700">
                Engineered for longevity, our durable air purifiers mean fewer
                replacements, less waste, and reduced energy in manufacturing
                and transport—benefiting you and the planet long-term.
              </p>
            </FadeIn>
          </div>
        </section>

        <section
          className="relative h-svh w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${SmartSensors})` }} // Fixed backgroundImage
        >
          <div className="flex size-full items-center justify-start px-4 py-6 md:px-16 md:py-48">
            <div className="flex max-w-lg flex-col items-start gap-8 text-left">
              <MaskText
                variant="header"
                text="Smart Sensors"
                className="text-slate-50"
              />
              <FadeIn>
                <MiText className="font-light text-slate-200">
                  Advanced sensors detect air quality in real-time, adjusting
                  power usage to meet only the necessary level of purification.
                  This reduces energy consumption, ultimately lowering your
                  carbon footprint.
                </MiText>
              </FadeIn>
            </div>
          </div>
        </section>
        <section className="flex w-full flex-col gap-8 px-4 md:flex-row md:items-center md:gap-16 md:px-16 lg:gap-32">
          <div className="flex aspect-[3/2] w-full flex-1 items-center justify-center md:aspect-auto">
            <img
              src={Filter}
              alt="High Efficiency Filter"
              className="h-full rounded-3xl object-contain"
            />
          </div>

          <div className="flex flex-[2] flex-col items-start gap-8">
            <MaskText
              variant="header"
              text="Xiaomi's High Efficiency Filter"
              className="text-left text-slate-900"
            />
            <FadeIn className="max-w-3xl">
              <MiText className="text-left">
                This high-efficiency filter uses electrostatic and mechanical
                filtration to reduce energy use, extend filter life, and
                minimize waste—all while providing quiet, effective air cleaning
                with fewer raw materials.
              </MiText>
            </FadeIn>
            <Button asChild>
              <Link to="/product">Learn More</Link>
            </Button>
          </div>
        </section>
        <div className="flex max-w-full flex-col items-center px-4 text-center md:px-16">
          <MaskText variant="header" text="Breathe Better," />
          <MaskText
            variant="header"
            text="Live Cleaner"
            className="mb-8 text-emerald-600"
          />
          <FadeIn>
            <MiText>
              Every choice we make reflects our commitment to sustainability.
              <br />
              Join us on this journey to breathe better, live responsibly, and
              create lasting change.
              <br />
              Together, we can enjoy cleaner air and a cleaner planet.
            </MiText>
          </FadeIn>
        </div>
        <section className="flex max-w-full flex-col items-center px-4 text-center sm:px-16">
          <MaskText variant="header" text="Our Awards" className="mb-16" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <img
              src={Award1}
              alt="Award 1"
              className="h-auto w-full rounded-3xl object-cover"
            />
            <img
              src={Award2}
              alt="Award 2"
              className="h-auto w-full rounded-3xl object-cover"
            />
            <img
              src={Award3}
              alt="Award 3"
              className="h-auto w-full rounded-3xl object-cover"
            />
            <div className="flex items-center justify-center md:col-span-3">
              <img
                src={Award4}
                alt="Award 4"
                className="h-auto w-full max-w-xl rounded-3xl object-cover md:w-1/2 lg:w-1/3"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Sustainability;
