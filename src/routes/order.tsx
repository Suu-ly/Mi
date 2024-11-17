import MaskText from "@/components/maskText";

import Button from "@/components/ui/button";
import MiText from "@/components/ui/miText";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import FadeIn from "@/components/fadein";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import Cta from "../assets/order/cta.jpg";
import Subscribe from "../assets/order/sub.jpg";

const Order = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <Helmet>
        <title>Order · Smart Air Purifier 4</title>
      </Helmet>
      <main className="flex flex-col gap-32">
        <div className="flex flex-col gap-8 px-4 pt-[104px] md:flex-row md:px-16">
          {/* Left Section - Product Image */}
          <div className="size-full flex-[2]">
            <img
              src={Cta}
              alt="Smart Air Purifier 4"
              className="h-[75vh] min-h-[576px] w-full rounded-3xl object-cover"
            />
          </div>

          {/* Right Section */}
          <div className="flex w-full max-w-3xl flex-[1] flex-col justify-between gap-8">
            {/* Text Subsection */}
            <div className="flex flex-col items-start gap-8">
              <MaskText variant="header" text="Xiaomi Smart Air Purifier 4" />
              <MaskText variant="body" text="Breathe clean, breathe healthy" />

              <p>
                Effortlessly remove allergens and odors with power HEPA
                filtration, and displays air quality in real-time. With
                low-noise with app and voice integration, enjoy clean air in the
                comfort of your home.
              </p>
            </div>

            {/* Quantity and Price Subsection */}
            <div className="flex w-full flex-col gap-4">
              {/* Quantity Selector */}
              <Select
                defaultValue="1"
                onValueChange={(value) => setQuantity(parseInt(value))}
              >
                <SelectTrigger>
                  <span>
                    Quantity: <SelectValue placeholder="Select quantity" />
                  </span>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
              {/* Total Price */}
              <div className="flex justify-between">
                <span className="text-lg font-light">Total: </span>
                <span className="text-lg font-semibold">
                  ${(199.99 * quantity).toFixed(2)}
                </span>
              </div>
              {/* Purchase Button Subsection */}
              <div className="w-full">
                <Button asChild className="w-full px-6 py-3 focus:outline-none">
                  <Link to="/checkout" state={{ quantity: quantity }}>
                    Proceed to Payment
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <section
          className="relative h-96 w-full bg-cover bg-center md:px-16"
          style={{ backgroundImage: `url(${Subscribe})` }}
        >
          <div className="flex size-full items-center justify-start px-4 py-6 md:py-48">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-white to-transparent md:bg-gradient-to-r" />
            <div className="z-10 my-4 flex max-w-2xl flex-col items-start gap-6 text-left">
              <MaskText variant="header" text="Subscribe to Xiaomi AirCare" />
              <FadeIn className="flex flex-col gap-4">
                <MiText className="text-slate-900">
                  Our monthly air filter replacement service ensures you never
                  run out of fresh air.
                </MiText>
                <MiText className="text-slate-900">
                  Delivered automatically, hassle-free.
                </MiText>
              </FadeIn>
              <FadeIn>
                <Button asChild>
                  <Link to="/subscribe">Learn More</Link>
                </Button>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Product Specifications Section */}

        <FadeIn className="space-y-8 divide-y divide-slate-200 px-4 md:px-16">
          <h3 className="text-4xl font-semibold text-slate-900">
            Product Specifications
          </h3>
          {/* Specification Item 1 */}
          <div className="grid grid-cols-1 pt-8 md:grid-cols-2">
            <p className="text-base font-semibold text-slate-900">
              General Information
            </p>

            <div className="flex flex-col gap-2">
              {/* Text 1 */}
              <div>
                <span className="mr-1 font-semibold text-slate-900">Name:</span>
                <span className="text-base text-slate-700">
                  Smart Air Purifier 4
                </span>
              </div>
              {/* Text 2 */}
              <div>
                <span className="mr-1 font-semibold text-slate-900">
                  Model no.:
                </span>
                <span className="text-base text-slate-700">AC-M16-SC</span>
              </div>
            </div>
          </div>

          {/* Specification Item 2 */}
          <div className="grid grid-cols-1 pt-8 md:grid-cols-2">
            <p className="text-base font-semibold text-slate-900">
              Physical Specifications
            </p>

            <div className="flex flex-col gap-2">
              {/* Text 1 */}
              <div>
                <span className="mr-1 font-semibold text-slate-900">
                  Dimensions:
                </span>
                <span className="text-base text-slate-700">250x250x555mm</span>
              </div>
              {/* Text 2 */}
              <div>
                <span className="mr-1 font-semibold text-slate-900">
                  Net weight:
                </span>
                <span className="text-base text-slate-700">Approx. 5.6kg</span>
              </div>
            </div>
          </div>

          {/* Specification Item 3 */}
          <div className="grid grid-cols-1 pt-8 md:grid-cols-2">
            <p className="text-base font-semibold text-slate-900">
              Performance and Coverage
            </p>

            <div className="flex flex-col gap-2">
              {/* Text 1 */}
              <div>
                <span className="mr-1 font-semibold text-slate-900">
                  Effective coverage area:
                </span>
                <span className="text-base text-slate-700">28-48m²</span>
              </div>
              {/* Text 2 */}
              <div>
                <span className="mr-1 font-semibold text-slate-900">
                  Noise:
                </span>
                <span className="text-base text-slate-700">≤64dB(A)</span>
              </div>
              {/* Text 3 */}
              <div>
                <span className="mr-1 font-semibold text-slate-900">
                  PM CADR:
                </span>
                <span className="text-base text-slate-700">400m³/h</span>
              </div>
              {/* Text 4 */}
              <div>
                <span className="mr-1 font-semibold text-slate-900">
                  Particle purification efficiency:
                </span>
                <span className="text-base text-slate-700"> High</span>
              </div>
            </div>
          </div>

          {/* Specification Item 4 */}
          <div className="grid grid-cols-1 pt-8 md:grid-cols-2">
            <p className="text-base font-semibold text-slate-900">
              Package Contents
            </p>

            <div className="flex flex-col gap-2">
              <p className="text-base text-slate-700">
                Xiaomi Smart Air Purifier 4 x1
              </p>
              <p className="text-base text-slate-700">Filter x1</p>

              <p className="text-base text-slate-700">User manual x1</p>

              <p className="text-base text-slate-700">Power cable x1</p>
            </div>
          </div>
        </FadeIn>
      </main>
    </>
  );
};

export default Order;
