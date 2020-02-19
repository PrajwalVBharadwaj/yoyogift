import React from "react";
import { shallow } from "../../Enzyme";
import DatePickers from "./DatePicker";

describe("Testing Date picker", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(<DatePickers classes={{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
