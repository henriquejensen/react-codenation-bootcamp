import React from "react";
import CardBook from "./CardBook";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addToCart } from "./../store/actions";

function BookList({ books = [], search, addToCart }) {
  const newBooks = books.filter(book => {
    return book.title.toLowerCase().includes(search);
  });

  if (newBooks.length === 0) {
    return <div>Nenhum livro encontrado</div>;
  }

  return (
    <div>
      <ul>
        {newBooks.map(book => (
          <CardBook onClick={addToCart} key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    books: state.books.books,
    search: state.books.search
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addToCart
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
