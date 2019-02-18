import React from "react";

import { Icon } from "semantic-ui-react";

class ProductsRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleProductClick = this.handleProductClick.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
    this.increasingNumber = this.increasingNumber.bind(this);
    this.decreasingNumber = this.decreasingNumber.bind(this);
  }

  increasingNumber() {
    this.props.toIncreasingNumber(this.props.item);
  }

  decreasingNumber() {
    if (this.props.item.numberItems >= 1) {
      this.props.toDecreasingNumber(this.props.item);
    }
    return;
  }

  handleProductClick() {
    const item = this.props.item;
    if (!item.stocked) {
      alert("The product is not stocked.");
      return;
    }
    this.props.toHandleProductClick({ ...this.props.item, numberItems: 1 });
  }

  deleteClick() {
    this.props.handleDeleteClick(this.props.item);
  }

  render() {
    const item = this.props.item;
    const color = !item.stocked ? "red" : "black";
    return (
      <tr>
        <td style={{ color: color }} onClick={this.handleProductClick}>
          {this.props.item.name}
        </td>
        <td>{this.props.item.price}</td>
        {this.props.showCard && (
          <React.Fragment>
            <td style={{ color: "red" }} onClick={this.deleteClick}>
              <Icon name="window close outline" />
            </td>
            <td style={{ color: "green" }} onClick={this.increasingNumber}>
              <Icon name="plus square outline" />
            </td>
            <td style={{ fontsize: "30" }} onClick={this.decreasingNumber}>
              <Icon name="minus square outline" />
            </td>
            <td>{this.props.item.numberItems}</td>
          </React.Fragment>
        )}
      </tr>
    );
  }
}

export default ProductsRow;
