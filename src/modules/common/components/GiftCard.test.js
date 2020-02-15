import React from "react";
import { shallow } from "../../../Enzyme";
import { GiftCard } from "./GiftCard";

describe("Testing Gift card component", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(
      <GiftCard
        classes={{}}
        giftCard={{
          cardName: "Test1",
          cardEmail: "test@e.com",
          id: 1,
          cardPoints: 2000,
          cardImage: "link"
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
