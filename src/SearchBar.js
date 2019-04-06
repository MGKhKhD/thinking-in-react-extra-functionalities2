import React, { useState } from "react";
import { Icon, Input } from "semantic-ui-react";

const SearchBar = ({
  text,
  stocked,
  shoppingCard,
  toCheckboxChange,
  toChangeInput,
  toShowingShoppingCard
}) => {
  const [shopping, useShooping] = useState(false);

  return (
    <form>
      <React.Fragment>
        <Input
          icon={<Icon name="search" inverted circular link />}
          placeholder="Search..."
          value={text}
          onChange={e => toChangeInput(e.target.value)}
        />
        {shoppingCard.length > 0 && (
          <Input
            type="button"
            icon={<Icon name="cart arrow down" />}
            value={shoppingCard.length}
            onClick={() => {
              toShowingShoppingCard(shopping);
              useShooping(!shopping);
            }}
          />
        )}
      </React.Fragment>
      <p>
        <input
          type="checkbox"
          onChange={e => toCheckboxChange(e.target.checked)}
          checked={stocked}
        />{" "}
        Only show products in stock
      </p>
    </form>
  );
};

export default SearchBar;
