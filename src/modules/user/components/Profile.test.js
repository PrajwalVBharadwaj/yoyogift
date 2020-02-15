import React from "react";
import { shallow, userDetails } from "../../../Enzyme";
import Profile from "./Profile";

describe("Testing profile component", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(<Profile detailsObject={userDetails} />);
    expect(wrapper).toMatchSnapshot();
  });
});
