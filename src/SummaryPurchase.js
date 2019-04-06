import React from "react";

import { Button } from "semantic-ui-react";

const SummaryPurchase = ({ backToPurchase, purchases }) => {
  let totalPrice = 0;
  purchases.map(
    product =>
      (totalPrice =
        totalPrice + product.numberItems * parseFloat(product.price.slice(1)))
  );
  const rounded = Math.round(totalPrice * 100) / 100;
  return (
    <div>
      <p>Total Price: $ {rounded.toString()}</p>
      <Button secondary onClick={() => backToPurchase()}>
        Add new items
      </Button>
      <Button primary>checkout</Button>
    </div>
  );
};

export default SummaryPurchase;
