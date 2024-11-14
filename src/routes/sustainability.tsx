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
import SustainabilitySplash from "../assets/sustainability/sustainability_splash.jpg";
import SmartSensors from "../assets/sustainability/smart_sensors.png";
import EcoFriendly from "../assets/sustainability/ecofriendly.png";
import Durability from "../assets/sustainability/durability.png";
import Filter from "../assets/sustainability/filter.png";
import ESG from "../assets/sustainability/esg.webp";
import WhitePaper from "../assets/sustainability/whitepaper.jpg";
import TaskForce from "../assets/sustainability/taskforce.jpg";
import Award1 from "../assets/sustainability/award1.png";
import Award2 from "../assets/sustainability/award2.png";
import Award3 from "../assets/sustainability/award3.png";
import Award4 from "../assets/sustainability/award4.png";

const carouselSlides = [
  {
    image: ESG,
    header:
      "Xiaomi Corporation 2023 Environmental, Social, and Governance (ESG) Report",
    description:
      "Xiaomi Group sees sustainable development as a multidimensional system, integrating innovation, environmental and social responsibility, and efficient governance.",
  },
  {
    image: WhitePaper,
    header: "Xiaomi Corporation White Paper on Climate Action",
    description:
      "We envision technological progress as a seamless blend of innovation, net-zero goals, business efficiency, and sustainable growth.",
  },
  {
    image: TaskForce,
    header:
      "Xiaomi Corporation The Task Force on Climate-related Financial Disclosures",
    description:
      "Xiaomi is committed to aligning its strategy with global climate goals through transparent risk management, steering the company toward a low-carbon future.",
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
          <div className="flex size-full items-start justify-end px-4 py-12 md:px-56 md:py-48">
            <div className="flex max-w-sm flex-col items-end gap-8 text-right">
              <MaskText variant="splash" text="Sustainability at Xiaomi" />
              <MiText className="font-medium text-slate-800">
                Breathing Clean, Living Green
              </MiText>
            </div>
          </div>
        </Splash>
        <div className="flex max-w-full flex-col items-center px-32 text-center md:px-64">
          <MaskText
            variant="header"
            text="Purifying your space,"
            className="mb-2"
          />
          <MaskText
            variant="header"
            text="Protecting our planet."
            className="mb-8 text-emerald-600"
          />
          <MiText>
            At Xiaomi, we're committed to clean air and a healthy planet. Our
            mission is to improve indoor air quality with products designed for
            sustainability, using eco-friendly materials and energy-efficient
            designs every step of the way.
          </MiText>
        </div>
        <section className="relative h-screen w-screen">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              containScroll: "trimSnaps",
              breakpoints: {
                "(min-width: 1024px)": { active: true },
              },
            }}
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
                  <div className="absolute inset-0 flex items-center justify-start bg-black/40 p-32 md:p-48">
                    <div className="flex max-w-3xl flex-col items-start">
                      <MaskText
                        variant="header"
                        text={src.header}
                        className="mb-8 text-slate-50"
                      />
                      <MiText className="mb-8 text-slate-100">
                        {src.description}
                      </MiText>
                      <Button asChild className="w-48">
                        <Link to="/product">Learn More</Link>
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 border-slate-50 text-slate-50 hover:bg-emerald-500" />
            <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 border-slate-50 text-slate-50 hover:bg-emerald-500" />
          </Carousel>
        </section>
        <section className="flex w-full flex-col gap-32 px-4 md:flex-row md:px-32">
          <div className="flex flex-1 flex-col items-center gap-8 text-center md:items-start md:text-left">
            <img
              src={EcoFriendly}
              alt="Eco-Friendly Materials"
              className="h-[700px] w-full max-w-full rounded-3xl object-cover object-center"
            />
            <MaskText
              variant="header"
              text="Eco-Friendly Materials"
              className="mt-8 text-slate-900"
            />
            <MiText>
              We prioritise sustainable, recyclable materials in our designs.
              Built to last, our air purifiers minimise waste and reduce
              environmental impact from production to disposal.
            </MiText>
          </div>
          <div className="flex flex-1 flex-col items-center gap-8 text-center md:items-start md:text-left">
            <img
              src={Durability}
              alt="Long-Lasting Durability"
              className="h-[700px] w-full max-w-full rounded-3xl object-cover object-center"
            />
            <MaskText
              variant="header"
              text="Long-Lasting Durability"
              className="mt-8 text-slate-900"
            />
            <MiText>
              Engineered for longevity, our durable air purifiers mean fewer
              replacements, less waste, and reduced energy in manufacturing and
              transport—benefiting you and the planet long-term.
            </MiText>
          </div>
        </section>
        <section
          className="relative h-svh w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${SmartSensors})` }} // Fixed backgroundImage
        >
          <div className="flex size-full items-center justify-start px-2 py-6 md:px-32 md:py-48">
            <div className="flex max-w-lg flex-col items-start gap-8 text-left">
              <MaskText
                variant="header"
                text="Smart Sensors"
                className="text-emerald-50"
              />
              <MiText className="font-light text-slate-200">
                Advanced sensors detect air quality in real-time, adjusting
                power usage to meet only the necessary level of purification.
                This reduces energy consumption, ultimately lowering your carbon
                footprint.
              </MiText>
            </div>
          </div>
        </section>
        <section className="flex w-full flex-col gap-8 px-4 md:flex-row md:gap-16 md:px-16 lg:gap-32 lg:px-32">
          <div className="flex flex-col text-left md:flex-row md:items-center md:gap-8 lg:gap-16">
            <img
              src={Filter}
              alt="High Efficiency Filter"
              className="h-auto w-full max-w-xs object-cover pb-16 md:max-w-sm md:pb-0 lg:max-w-md"
            />
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
              <MaskText
                variant="header"
                text="Xiaomi's High Efficiency Filter"
                className="text-slate-900"
              />
              <MiText>
                This high-efficiency filter uses electrostatic and mechanical
                filtration to reduce energy use, extend filter life, and
                minimize waste—all while providing quiet, effective air cleaning
                with fewer raw materials.
              </MiText>
              <Button asChild className="w-full md:w-48">
                <Link to="/product">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
        <div className="flex max-w-full flex-col items-center px-32 text-center md:px-64">
          <MaskText variant="header" text="Breathe Better," className="mb-2" />
          <MaskText
            variant="header"
            text="Live Cleaner"
            className="mb-8 text-emerald-600"
          />
          {[
            `Every choice we make reflects our commitment to sustainability.`,
            `Join us on this journey to breathe better, live responsibly, and create lasting change.`,
            `Together, we can enjoy cleaner air and a cleaner planet.`,
          ].map((text) => (
            <MiText>{text}</MiText>
          ))}
        </div>
        <section className="flex max-w-full flex-col items-center px-16 text-center md:px-32">
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
                className="h-auto w-3/4 max-w-xs rounded-3xl object-cover md:w-1/2 lg:w-1/3"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Sustainability;
