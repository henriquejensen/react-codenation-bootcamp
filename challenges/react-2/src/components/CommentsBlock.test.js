import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import CommentsBlock from "./CommentsBlock";

describe("CommentsBlock", () => {
  test("Should be CommentsBlock", () => {
    const wrapper = mount(
      <MemoryRouter>
        <CommentsBlock />
      </MemoryRouter>
    );
    expect(wrapper.exists("CommentsBlock")).toBeTruthy();
  });
});
