import React from "react";
import DraggableDialog from "./DraggableDialog";
import { shallow, mount } from "../../../Enzyme";

describe("Testing DraggableDialog", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(<DraggableDialog />);
    wrapper.setState({ open: true });
    expect(wrapper).toMatchSnapshot();
  });

  it("Open/Close dialog", () => {
    const wrapper = shallow(<DraggableDialog />);
    wrapper.setState({ open: false });
    const button = wrapper.find({ dataTest: "openClose" });
    button.simulate("click");
    wrapper.update();
    expect(wrapper.state().open).toEqual(true);
  });

  it("Handle send and close", () => {
    const wrapper = shallow(<DraggableDialog getEmail={() => {}} />);
    wrapper.instance().handleSendAndClose("test");
    wrapper.update();
    expect(wrapper.state().open).toBe(false);
  });
});
