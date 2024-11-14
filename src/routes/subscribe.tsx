import MaskText from "@/components/maskText";
import Parallax from "@/components/parallax";
import Splash from "@/components/splash";
import MiText from "@/components/ui/miText";
import { Helmet } from "react-helmet-async";

import SubscribeSplash from "../assets/subscription/purifier.png";

import Virus from "../assets/subscription/virus.png";

import FadeIn from "@/components/fadein";
import Step1 from "../assets/subscription/step_1.png";
import Step2 from "../assets/subscription/step_2.png";
import Step3 from "../assets/subscription/step_3.png";

const steps = [
  {
    step: "Step 1",
    instruction: "Get the Xiaomi Mi Home App",
    pic: Step1,
  },
  {
    step: "Step 2",
    instruction: "Add your Smart Air Purifier 4",
    pic: Step2,
  },
  {
    step: "Step 3",
    instruction: "Set up your subscription!",
    pic: Step3,
  },
];

const Subscribe = () => {
  return (
    <>
      <Helmet>
        <title>Subscribe · Xiaomi</title>
      </Helmet>
      <main className="flex flex-col gap-48">
        <Splash src={SubscribeSplash} alt="Xiaomi Smart Air Purifier 4">
          <div className="flex size-full flex-col items-center gap-8 px-4 pt-[104px] md:px-16">
            <MaskText
              variant="splash"
              text="Keep your air fresh, effortlessly"
              className="text-center"
            />
            <FadeIn>
              <MiText className="text-center font-medium text-slate-800">
                Automatic Filter Replacements at Your Doorstep
              </MiText>
            </FadeIn>
          </div>
        </Splash>
        <section>
          <div className="mb-16 max-w-3xl px-4 md:px-16">
            <MaskText
              variant="header"
              text="Why do I need to replace my filters?"
              className="mb-8"
            />
            <FadeIn>
              <MiText>
                Over time, filters can become clogged with dust, pollen, and
                other pollutants. This not only reduces the efficiency of your
                air purifier but also allows these particles to recirculate in
                your home.
              </MiText>
            </FadeIn>
          </div>
          <Parallax
            src={Virus}
            alt="Filter close up"
            className="h-[75vh] w-full"
          />
        </section>
        <section className="grid grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-16">
          <div>
            <MaskText
              variant="header"
              text="Subscribe to Xiaomi AirCare"
              className="mb-8"
            />
            <FadeIn>
              <MiText>Never worry about running out of clean air again.</MiText>
            </FadeIn>
          </div>
          <FadeIn>
            <div className="rounded-3xl bg-rose-50 p-6">
              <h6 className="mb-12 font-display text-2xl font-medium text-rose-900">
                Without AirCare
              </h6>
              <p className="mb-6 text-xl text-slate-700">Manual Ordering</p>
              <p className="text-xl text-slate-700">
                Pay full price on each order
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="rounded-3xl bg-emerald-50 p-6">
              <h6 className="mb-12 font-display text-2xl font-medium text-emerald-900">
                With AirCare
              </h6>
              <p className="mb-6 text-xl text-slate-700">
                Automatically delivered to you
              </p>
              <p className="text-xl text-slate-700">Save 10% on your filters</p>
            </div>
          </FadeIn>
        </section>
        <section className="px-4 md:px-16">
          <MaskText
            variant="header"
            text="How it works"
            className="mb-8 text-center"
          />
          <FadeIn>
            <MiText className="mb-16 text-center">
              Get started easily in just 3 simple steps.
            </MiText>
          </FadeIn>
          <FadeIn>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.step}>
                  <h6 className="mb-2 text-center font-display text-2xl font-medium text-slate-900">
                    {step.step}
                  </h6>
                  <p className="mb-4 text-center text-xl text-slate-700">
                    {step.instruction}
                  </p>
                  <img
                    src={step.pic}
                    alt={step.step}
                    className="w-full rounded-3xl object-cover"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </section>
      </main>
    </>
  );
};

export default Subscribe;
