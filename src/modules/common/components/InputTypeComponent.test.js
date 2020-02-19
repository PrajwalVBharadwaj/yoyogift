import React from "react";
import { shallow } from "../../../Enzyme";
import InputTypeComponent from "./inputTypeComponent";

describe("Testing InputTypeComponent ", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(<InputTypeComponent />);
    expect(wrapper).toMatchSnapshot();
  });
  it("Input change", () => {
    const wrapper = shallow(<InputTypeComponent handleInputChange={e => {}} />);
    const input = wrapper.find({ dataTest: "input" });
    input.simulate("change", { target: { value: "Test" } });
    expect(wrapper.find({ dataTest: "input" }).length).toBe(1);
  });
});
