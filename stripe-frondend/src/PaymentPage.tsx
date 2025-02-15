import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { StripeCardElementOptions } from "@stripe/stripe-js";

const PaymentPage = () => {
  const location = useLocation();
  const total = location.state?.total || 0;
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const CARD_OPTIONS: StripeCardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": { color: "#aab7c4" },
        fontFamily: "Arial, sans-serif",
      },
      invalid: {
        color: "#9e2146",
      },
    },
  };
  const handleBack = async () => {
    navigate("/");
  };

  const handlePayment = async () => {
    if (!stripe || !elements) return alert("Stripe chưa sẵn sàng!");

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      alert("Không tìm thấy CardElement!");
      return;
    }

    setLoading(true);

    try {
      // Tạo PaymentIntent từ backend
      const { data } = await axios.post(
        "http://localhost:3000/payment/checkout",
        {
          amount: total * 100,
        }
      );

      const clientSecret = data.clientSecret;

      // Xác nhận thanh toán với Stripe
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });

      if (result.error) {
        alert(`Thanh toán thất bại: ${result.error.message}`);
      } else {
        alert("Thanh toán thành công!");
      }
    } catch (error) {
      console.error("Lỗi khi thanh toán:", error);
      alert("Thanh toán thất bại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="payment-container">
      <h2 className="payment-title">Payment</h2>

      <div className="form-row">
        <label className="form-label">Total Amount</label>
        <input
          type="number"
          value={total}
          readOnly
          className="form-input readonly"
        />
      </div>

      <div className="form-row">
        <label className="form-label">Card Details</label>
      </div>
      <div className="form-row">
        <div className="card-container">
          <CardElement options={CARD_OPTIONS} />
        </div>
      </div>

      <button onClick={handlePayment} className="btn" disabled={loading}>
        {loading ? "Processing..." : "Confirm Payment"}
      </button>

      <button onClick={handleBack} className="btn-back">
        {loading ? "Processing..." : "Back"}
      </button>
    </div>
  );
};

export default PaymentPage;
