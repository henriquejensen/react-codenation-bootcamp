import React from "react";
import { mount } from "enzyme";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("Should be App", () => {
    const wrapper = mount(<Navbar />);
    expect(wrapper.is("Navbar")).toBeTruthy();
  });
});
