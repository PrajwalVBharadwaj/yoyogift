import React from "react";
import { shallow, cardDetails } from "../../../Enzyme";
import { GiftCard } from "./GiftCard";

describe("Testing Gift card component", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(
      <GiftCard
        classes={{}}
        giftCard={cardDetails}
        userEmail={"test@mail.com"}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
