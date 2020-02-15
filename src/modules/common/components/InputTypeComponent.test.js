import React from "react";
import { shallow } from "../../../Enzyme";
import InputTypeComponent from "./inputTypeComponent";

describe("Testing InputTypeComponent ", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(<InputTypeComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
