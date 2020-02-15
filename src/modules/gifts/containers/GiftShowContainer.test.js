import React from "react";
import { shallow, cardDetails } from "../../../Enzyme";
import { GiftShowContainer } from "./GiftShowContainer";

describe("Testing GiftsShowContainer", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(<GiftShowContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
