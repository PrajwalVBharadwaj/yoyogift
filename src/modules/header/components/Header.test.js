import React from "react";
import { shallow } from "../../../Enzyme";
import { Header } from "./Header";

describe("Testing Header component ", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(<Header classes={{}} isLoggedIn={true} />);
    wrapper.setState({ showErrorSnack: true });
    expect(wrapper).toMatchSnapshot();
  });
});
