import FadeIn from "@/components/fadein";
import MaskText from "@/components/maskText";
import MiText from "@/components/ui/miText";
import { Helmet } from "react-helmet-async";
import { Link, Navigate, useLocation } from "react-router-dom";

import Button from "@/components/ui/button";
import Product from "../assets/checkout/product.png";

const Success = () => {
  const { state } = useLocation();
  if (!state || !state.success) return <Navigate to="/404" />;
  const contact = state.contact || "";
  const firstName = state.firstName || "";
  const lastName = state.lastName || "";
  const address = state.address || "";
  const apartment = state.apartment || "";
  const postal = state.postal || "";
  const phone = state.phone || "";
  const quantity = state.quantity || 1;
  return (
    <>
      <Helmet>
        <title>Order Success · Smart Air Purifier 4</title>
        <meta
          name="description"
          content="You have successfully placed an order for a Xiaomi Smart Air Purifier 4"
        />
      </Helmet>
      <main className="mx-auto w-full max-w-screen-xl px-4 pt-[104px] md:px-16">
        <MaskText
          variant="splash"
          text="Order Placed Successfully"
          className="mb-4 text-3xl sm:text-4xl lg:text-5xl"
        />
        <FadeIn>
          <MiText className="mb-16">
            An email has been sent with order confirmation.
          </MiText>
        </FadeIn>

        <div className="flex flex-col items-start justify-center gap-12 lg:flex-row lg:gap-24">
          <section className="w-full">
            <div className="flex flex-col items-start gap-12">
              <div>
                <h6 className="mb-6 font-display text-2xl font-medium text-slate-900">
                  Contact Information
                </h6>
                <p className="text-slate-700">
                  <span className="font-medium text-slate-900">Contact: </span>
                  {contact}
                </p>
              </div>

              <div>
                <h6 className="mb-6 font-display text-2xl font-medium text-slate-900">
                  Delivery
                </h6>
                <p className="mb-1 text-slate-700">
                  <span className="font-medium text-slate-900">
                    First Name:{" "}
                  </span>
                  {firstName}
                </p>
                <p className="mb-1 text-slate-700">
                  <span className="font-medium text-slate-900">
                    Last Name:{" "}
                  </span>
                  {lastName}
                </p>
                <p className="mb-1 text-slate-700">
                  <span className="font-medium text-slate-900">Address: </span>
                  {address}
                </p>
                {Boolean(apartment) && (
                  <p className="mb-1 text-slate-700">
                    <span className="font-medium text-slate-900">
                      Address Line 2:{" "}
                    </span>
                    {contact}
                  </p>
                )}
                <p className="mb-1 text-slate-700">
                  <span className="font-medium text-slate-900">
                    Postal Code:{" "}
                  </span>
                  {postal}
                </p>
                <p className="mb-1 text-slate-700">
                  <span className="font-medium text-slate-900">Phone: </span>
                  {phone}
                </p>
              </div>
              <Button asChild>
                <Link to="/">Back to home</Link>
              </Button>
            </div>
          </section>
          <section className="sticky top-[104px] w-full lg:max-w-96">
            <div className="mb-8 flex gap-6 rounded-2xl bg-white p-3 pr-6">
              <img
                src={Product}
                alt="Smart Air Purifier 4"
                className="size-32 rounded-lg object-cover"
              />
              <div>
                <h6 className="mb-1 font-display text-xl font-medium text-slate-900">
                  Smart Air Purifier 4
                </h6>
                <p className="text-slate-700">Quantity: {quantity}</p>
              </div>
            </div>
            <div className="flex justify-between text-slate-900">
              <p className="text-lg font-medium">Total</p>
              <p className="text-lg font-medium">
                ${(199.99 * quantity).toFixed(2)}
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Success;
