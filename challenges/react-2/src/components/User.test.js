import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import User from "./User";

describe("User", () => {
  test("Should be User", () => {
    const wrapper = mount(
      <MemoryRouter>
        <User />
      </MemoryRouter>
    );
    expect(wrapper.exists("User")).toBeTruthy();
  });
});
