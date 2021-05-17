import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className = " checkout_ad"
              src="https://i.pinimg.com/564x/55/dd/93/55dd9370923081235055698b059edcf9.jpg" alt="dsads" />

        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
        </div>
      </div>
      <div className="checkout_right">
          <Subtotal/>
        
      </div>
    </div>
  );
}

export default Checkout;
