import React from "react";
import DraggableDialog from "./DraggableDialog";
import { shallow, mount } from "../../../Enzyme";

describe("Testing DraggableDialog", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(<DraggableDialog />);
    expect(wrapper).toMatchSnapshot();
  });
});
