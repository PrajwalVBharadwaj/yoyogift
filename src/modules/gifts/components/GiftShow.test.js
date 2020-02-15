import React from "react";
import { shallow } from "../../../Enzyme";
import GiftShow from "./GiftShow";

describe("Testing giftShow compenent", () => {
  it("Snapshot testing ", () => {
    const data = {
      cardName: "Test1",
      cardEmail: "test@e.com",
      id: 1,
      cardPoints: 2000,
      cardImage: "link"
    };
    const wrapper = shallow(<GiftShow data={data} />);
    expect(wrapper).toMatchSnapshot();
  });
});
