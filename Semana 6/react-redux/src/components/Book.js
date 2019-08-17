import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart } from "../store/actions";

function Book({ books, onClick, match }) {
  const { id } = match.params;
  const book = books.find(book => book.id === parseInt(id, 10));

  return (
    <div>
      <div>{book.title}</div>
      <div>{book.description}</div>
      <img src={book.img} alt={book.title} />
      <div>
        <button onClick={onClick}>Add</button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    books: state.books.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onClick: addToCart
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);
