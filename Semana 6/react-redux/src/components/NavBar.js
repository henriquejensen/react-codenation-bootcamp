import React from "react";
import { connect } from "react-redux";
import Search from "./Search";
import User from "./User";
import ShopCart from "./ShopCart";

function NavBar({ cartNumber, dispatch }) {
  const onSearch = event => {
    console.log(event.target.value);
    const { value } = event.target;
    dispatch({ type: "SEARCH", value: value });
  };

  return (
    <nav>
      NavBar
      <Search onSearch={onSearch} />
      <ShopCart cartNumber={cartNumber} />
      <User />
    </nav>
  );
}

function mapStateToProps(state) {
  return {
    cartNumber: state.books.cart
  };
}

export default connect(mapStateToProps)(NavBar);
