import React from "react";

import { Button } from "semantic-ui-react";

class SummaryPurchase extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.backToPurchase();
  }

  render() {
    let totalPrice = 0;
    this.props.purchases.map(
      product =>
        (totalPrice =
          totalPrice + product.numberItems * parseFloat(product.price.slice(1)))
    );
    const rounded = Math.round(totalPrice * 100) / 100;
    return (
      <div>
        <p>Total Price: $ {rounded.toString()}</p>
        <Button secondary onClick={this.handleChange}>
          Add new items
        </Button>
        <Button primary>checkout</Button>
      </div>
    );
  }
}

export default SummaryPurchase;
