import React from "react";
import { shallow } from "../Enzyme";
import App from "./App";
import Loadable from "react-loadable";

Loadable.preloadAll();
describe("Testing app component", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
