import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import RecipePage from "./RecipePage";

describe("RecipePage", () => {
  test("Should be RecipePage", () => {
    const wrapper = mount(
      <MemoryRouter>
        <RecipePage />
      </MemoryRouter>
    );
    expect(wrapper.exists("RecipePage")).toBeTruthy();
  });
});
