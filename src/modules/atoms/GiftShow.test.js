import React from "react";
import { shallow, cardDetails } from "../../Enzyme";
import GiftShow from "./GiftShow";

describe("Testing giftShow compenent", () => {
  it("Snapshot testing ", () => {
    const wrapper = shallow(<GiftShow data={cardDetails} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("No user comments", () => {
    const wrapper = shallow(<GiftShow data={[]} />);
    expect(wrapper.find({ dataTest: "loading" }).length).toBe(1);
  });
});
