import React from "react";
import { adminEmail } from "../../../config/constants";
import { shallow, userDetails } from "../../../Enzyme";
import LoginComponent from "./LoginComponent";
import axiosWrapper from "../../../apis/axiosCreate";

describe("Testing Login component", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(<LoginComponent />);
    expect(wrapper).toMatchSnapshot();
  });
  it("Native Login, invalid email", async () => {
    let wrapper = shallow(<LoginComponent />);
    const loginButton = wrapper.find({ dataTest: "nativeLogin" });
    wrapper.setState({ email: "t@e.com", password: "test" });
    wrapper.update();
    axiosWrapper.get = jest.fn().mockImplementation(() => {
      return Promise.resolve({ data: [] });
    });
    await loginButton.simulate("click");
    wrapper = wrapper.update();
    expect(wrapper.state().snackBarText).toBe(
      "Entered email is not registered"
    );
  });

  it("Native Login, valid email invalid password", async () => {
    let wrapper = shallow(<LoginComponent />);
    const loginButton = wrapper.find({ dataTest: "nativeLogin" });
    wrapper.setState({ email: "t@e.com", password: "test1" });
    axiosWrapper.get = jest.fn().mockImplementation(() => {
      return Promise.resolve({ data: [userDetails] });
    });
    await loginButton.simulate("click");
    wrapper = wrapper.update();
    expect(wrapper.state().isLoading).toBe(false);
  });

  it("Native Login, valid email (social media login)", async () => {
    let wrapper = shallow(<LoginComponent />);
    const loginButton = wrapper.find({ dataTest: "nativeLogin" });
    // wrapper.setState({ email: "t@e.com", password: "test1" });
    axiosWrapper.get = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        data: [{ ...userDetails, password: undefined }]
      });
    });
    await loginButton.simulate("click");
    wrapper = wrapper.update();
    expect(wrapper.state().snackBarText).toBe(
      "Entered email is registered through social media login, please use same login option"
    );
  });

  it("Native Login, valid email and password", async () => {
    let wrapper = shallow(<LoginComponent login={obj => {}} />);
    const loginButton = wrapper.find({ dataTest: "nativeLogin" });
    wrapper.setState({ email: "t@e.com", password: "test" });
    axiosWrapper.get = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        data: [userDetails]
      });
    });
    await loginButton.simulate("click");
    wrapper = wrapper.update();
    expect(wrapper.state().isLoading).toBe(false);
  });

  it("Native Login, valid email and password(Admin)", async () => {
    let wrapper = shallow(
      <LoginComponent login={obj => {}} closeDialog={() => {}} />
    );
    const loginButton = wrapper.find({ dataTest: "nativeLogin" });
    wrapper.setState({ email: adminEmail, password: "test" });
    axiosWrapper.get = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        data: [{ ...userDetails, email: adminEmail }]
      });
    });
    await loginButton.simulate("click");
    wrapper = wrapper.update();
    expect(wrapper.state().isLoading).toBe(false);
  });

  it("Enter email", () => {
    let wrapper = shallow(<LoginComponent />);
    const emailField = wrapper.find({ dataTest: "email" });
    emailField.simulate("change", { target: { value: "TestPass" } });
    wrapper = wrapper.update();
    console.log(wrapper.state());
    expect(wrapper.state().email).toBe("TestPass");
  });

  it("Enter password", () => {
    let wrapper = shallow(<LoginComponent />);
    const emailField = wrapper.find({ dataTest: "password" });
    emailField.simulate("change", { target: { value: "TestPass" } });
    wrapper = wrapper.update();
    console.log(wrapper.state());
    expect(wrapper.state().password).toBe("TestPass");
  });
});
