import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Login from "./Login";

describe("Login", () => {
  test("Should be Login", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    expect(wrapper.exists("Login")).toBeTruthy();
  });
});
