import MaskText from "@/components/maskText";
import Splash from "@/components/splash";
import MiText from "@/components/ui/miText";
import { Helmet } from "react-helmet-async";
import FilterCabinet from "../assets/userguide/filtercabinet.png";
import Instructions1 from "../assets/userguide/instructions1.png";
import Instructions2 from "../assets/userguide/instructions2.png";
import Maintenance from "../assets/userguide/maintenance.png";
import OnOffButton from "../assets/userguide/onoffbutton.png";
import PowerModeButton from "../assets/userguide/powermodebutton.png";
import ProductOverview from "../assets/userguide/productoverview.png";
import ResetWifi from "../assets/userguide/resetwifi.png";
import ScreenDisplay from "../assets/userguide/screendisplay.png";
import Specifications from "../assets/userguide/specificatiions.png";
import UserGuideSplash from "../assets/userguide/userguide_splash.jpg";

const warnings = [
  {
    id: 1,
    text: "This appliance can be used by children aged from 8 years and above and persons with reduced physical, sensory or mental capabilities or lack of experience and knowledge if they have been given supervision or instruction concerning use of the appliance in a safe way and understand the hazards involved.",
  },
  {
    id: 2,
    text: "Children shall not play with the appliance. Cleaning and user maintenance shall not be made by children without supervision.",
  },
  {
    id: 3,
    text: "Prior to cleaning or other maintenance, the appliance must be disconnected from the supply mains.",
  },
  {
    id: 4,
    text: "When the power cord is damaged, it must be replaced with a genuine power cord purchased from the manufacturer or after-sales service department.",
  },
];

const precautions = [
  {
    id: 1,
    text: "Turn off and unplug the purifier before moving it.",
  },
  {
    id: 2,
    text: "The purifier cannot turn on when the fan grille and the filter compartment cover are not installed properly.",
  },
  {
    id: 3,
    text: "Maintain a distance of at least 20 cm between the air inlets and walls or other objects.",
  },
  {
    id: 5,
    text: "Frequently remove dust, hair, and other particles from the outer mesh screen of the filter, so as to reduce the chance of bacteria growth.",
  },
  {
    id: 6,
    text: "Remove dust, hair, and particles from the purifier's air inlets to prevent a reduction of air intake.",
  },
  {
    id: 7,
    text: "Do not excessively pull, twist or bend the power cord, as this may expose or break the cord's core.",
  },
  {
    id: 8,
    text: "The power cord must be plugged into a suitable electrical outlet.",
  },
  {
    id: 9,
    text: "Use the power cord that was provided with the purifier, do not use any third party power cords.",
  },
  {
    id: 10,
    text: "Always unplug the purifier before carrying out maintenance to or moving the air purifier.",
  },
  {
    id: 11,
    text: "Immediately stop using the purifier when it makes unusual sounds, gives off bad odors, overheats, or its fan rotates irregularly. This version is for private use only and should not be distributed.",
  },
  {
    id: 12,
    text: "Do not stick your fingers or foreign objects into the protective parts, movable parts, air inlets, or air outlets.",
  },
  {
    id: 13,
    text: "Keep objects such as hairs or fabrics away from the purifier to avoid blocking the air inlets or air outlets.",
  },
  {
    id: 14,
    text: "Do not sit on, lean on or tilt the purifier.",
  },
  {
    id: 15,
    text: "When using in conjunction with gas-fueled appliances (such as gas stoves, gas heaters), please ventilate sufficiently to avoid carbon monoxide poisoning.",
  },
  {
    id: 16,
    text: "Do not pour liquids, nor throw powders or other small substances into the purifier's air outlet.",
  },
  {
    id: 17,
    text: "Do not use the purifier in the following circumstances, as they may result in electric shocks, fire, or other damage.",
  },
  {
    id: 18,
    text: "Make sure no inflammable objects get into the purifier.",
  },
];

