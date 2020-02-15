import React from "react";
import { shallow } from "../../../Enzyme";
import { GiftsReceivedContainer } from "./giftsReceivedContainer";
import {} from "jest";

jest.m;

describe("Test GiftsReceivedContainer ", () => {
  it("User not logged in", () => {
    const wrapper = shallow(<GiftsReceivedContainer isLoggedIn={false} />);
    expect(wrapper.find("Redirect").length).toBe(1);
  });
  it("User logged in but doesn't have any gift", () => {
    const wrapper = shallow(
      <GiftsReceivedContainer isLoggedIn={true} receivedCards={[]} />
    );
    expect(wrapper.find("h2").text()).toBe("NO DATA");
  });
  it("User logged in and gifts loading", () => {
    const wrapper = shallow(
      <GiftsReceivedContainer isLoggedIn={true} receivedCards={false} />
    );
    expect(wrapper.find("CircularProgress").length).toBe(1);
  });
});
