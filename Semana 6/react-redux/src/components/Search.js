import React from "react";

export default function Search({ onSearch }) {
  return (
    <div>
      <input onChange={onSearch} placeholder="Buscar livro" />
    </div>
  );
}
