import React from "react";
import { cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import render from "../test-utils/render";
import CharacterList from "../components/CharacterList/CharacterList";
import CharacterListItem from "../components/CharacterListItem/CharacterListItem";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchBar from "../components/SearchBar/SearchBar";
import Nav from "../components/Nav/Nav";

afterEach(cleanup);

describe("CharacterList", () => {
  test("renders the component", () => {
    const { getByTestId } = render(<CharacterList />);

    expect(getByTestId("characterlist-container")).toBeInTheDocument();
  });
});

describe("CharacterListItem", () => {
  test("renders the component", () => {
    const { getByTestId } = render(<CharacterListItem />);

    expect(getByTestId("characterlistitem-container")).toBeInTheDocument();
  });
});

describe("NavBar", () => {
  test("renders the component", () => {
    const { getByTestId } = render(<Nav />);

    expect(getByTestId("nav-container")).toBeInTheDocument();
  });
});
describe("SearchBar", () => {
  test("renders the component", () => {
    const { getByTestId } = render(<SearchBar />);

    expect(getByTestId("searchbar-container")).toBeInTheDocument();
  });
});

describe("SearchForm", () => {
  test("renders the component", () => {
    const { getByTestId } = render(<SearchForm />);

    expect(getByTestId("searchform-container")).toBeInTheDocument();
  });
});
