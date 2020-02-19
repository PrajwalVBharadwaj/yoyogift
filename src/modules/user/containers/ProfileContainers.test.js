import React from "react";
import { shallow, cardDetails } from "../../../Enzyme";
import { ProfileContainer } from "./ProfileContainers";

describe("Testong ProfileContainer", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(<ProfileContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
