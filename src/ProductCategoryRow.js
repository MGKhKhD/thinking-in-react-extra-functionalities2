import React from "react";

class ProductCategoryRow extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <strong>{this.props.category}</strong>
        </td>
      </tr>
    );
  }
}

export default ProductCategoryRow;
