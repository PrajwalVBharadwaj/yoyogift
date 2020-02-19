import React from "react";
import { shallow, userDetails, cardDetails } from "../../Enzyme";
import { GiftsSendContainer } from "./GiftsSendContainer";

describe("Testing GiftsSendContainer", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(
      <GiftsSendContainer
        isLoggedIn={true}
        user={userDetails}
        fetchSentCards={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("Testing for sent cards", () => {
    const wrapper = shallow(
      <GiftsSendContainer isLoggedIn={true} sentCards={[cardDetails]} />
    );
    expect(wrapper.find("div").length).toBe(1);
  });

  it("Testing for no sent cards", () => {
    const wrapper = shallow(
      <GiftsSendContainer isLoggedIn={true} sentCards={[]} />
    );
    expect(wrapper.find("h2").length).toBe(1);
  });

  it("Testing for not logged in", () => {
    const wrapper = shallow(<GiftsSendContainer isLoggedIn={false} />);
    expect(wrapper.find("Redirect").length).toBe(1);
  });
});
