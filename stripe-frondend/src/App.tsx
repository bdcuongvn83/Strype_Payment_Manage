import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "./CheckoutPage";
import PaymentPage from "./PaymentPage";
import "./App.css";

// replace by your public key.
const stripePromise = loadStripe(
  "put-yourpublic-key", //<- TODO your public key.
  {
    locale: "en", // Force English
  }
);

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          {/* Trang Checkout */}
          <Route path="/" element={<CheckoutPage />} />

          {/* Trang Payment - Bọc bằng Elements */}
          <Route
            path="/payment"
            element={
              <Elements stripe={stripePromise}>
                <PaymentPage />
              </Elements>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
