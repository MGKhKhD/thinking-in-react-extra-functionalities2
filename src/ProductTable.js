import React, { useState } from "react";
import SummaryPurchase from "./SummaryPurchase";
import SearchBar from "./SearchBar";
import ListOfProducts from "./ListOfProducts";

import { Container, Header } from "semantic-ui-react";

const ProductTable = ({ products }) => {
  const [text, useText] = useState("");
  const [stocked, useStocked] = useState(false);
  const [shoppingCard, useShoppingCard] = useState([]);
  const [showCard, useShowCard] = useState(false);

  function decreasePurchasedNumber(product) {
    const shoppings = [];
    shoppingCard.forEach(item => {
      if (item.name === product.name) {
        let newItem = { ...item, numberItems: item.numberItems - 1 };
        shoppings.push(newItem);
      } else {
        shoppings.push(item);
      }

      useShoppingCard(shoppings);
    });
  }

  function increasePurchasedNumber(product) {
    const shoppings = [];
    shoppingCard.forEach(item => {
      if (item.name === product.name) {
        let newItem = { ...item, numberItems: item.numberItems + 1 };
        shoppings.push(newItem);
      } else {
        shoppings.push(item);
      }

      useShoppingCard(shoppings);
    });
  }

  function deleteFromShoppingCard(product) {
    useShoppingCard(shoppingCard.filter(item => item.name !== product.name));

    if (shoppingCard.length === 0) {
      useShowCard(false);
    }
  }

  const objState = { text, stocked, shoppingCard, showCard };
  return (
    <Container>
      {!showCard && (
        <SearchBar
          {...objState}
          toCheckboxChange={stocked => useStocked(stocked)}
          toChangeInput={text => useText(text)}
          toShowingShoppingCard={showCard => useShowCard(showCard)}
        />
      )}
      {showCard && (
        <Header as="h3" dividing>
          Summary of Purchase
        </Header>
      )}
      <ListOfProducts
        products={products}
        {...objState}
        increaseShoppingList={product =>
          useShoppingCard(shoppingCard.concat(product))
        }
        toDeleteProduct={product => deleteFromShoppingCard(product)}
        toHandleIncreaseNumber={product => increasePurchasedNumber(product)}
        toHandleDecreaseNumber={product => decreasePurchasedNumber(product)}
      />
      {showCard && (
        <SummaryPurchase
          purchases={shoppingCard}
          backToPurchase={() => useShowCard(false)}
        />
      )}
    </Container>
  );
};

export default ProductTable;
