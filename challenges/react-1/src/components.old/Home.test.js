import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

describe("Home", () => {
  test("Should be Home", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(wrapper.exists("Home")).toBeTruthy();
  });
});
