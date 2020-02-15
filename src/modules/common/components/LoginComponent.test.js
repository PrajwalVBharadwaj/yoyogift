import React from "react";
import { shallow } from "../../../Enzyme";
import LoginComponent from "./LoginComponent";

describe("Testing Login component", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(<LoginComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
