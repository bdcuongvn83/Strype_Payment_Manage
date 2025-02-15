import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const [productName, setProductName] = useState("Product ABC");
  const [price, setPrice] = useState(1000);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const total = price * quantity;

  const handleCheckout = () => {
    navigate("/payment", { state: { total } });
  };

  return (
    <div className="form-container">
      <h2>Checkout</h2>

      <div className="form-row">
        <label className="form-label">Product Name</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="form-input"
        />
      </div>

      <div className="form-row">
        <label className="form-label">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="form-input"
        />
      </div>

      <div className="form-row">
        <label className="form-label">Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="form-input"
        />
      </div>

      <div className="form-row">
        <label className="form-label">Total</label>
        <input type="number" value={total} readOnly className="form-input" />
      </div>

      <button className="btn" onClick={handleCheckout}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default CheckoutPage;
