import React from "react";
import { shallow, userDetails, cardDetails } from "../../../Enzyme";
import { GiftsList } from "./GiftsList";

describe("Testing giftsList component", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(
      <GiftsList
        userDetails={userDetails}
        classes={{}}
        giftCardsFiltered={[]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
