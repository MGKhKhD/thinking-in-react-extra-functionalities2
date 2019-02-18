import React from "react";
import { Icon, Input } from "semantic-ui-react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shoppingCard: false };

    this.handleTockCheck = this.handleTockCheck.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.goToShopingCard = this.goToShopingCard.bind(this);
  }

  handleTockCheck(e) {
    this.props.toCheckboxChange(e.target.checked);
  }

  handleInput(e) {
    this.props.toChangeInput(e.target.value);
  }

  goToShopingCard() {
    this.props.toShowingShoppingCard(!this.state.shoppingCard);
    this.setState(state => ({
      shoppingCard: !state.shoppingCard
    }));
  }

  render() {
    const { text, stocked, shoppingCard } = this.props;
    return (
      <form>
        <React.Fragment>
          <Input
            icon={<Icon name="search" inverted circular link />}
            placeholder="Search..."
            value={text}
            onChange={this.handleInput}
          />
          {shoppingCard.length > 0 && (
            <Input
              type="button"
              icon={<Icon name="cart arrow down" />}
              value={shoppingCard.length}
              onClick={this.goToShopingCard}
            />
          )}
        </React.Fragment>
        <p>
          <input
            type="checkbox"
            onChange={this.handleTockCheck}
            checked={stocked}
          />{" "}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;
