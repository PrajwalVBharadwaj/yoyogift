import React from "react";
import { shallow } from "../../../Enzyme";
import { MySnackBar } from "./Snackbar";

describe("Testiung Snackbar ", () => {
  it("without message", () => {
    const wrapper = shallow(<MySnackBar message="f" color="t" />);
    expect(wrapper.find("div").length).toBe(1);
  });
});
