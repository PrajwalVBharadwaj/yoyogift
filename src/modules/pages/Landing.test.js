import React from "react";
import { shallow } from "../../Enzyme";
import Landing from "./Landing";

describe("Testing Landing", () => {
  it("Snapshot testing", () => {
    const warpper = shallow(<Landing />);
    expect(warpper).toMatchSnapshot();
  });
});
