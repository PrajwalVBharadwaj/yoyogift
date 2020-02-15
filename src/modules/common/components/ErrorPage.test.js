import React from "react";
import { shallow } from "../../../Enzyme";
import { ErrorPage } from "./ErrorPage";
import { defaultTableRowRenderer } from "react-virtualized";

describe("Testing error page", () => {
  it("render the container", () => {
    const wrapper = shallow(<ErrorPage />);
    expect(wrapper.find("img").length).toBe(1);
  });
});
