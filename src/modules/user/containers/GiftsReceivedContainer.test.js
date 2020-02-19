import React from "react";
import { shallow, cardDetails, userDetails } from "../../../Enzyme";
import { GiftsReceivedContainer } from "./GiftsReceivedContainer";

describe("Testing GiftReceivedContainer", () => {
  it("Snapsot testing", () => {
    const wrapper = shallow(
      <GiftsReceivedContainer
        isLoggedIn={true}
        user={userDetails}
        fetchReceivedCards={() => {}}
        redeemCard={() => {}}
      />
    );
    wrapper.instance().handleRedeemCard(cardDetails);
    wrapper.instance().componentDidCatch();
    expect(wrapper.find({ dataTest: "progress" }).length).toBe(1);
  });

  it("Testing for no received cards", () => {
    const wrapper = shallow(
      <GiftsReceivedContainer isLoggedIn={true} receivedCards={[]} />
    );
    expect(wrapper.find("h2").length).toBe(1);
  });

  it("Testing for no received cards", () => {
    const wrapper = shallow(
      <GiftsReceivedContainer isLoggedIn={true} receivedCards={[cardDetails]} />
    );
    expect(wrapper.find("div").length).toBe(1);
  });

  it("Testing for not logged in", () => {
    const wrapper = shallow(<GiftsReceivedContainer isLoggedIn={false} />);
    expect(wrapper.find("Redirect").length).toBe(1);
  });
});
