import React from "react";
import { shallow, cardDetails, userDetails } from "../../Enzyme";
import { GiftsListContainer } from "./GiftsListContainer";

describe("Testing GiftsListComponent", () => {
  it("Snapshot test", () => {
    const wrapper = shallow(
      <GiftsListContainer
        classes={{}}
        gift={cardDetails}
        giftCards={[]}
        fetchCards={() => {}}
      />
    );
    wrapper.simulateError(new Error("TestError"));
    expect(wrapper).toMatchSnapshot();
  });

  it("Sorting test", () => {
    const wrapper = shallow(
      <GiftsListContainer
        classes={{}}
        gift={cardDetails}
        giftCards={[]}
        fetchCards={() => {}}
        fetchCardFilter={() => {}}
      />
    );
    wrapper.setState({ sortOrder: true });
    wrapper.instance().handleSortButtonClick({ target: { value: "All" } });
    wrapper.instance().searchHandler({ target: { value: "ZXW" } });
    wrapper.update();
    expect(wrapper.state().sortOrder).toBe(true);
  });
  it("On changeRetailer", () => {
    const wrapper = shallow(
      <GiftsListContainer
        classes={{}}
        gift={cardDetails}
        giftCards={[cardDetails]}
        fetchCards={() => {}}
        fetchCardFilter={() => {}}
        userDetails={userDetails}
        giftCardsFiltered={[cardDetails]}
      />
    );
    wrapper.instance().onChangeRetailer({ target: { value: "ALL" } });
    wrapper.instance().onChangeSort({ target: { value: "Points" } });
    wrapper.instance().addUpdateForm();
    wrapper.instance().searchHandler({ target: { value: "a" } });
    wrapper.update();
    expect(wrapper.state().sortOrder).toBe(false);
  });
});
