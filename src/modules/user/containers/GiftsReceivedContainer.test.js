import React from "react";
import { shallow } from "../../../Enzyme";
import giftsReceivedContainer, {
  GiftsReceivedContainer
} from "./GiftsReceivedContainer";

describe("Testing GiftReceivedContainer", () => {
  it("Snapsot testing", () => {
    const wrapper = shallow(<giftsReceivedContainer isLoggedin={true} />);
    expect(wrapper).toMatchSnapshot();
  });
});
