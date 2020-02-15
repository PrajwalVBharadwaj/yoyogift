import React from "react";
import { shallow } from "../../../Enzyme";
import { AddUpdateForm } from "./addUpdateForm";
describe("Testing AddUpdate form", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(
      <AddUpdateForm giftCards={[]} match={{ params: { id: true } }} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
