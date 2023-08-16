import React from "react";
import classses from "./Checkout.module.css";

const Checkout = (props) => {
  return (
    <form>
      <div className={classses.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classses.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classses.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classses.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
    </form>
  );
};

export default Checkout;
