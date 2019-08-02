import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import RecipeItem from "./RecipeItem";

describe("RecipeItem", () => {
  test("Should be RecipeItem", () => {
    const wrapper = mount(
      <MemoryRouter>
        <RecipeItem />
      </MemoryRouter>
    );
    expect(wrapper.exists("RecipeItem")).toBeTruthy();
  });
});
