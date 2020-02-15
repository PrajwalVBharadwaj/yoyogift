import React from "react";
import { shallow } from "../../../Enzyme";
import { GiftsSendContainer } from "./GiftsSendContainer";

describe("Testing GiftsSendContainer", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(<GiftsSendContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
