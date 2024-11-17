import MaskText from "@/components/maskText";

import Button from "@/components/ui/button";
import MiText from "@/components/ui/miText";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Cta from "../assets/order/cta.jpg";
import Subscribe from "../assets/order/sub.jpg";

const Order = () => {
  return (
    <>
      <Helmet>
        <title>Order · Smart Air Purifier 4</title>
      </Helmet>
      <main className="flex flex-col gap-16">
        <div className="flex flex-col gap-8 px-4 pt-24 md:flex-row md:items-stretch">
          {/* Left Section - Product Image */}
          <div className="h-full w-full min-w-60 flex-[2] md:flex-[2]">
            <img
              src={Cta}
              alt="Cta"
              className="h-[500px] w-full max-w-full rounded-3xl object-cover object-center"
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

            {/* Shipping Subsection */}
            <div className="flex w-full items-center gap-4">
              <label htmlFor="shipping" className="md:w-1/3">
                Shipping:
              </label>
              <select
                id="shipping"
                className="w-full rounded-lg border border-slate-200 p-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <option value="standard">Standard Delivery</option>
                <option value="next-day">Next-Day Delivery</option>
                <option value="pickup">In-store Pickup</option>
              </select>
            </div>

            {/* Quantity and Price Subsection */}
            <div className="flex w-full items-center justify-between gap-4">
              {/* Quantity Selector */}
              <div className="flex w-1/2 items-center gap-2 md:w-1/3">
                <label
                  htmlFor="quantity"
                  className="text-sm font-medium text-slate-800"
                >
                  Qty:
                </label>
                <select
                  id="quantity"
                  className="rounded-lg border border-slate-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  aria-label="Select Quantity"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              {/* Total Price */}
              <div className="w-1/2 text-right md:w-1/3">
                <span className="text-lg font-light">Total: </span>
                <span className="text-lg font-semibold">$199.99</span>
              </div>
            </div>

            {/* Purchase Button Subsection */}
            <div className="w-full">
              <Button asChild className="w-full px-6 py-3 focus:outline-none">
                <Link to="/product">Proceed to Payment</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Product Specifications Section */}
        <div className="mt-8 px-4 md:px-16">
          <h3 className="text-4xl font-semibold text-slate-900">
            Product Specifications
          </h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
            {/* Specification Item 1 */}
            <div className="grid grid-cols-1 border-b border-t border-slate-200 md:grid-cols-2 lg:grid-cols-2">
              <div className="flex flex-col rounded-lg py-4">
                <span className="text-sm font-medium text-slate-700"></span>
                <span className="text-base font-semibold text-slate-900">
                  General Information
                </span>
              </div>

              <div className="flex flex-col rounded-lg py-4">
                {/* Text 1 */}
                <div>
                  <span className="mr-1 font-semibold text-slate-900">
                    Name:
                  </span>
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
            <div className="grid grid-cols-1 border-b border-t border-slate-200 md:grid-cols-2 lg:grid-cols-2">
              <div className="flex flex-col rounded-lg py-4">
                <span className="text-sm font-medium text-slate-700"></span>
                <span className="text-base font-semibold text-slate-900">
                  Physical Specifications
                </span>
              </div>

              <div className="flex flex-col rounded-lg py-4">
                {/* Text 1 */}
                <div>
                  <span className="mr-1 font-semibold text-slate-900">
                    Dimensions:
                  </span>
                  <span className="text-base text-slate-700">
                    250x250x555mm
                  </span>
                </div>
                {/* Text 2 */}
                <div>
                  <span className="mr-1 font-semibold text-slate-900">
                    Net weight:
                  </span>
                  <span className="text-base text-slate-700">
                    Approx. 5.6kg
                  </span>
                </div>
              </div>
            </div>

            {/* Specification Item 3 */}
            <div className="grid grid-cols-1 border-b border-t border-slate-200 md:grid-cols-2 lg:grid-cols-2">
              <div className="flex flex-col rounded-lg py-4">
                <span className="text-sm font-medium text-slate-700"></span>
                <span className="text-base font-semibold text-slate-900">
                  Performance and Coverage
                </span>
              </div>

              <div className="flex flex-col rounded-lg py-4">
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
            <div className="grid grid-cols-1 border-b border-t border-slate-200 md:grid-cols-2 lg:grid-cols-2">
              <div className="flex flex-col rounded-lg py-4">
                <span className="text-sm font-medium text-slate-700"></span>
                <span className="text-base font-semibold text-slate-900">
                  Package Contents
                </span>
              </div>

              <div className="flex flex-col rounded-lg py-4">
                {/* Text 1 */}
                <div>
                  <span className="text-base text-slate-700">
                    Xiaomi Smart Air Purifier 4 x1
                  </span>
                </div>
                {/* Text 2 */}
                <div>
                  <span className="text-base text-slate-700">Filter x1</span>
                </div>
                {/* Text 3 */}
                <div>
                  <span className="text-base text-slate-700">
                    User manual x1
                  </span>
                </div>
                {/* Text 4 */}
                <div>
                  <span className="text-base text-slate-700">
                    Power cable x1
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative h-96 w-full bg-cover bg-center md:px-16"
          style={{ backgroundImage: `url(${Subscribe})` }}
        >
          <div className="flex size-full items-center justify-start px-4 py-6 md:py-48">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-white to-transparent md:bg-gradient-to-r" />
            <div className="z-10 mb-4 mt-4 flex max-w-2xl flex-col items-start gap-6 text-left">
              <MaskText variant="header" text="Subscribe to Xiaomi AirCare" />
              <div className="flex flex-col gap-4">
                <MiText className="text-slate-900">
                  Our monthly air filter replacement service ensures you never
                  run out of fresh air.
                </MiText>
                <MiText className="text-slate-900">
                  Delivered automatically, hassle-free.
                </MiText>
              </div>
              <Button asChild>
                <Link to="/subscribe">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Order;
