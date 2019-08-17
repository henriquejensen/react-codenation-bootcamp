import React from "react";
import { Link } from "react-router-dom";

export default function CardBook({ book, onClick }) {
  return (
    <div>
      <img height="150" src={book.img} alt={book.title} />
      <div>
        <button onClick={onClick}>Add</button>
        <Link to={`/book/${book.id}`}>
          <button>Ver</button>
        </Link>
      </div>
    </div>
  );
}
