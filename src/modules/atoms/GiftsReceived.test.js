import React from "react";
import { shallow, cardDetails } from "../../Enzyme";
import { GiftsReceived } from "./GiftsReceived";

describe("Testing GiftsReceived contaoner", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(
      <GiftsReceived classes={{}} data={[cardDetails]} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
