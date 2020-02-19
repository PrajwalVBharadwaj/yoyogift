import React from "react";
import { shallow, userDetails, cardDetails } from "../../Enzyme";
import { GiftsList } from "./GiftsList";

describe("Testing giftsList component", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(
      <GiftsList
        userDetails={userDetails}
        classes={{}}
        giftCardsFiltered={[]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("Testing eventHandler changePage", () => {
    const wrapper = shallow(
      <GiftsList
        userDetails={userDetails}
        classes={{}}
        giftCardsFiltered={[cardDetails]}
      />
    );
    wrapper
      .instance()
      .handleChangePage({ target: "test" }, { test: "testing" });
    wrapper.update();
    expect(wrapper.state().page).toMatchObject({ test: "testing" });
  });
  it("Testing eventHandler changeRowsPerPage", () => {
    const wrapper = shallow(
      <GiftsList
        userDetails={userDetails}
        classes={{}}
        giftCardsFiltered={[]}
      />
    );
    wrapper.instance().handleChangeRowsPerPage({ target: { value: "test" } });
    wrapper.update();
    expect(wrapper.state().page).toBe(0);
  });
});
