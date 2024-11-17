import MaskText from "@/components/maskText";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { MaterialSymbol } from "react-material-symbols";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import Paynow from "../assets/checkout/paynow.png";
import Product from "../assets/checkout/product.png";

const Checkout = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  if (!state || !state.quantity) return <Navigate to="/404" />;
  const quantity: number = state.quantity;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    navigate("/success", {
      state: {
        success: true,
        contact: data.get("contact"),
        firstName: data.get("first-name"),
        lastName: data.get("last-name"),
        address: data.get("address"),
        apartment: data.get("apartment"),
        postal: data.get("postal-code"),
        phone: data.get("phone"),
        quantity: quantity,
      },
    });
  };
  return (
    <>
      <Helmet>
        <title>Checkout · Smart Air Purifier 4</title>
      </Helmet>
      <main className="mx-auto w-full max-w-screen-xl px-4 pt-[104px] md:px-16">
        <MaskText
          variant="splash"
          text="Checkout"
          className="mb-16 text-3xl sm:text-4xl lg:text-5xl"
        />
        <div className="flex flex-col items-start justify-center gap-12 lg:flex-row lg:gap-24">
          <section className="w-full">
            <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
              <div>
                <h6 className="mb-6 font-display text-2xl font-medium text-slate-900">
                  Contact
                </h6>
                <Input
                  type="text"
                  name="contact"
                  required
                  placeholder="Email or mobile phone number"
                />
              </div>
              <div className="flex flex-col gap-6">
                <h6 className="font-display text-2xl font-medium text-slate-900">
                  Address
                </h6>
                <div className="flex gap-3">
                  <Input
                    type="text"
                    placeholder="First Name"
                    name="first-name"
                    required
                    pattern="[A-Za-z][A-Za-z\s]*"
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    name="last-name"
                    required
                    pattern="[A-Za-z][A-Za-z\s]*"
                  />
                </div>
                <Input
                  type="text"
                  name="address"
                  required
                  pattern="^[#.0-9a-zA-Z\s,-]+$"
                  placeholder="Address"
                />
                <Input
                  type="text"
                  name="apartment"
                  pattern="^[#.0-9a-zA-Z\s,-]+$"
                  placeholder="Apartment, unit number, etc. (optional)"
                />
                <Input
                  className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  type="number"
                  name="postal-code"
                  pattern="^[0-9]{6}$"
                  placeholder="Postal Code"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                  pattern="^\+?\d+(-\d+)*$"
                  required
                />
              </div>
              <div>
                <h6 className="mb-6 font-display text-2xl font-medium text-slate-900">
                  Payment Option
                </h6>
                <div className="flex flex-wrap gap-3">
                  <Label className="min-w-fit flex-1">
                    <Input
                      type="radio"
                      name="payment-method"
                      id="credit"
                      value="credit"
                      defaultChecked
                      className="peer/credit sr-only"
                    />
                    <div className="flex cursor-pointer items-center gap-3 rounded-3xl border border-slate-200 px-4 py-3 font-medium text-slate-900 outline outline-0 outline-offset-4 outline-blue-700 ring-0 ring-emerald-600 transition-shadow peer-checked/credit:ring-2 peer-focus-visible/credit:outline-2">
                      <MaterialSymbol icon="credit_card" size={24} />
                      Credit or Debit Card
                    </div>
                  </Label>
                  <Label className="min-w-fit flex-1">
                    <Input
                      type="radio"
                      name="payment-method"
                      id="credit"
                      value="credit"
                      className="peer/paynow sr-only"
                    />
                    <div className="flex cursor-pointer items-center gap-3 rounded-3xl border border-slate-200 px-4 py-3 font-medium text-slate-900 outline outline-0 outline-offset-4 outline-blue-700 ring-0 ring-emerald-600 transition-shadow peer-checked/paynow:ring-2 peer-focus-visible/paynow:outline-2">
                      <img src={Paynow} alt="paynow" className="h-6" />
                      Paynow
                    </div>
                  </Label>
                </div>
              </div>
              <div className="w-full">
                <Button type="submit" className="w-full">
                  Place Order
                </Button>
                <p className="mt-2 text-center text-sm text-slate-500">
                  By placing order, you agree to our{" "}
                  <Link to="/privacy" target="_blank" className="underline">
                    privacy policy
                  </Link>
                </p>
              </div>
            </form>
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

export default Checkout;
