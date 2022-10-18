import React from "react";
import Header from "../Components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import { selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../Components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    // create a checkout session
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
    });

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data / id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex lmax-m-screen-2xl mx-auto">
        {/* left side */}
        <div className="flex-grow m-5 shadow-sm">
          <div className="flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl borde-b pb-4">
              {items.length === 0
                ? "Your Shopping Cart is Empty"
                : "Shopping Cart"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                rating={item.rating}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>
        {/* right side */}
        <div className="flex flex-col bg-white p-10 m-5 shadow-md">
          {items.length > 0 && (
            <div>
              <h2>
                Subtotal ({items.length} items):{" "}
                <Currency quantity={total} currency="USD" />
                <span className="font-bold"></span>
              </h2>
              <button
                onClick={createCheckoutSession}
                role="link"
                className="button mt-2 justify-self-end"
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