const Guide = () => {
  return (
    <>
      <Helmet>
        <title>User Guide · Smart Air Purifier 4</title>
      </Helmet>
      <main className="flex flex-col gap-48">
        <Splash src={UserGuideSplash} alt="Xiaomi Smart Air Purifier 4">
          <div className="flex size-full justify-center px-4 py-16 md:px-16 md:py-32">
            <div className="relative top-1/4 max-w-lg text-center">
              <MaskText variant="splash" text="User Guide" className="mb-8" />
              <MiText className="font-medium text-slate-800">
                Xiaomi Smart Air Purifier 4
              </MiText>
            </div>
          </div>
        </Splash>
        {/* Warning */}
        <section className="mx-auto max-w-5xl px-4 md:px-16">
          <MaskText
            variant="header"
            text="Warning"
            className="mb-12 text-left"
          />
          <div className="space-y-6">
            {warnings.map((warning) => (
              <div key={warning.id} className="flex gap-4">
                <MiText>{warning.id}.</MiText>
                <MiText>{warning.text}</MiText>
              </div>
            ))}
          </div>
        </section>
        {/* Precautions */}
        <section className="mx-auto max-w-5xl px-4 md:px-16">
          <MaskText
            variant="header"
            text="Precautions"
            className="mb-12 text-left"
          />
          <div className="space-y-6">
            {precautions.map((precautions) => (
              <div key={precautions.id} className="flex gap-4">
                <MiText>{precautions.id}.</MiText>
                <MiText>{precautions.text}</MiText>
              </div>
            ))}
          </div>
        </section>
        {/* Product Overview */}
        <section className="mx-auto max-w-5xl px-4 md:px-16">
          <MaskText
            variant="header"
            text="Product Overview"
            className="mb-12 text-left"
          />
          <img
            src={ProductOverview}
            alt="Product Overview"
            className="size-full rounded-3xl object-cover"
          />
        </section>
        {/* Instructions */}
        <section className="mx-auto max-w-5xl px-4 md:px-16">
          <MaskText
            variant="header"
            text="Instructions"
            className="mb-12 text-left"
          />
          <MiText className="mb-8">
            To ensure a better purification, maintain a certain distance between
            the air inlets and walls or other objects.
          </MiText>
          <div className="flex flex-col justify-center gap-8 md:flex-row">
            <img
              src={Instructions1}
              alt="Instructions 1"
              className="w-full rounded-3xl object-cover"
            />
            <img
              src={Instructions2}
              alt="Instructions 2"
              className="w-full rounded-3xl object-cover"
            />
          </div>
        </section>
        {/* How to use */}
        <section className="mx-auto max-w-5xl px-4 md:px-16">
          <MaskText
            variant="header"
            text="How to use"
            className="mb-12 text-left"
          />
          {/* Power Button */}
          <MiText className="mb-6 text-xl font-medium sm:text-2xl lg:text-3xl">
            Power/Mode Button
          </MiText>
          <MiText className="mb-8">
            Press the power/mode button to turn on the purifier, and to switch
            modes. Press and hold for two seconds to turn off the purifier.
          </MiText>
          <img
            src={PowerModeButton}
            alt="Power Mode Button"
            className="mb-24 size-full rounded-3xl object-cover"
          />
          {/* On-off button */}
          <MiText className="mb-6 text-xl font-medium sm:text-2xl lg:text-3xl">
            Screen On-off button
          </MiText>
          <MiText className="mb-8">
            Press the screen on-off button at the back of the purifier to turn
            the screen on/off.
          </MiText>
          <img
            src={OnOffButton}
            alt="On Off Button"
            className="mb-24 size-full rounded-3xl object-cover"
          />
          {/* Screen display */}
          <MiText className="mb-6 text-xl font-medium sm:text-2xl lg:text-3xl">
            Screen Display
          </MiText>
          <MiText className="mb-8">
            Information is displayed on the screen of your purifier.
          </MiText>
          <img
            src={ScreenDisplay}
            alt="Screen Display"
            className="mb-24 size-full rounded-3xl object-cover"
          />
          {/* Reset wifi */}
          <MiText className="mb-6 text-xl font-medium sm:text-2xl lg:text-3xl">
            Resetting the Wi-Fi
          </MiText>
          <MiText className="mb-8">
            If your phone is unable to connect to the air purifier,
            simultaneously press and hold the mode and the light button for 5
            seconds. A beeping sound indicates that Wi-Fi has been successfully
            reset.
          </MiText>
          <img
            src={ResetWifi}
            alt="ResetWifi"
            className="mb-24 size-full rounded-3xl object-cover"
          />
          {/* Filter replacement */}
          <MiText className="mb-6 text-xl font-medium sm:text-2xl lg:text-3xl">
            Filter Replacement
          </MiText>
          <MiText className="mb-8">
            The average filter replacement period is 6 - 12 months. When the
            filter needs to be replaced, the screen will display the remaining
            service life of the filter when the purifier is turned on. Please
            refer to the Filter Replacement label on the inside of the filter
            compartment panel for detailed instructions. Make sure to turn off
            and unplug the purifier before replacing the filter.
          </MiText>
          <MiText className="mb-8">
            After replacing the filter turn on the purifier, and press and hold
            the filter reset button for 6 seconds. A beeping sound indicates
            that the filter has been successfully replaced, and the filter
            service time has been reset.
          </MiText>
        </section>
        {/* Maintenance */}
        <section className="mx-auto max-w-5xl px-4 md:px-16">
          <MaskText
            variant="header"
            text="Maintenance"
            className="mb-12 text-left"
          />
          <MiText className="mb-8">
            Please make sure to turn off the air purifier and disconnect power
            before performing the following operations.
          </MiText>
          <img
            src={Maintenance}
            alt="Maintenance"
            className="mb-24 size-full rounded-3xl object-cover"
          />
          <MiText className="mb-6 text-xl font-medium sm:text-2xl lg:text-3xl">
            Clean the filter cabinet
          </MiText>
          <MiText className="mb-8">
            For best performance, use a vacuum cleaner or soft cloth to remove
            dust clinging to air inlets or cabinet walls.
          </MiText>
          <img
            src={FilterCabinet}
            alt="FilterCabinet"
            className="mb-24 size-full rounded-3xl object-cover"
          />
          <MiText className="mb-6 text-xl font-medium sm:text-2xl lg:text-3xl">
            Clean laser particle sensor
          </MiText>
          <MiText className="mb-8">
            Use a non-sharp tool to open the laser particle sensor cover, and
            use an air blow gun or hair dryer to clean the laser particle sensor
            and its back cover.
          </MiText>
        </section>
        {/* Specifications */}
        <section className="mx-auto max-w-5xl px-4 md:px-16">
          <MaskText
            variant="header"
            text="Specifications"
            className="mb-12 text-left"
          />
          <img
            src={Specifications}
            alt="Specifications"
            className="size-full rounded-3xl object-cover"
          />
        </section>
      </main>
    </>
  );
};

export default Guide;
