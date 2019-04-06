import React from "react";

import { Icon } from "semantic-ui-react";

const ProductsRow = ({
  item,
  showCard,
  toIncreasingNumber,
  toDecreasingNumber,
  toHandleProductClick,
  handleDeleteClick
}) => {
  const color = !item.stocked ? "red" : "black";
  return (
    <tr>
      <td
        style={{ color: color }}
        onClick={() => {
          if (!item.stocked) {
            alert("The product is not stocked.");
            return;
          }
          toHandleProductClick({ ...item, numberItems: 1 });
        }}
      >
        {item.name}
      </td>
      <td>{item.price}</td>
      {showCard && (
        <React.Fragment>
          <td style={{ color: "red" }} onClick={() => handleDeleteClick(item)}>
            <Icon name="window close outline" />
          </td>
          <td
            style={{ color: "green" }}
            onClick={() => toIncreasingNumber(item)}
          >
            <Icon name="plus square outline" />
          </td>
          <td
            style={{ fontsize: "30" }}
            onClick={() => {
              if (item.numberItems >= 1) {
                toDecreasingNumber(item);
              }
              return;
            }}
          >
            <Icon name="minus square outline" />
          </td>
          <td>{item.numberItems}</td>
        </React.Fragment>
      )}
    </tr>
  );
};

export default ProductsRow;
