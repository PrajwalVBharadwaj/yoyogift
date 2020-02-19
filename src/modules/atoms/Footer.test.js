import React from "react";
import { shallow } from "../../Enzyme";
import { Footer } from "./Footer";

describe("Testing Footer ", () => {
  it("display container", () => {
    const wrapper = shallow(<Footer classes={{}} />);
    expect(wrapper.find("div").length).toBe(1);
  });
});
