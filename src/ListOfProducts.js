import React from "react";
import ProductsRow from "./ProductsRow";
import ProductCategoryRow from "./ProductCategoryRow";

class ListOfProducts extends React.Component {
  constructor(props) {
    super(props);
    this.addtoShopList = this.addtoShopList.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.handleIncreaseNumber = this.handleIncreaseNumber.bind(this);
    this.handleDecreaseNumber = this.handleDecreaseNumber.bind(this);
  }

  addtoShopList(product) {
    const { shoppingCard } = this.props;
    let found = false;
    if (shoppingCard.length > 0) {
      found = shoppingCard.find(item => item.name === product.name);
    }
    if (found) {
      return;
    }
    this.props.increaseShoppingList(product);
  }

  deleteProduct(product) {
    this.props.toDeleteProduct(product);
  }

  handleIncreaseNumber(item) {
    this.props.toHandleIncreaseNumber(item);
  }

  handleDecreaseNumber(item) {
    this.props.toHandleDecreaseNumber(item);
  }

  render() {
    const { products, stocked, text, shoppingCard, showCard } = this.props;
    const showingProducts = showCard ? shoppingCard : products;
    const rows = [];
    let lastCategory = null;
    showingProducts.forEach(product => {
      if (stocked && !product.stocked) {
        return;
      }
      if (product.name.indexOf(text) === -1) {
        return;
      }
      if (product.category !== lastCategory && !showCard) {
        rows.push(
          <ProductCategoryRow
            key={product.category}
            category={product.category}
          />
        );
      }
      rows.push(
        <ProductsRow
          key={product.name}
          item={product}
          toHandleProductClick={this.addtoShopList}
          showCard={showCard}
          handleDeleteClick={this.deleteProduct}
          toIncreasingNumber={this.handleIncreaseNumber}
          toDecreasingNumber={this.handleDecreaseNumber}
        />
      );
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <td>
              <strong>Name</strong>
            </td>
            <td>
              <strong>price</strong>
            </td>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ListOfProducts;
