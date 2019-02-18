import React from "react";
import SummaryPurchase from "./SummaryPurchase";
import SearchBar from "./SearchBar";
import ListOfProducts from "./ListOfProducts";

import { Container, Header } from "semantic-ui-react";

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      stocked: false,
      shoppingCard: [],
      showCard: false
    };

    this.showStockOnly = this.showStockOnly.bind(this);
    this.handleSearchItem = this.handleSearchItem.bind(this);
    this.handleAddProductToShoppingCard = this.handleAddProductToShoppingCard.bind(
      this
    );
    this.showPurchasedProducts = this.showPurchasedProducts.bind(this);
    this.deleteFromShoppingCard = this.deleteFromShoppingCard.bind(this);
    this.handleBackToPurchase = this.handleBackToPurchase.bind(this);
    this.increasePurchasedNumber = this.increasePurchasedNumber.bind(this);
    this.decreasePurchasedNumber = this.decreasePurchasedNumber.bind(this);
  }

  decreasePurchasedNumber(product) {
    const shoppings = [];
    this.state.shoppingCard.forEach(item => {
      if (item.name === product.name) {
        let newItem = { ...item, numberItems: item.numberItems - 1 };
        shoppings.push(newItem);
      } else {
        shoppings.push(item);
      }

      this.setState({
        ...this.state,
        shoppingCard: shoppings
      });
    });
  }

  increasePurchasedNumber(product) {
    const shoppings = [];
    this.state.shoppingCard.forEach(item => {
      if (item.name === product.name) {
        let newItem = { ...item, numberItems: item.numberItems + 1 };
        shoppings.push(newItem);
      } else {
        shoppings.push(item);
      }

      this.setState({
        ...this.state,
        shoppingCard: shoppings
      });
    });
  }

  showStockOnly(stocked) {
    this.setState({ stocked });
  }

  handleBackToPurchase() {
    this.setState({ showCard: false });
  }

  handleSearchItem(text) {
    this.setState({ text });
  }

  handleAddProductToShoppingCard(product) {
    this.setState({
      ...this.state,
      shoppingCard: this.state.shoppingCard.concat(product)
    });
  }

  showPurchasedProducts(showCard) {
    this.setState({ showCard });
  }

  deleteFromShoppingCard(product) {
    this.setState({
      ...this.state,
      shoppingCard: this.state.shoppingCard.filter(
        item => item.name !== product.name
      )
    });
    if (this.state.shoppingCard.length === 0) {
      this.setState({ showCard: false });
    }
  }

  render() {
    const products = this.props.products;

    return (
      <Container>
        {!this.state.showCard && (
          <SearchBar
            {...this.state}
            toCheckboxChange={this.showStockOnly}
            toChangeInput={this.handleSearchItem}
            toShowingShoppingCard={this.showPurchasedProducts}
          />
        )}
        {this.state.showCard && (
          <Header as="h3" dividing>
            Summary of Purchase
          </Header>
        )}
        <ListOfProducts
          products={products}
          {...this.state}
          increaseShoppingList={this.handleAddProductToShoppingCard}
          toDeleteProduct={this.deleteFromShoppingCard}
          toHandleIncreaseNumber={this.increasePurchasedNumber}
          toHandleDecreaseNumber={this.decreasePurchasedNumber}
        />
        {this.state.showCard && (
          <SummaryPurchase
            purchases={this.state.shoppingCard}
            backToPurchase={this.handleBackToPurchase}
          />
        )}
      </Container>
    );
  }
}

export default ProductTable;
