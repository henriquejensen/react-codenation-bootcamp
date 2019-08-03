import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  test("Should be App", () => {
    const wrapper = mount(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.exists("App")).toBeTruthy();
  });
});
