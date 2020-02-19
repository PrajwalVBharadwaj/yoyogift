import React from "react";
import { shallow } from "../../../Enzyme";
import { Header } from "./Header";
import { ErrorMessage } from "formik";

describe("Testing Header component ", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(
      <Header
        classes={{}}
        isLoggedIn={true}
        userDetails={{ email: "yoyogiftg2@email.com" }}
      />
    );
    wrapper.setState({ showErrorSnack: true });
    expect(wrapper).toMatchSnapshot();
  });

  it("Testig functions", () => {
    const wrapper = shallow(<Header classes={{}} logout={() => {}} />);
    wrapper.instance().login();
    wrapper.instance().goTolanding();
    wrapper.instance().myProfile();
    wrapper.instance().giftsSend();
    wrapper.instance().giftsReceived();
    wrapper.instance().logOut();
    wrapper.update();
    expect(wrapper.state().isOpen).toBe(true);
  });
});
