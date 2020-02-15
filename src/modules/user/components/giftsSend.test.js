import React from "react";
import { shallow, cardDetails } from "../../../Enzyme";
import { GiftsSend } from "./GiftsSend";

describe("Testing giftsSend component", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(<GiftsSend classes={{}} data={[cardDetails]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
