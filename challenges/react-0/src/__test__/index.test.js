import React from "react";
import { mount } from "enzyme";
import App from "../components/App";

jest.mock(
  "../sample_data/recipes.json",
  () => ({
    results: [
      {
        title: "Recipe",
        href: "",
        ingredients: "Ingredient",
        thumbnail: "image.jpg"
      },
      {
        title: "Other Recipe",
        href: "",
        ingredients: "Other Ingredient",
        thumbnail: "image.jpg"
      }
    ]
  }),
  { virtual: true }
);

describe("App", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("Render recipes", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("RecipeItem").length).toEqual(2);
  });

  it("Search recipes by title", () => {
    const wrapper = mount(<App />);
    wrapper
      .find("Navbar input")
      .simulate("change", { target: { value: "Other Recipe" } });
    expect(wrapper.find("RecipeItem").length).toEqual(1);
  });

  it("Search recipes by ingredients", () => {
    const wrapper = mount(<App />);
    wrapper
      .find("Navbar input")
      .simulate("change", { target: { value: "Other Ingredient" } });
    expect(wrapper.find("RecipeItem").length).toEqual(1);
  });

  it("Search recipes case insensitive", () => {
    const wrapper = mount(<App />);
    wrapper
      .find("Navbar input")
      .simulate("change", { target: { value: "other recipe" } });
    expect(wrapper.find("RecipeItem").length).toEqual(1);
  });

  it("Search recipes by partial string", () => {
    const wrapper = mount(<App />);
    wrapper
      .find("Navbar input")
      .simulate("change", { target: { value: "er Ing" } });
    expect(wrapper.find("RecipeItem").length).toEqual(1);
  });

  it("Search recipes by unmatched string", () => {
    const wrapper = mount(<App />);
    wrapper
      .find("Navbar input")
      .simulate("change", { target: { value: "Unmatched" } });
    expect(wrapper.find("RecipeItem").length).toEqual(0);
  });

  it("BONUS: Highlight search term", () => {
    const searchString = "er Ing";
    const wrapper = mount(<App />);
    wrapper
      .find("Navbar input")
      .simulate("change", { target: { value: searchString } });
    expect(
      wrapper
        .find("RecipeItem mark")
        .at(0)
        .text()
    ).toEqual(searchString);
  });
});
