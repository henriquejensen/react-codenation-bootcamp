import React from "react";
import { mount } from "enzyme";
import RecipeItem from "./RecipeItem";

describe("RecipeItem", () => {
  test("Should be RecipeItem", () => {
    const wrapper = mount(<RecipeItem />);
    expect(wrapper.is("RecipeItem")).toBeTruthy();
  });
});
