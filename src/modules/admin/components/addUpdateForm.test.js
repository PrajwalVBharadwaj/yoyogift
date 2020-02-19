import React from "react";
import { shallow, cardDetails } from "../../../Enzyme";
import { AddUpdateForm } from "./AddUpdateForm";

const formState = {
  cardNameValue: "",
  cardNameError: false,
  cardNameHelperText: "",
  cardPointsValue: "",
  cardPointsError: false,
  cardPointsHelperText: "",
  cardCategoryValue: "",
  cardCategoryError: false,
  cardCategoryHelperText: "",
  cardRetailerValue: "",
  cardRetailerError: false,
  cardRetailerHelperText: "",
  cardExpiryDateValue: "",
  cardExpiryDateError: false,
  cardExpiryDateHelperText: "",
  cardCountValue: "",
  cardCountError: false,
  cardCountHelperText: "",
  cardImageValue: "",
  cardImageError: false,
  cardImageHelperText: "",
  cardVendorValue: "",
  cardVendorError: false,
  cardVendorHelperText: "",
  cardShortDescValue: "",
  cardShortDescError: false,
  cardShortDescHelperText: "",
  cardLongDescValue: "",
  cardLongDescError: false,
  cardLongDescHelperText: ""
};
describe("Testing AddUpdate form", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(
      <AddUpdateForm
        giftCards={[{ id: 1, cardName: "test" }, {}, {}]}
        match={{ params: { id: true } }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("Clear all fields", () => {
    const wrapper = shallow(
      <AddUpdateForm
        giftCards={[{}, {}, {}]}
        match={{ params: { id: true } }}
      />
    );
    const clearButton = wrapper.find({ dataTest: "clear" });
    clearButton.simulate("click");
    wrapper.update();
    expect(wrapper.state().cardNameValue).toBe("");
    expect(wrapper.state().cardNameError).toBe(false);
  });
  it("Add", () => {
    const wrapper = shallow(
      <AddUpdateForm giftCards={[{}, {}, {}]} match={{ params: { id: 1 } }} />
    );
    wrapper.setState(formState);
    const addUpdateButton = wrapper.find({ dataTest: "addUpdate" });
    addUpdateButton.simulate("click");
    wrapper.update();
    expect(wrapper.state().cardNameValue).toBe("");
    expect(wrapper.state().cardNameError).toBe(false);
  });

  it("All input fields correct value", () => {
    const wrapper = shallow(
      <AddUpdateForm giftCards={[{}, {}, {}]} match={{ params: { id: 1 } }} />
    );
    wrapper.instance().handleCardNameChange({ target: { value: "TestCard" } });
    wrapper.instance().handleCardPointsChange({ target: { value: 10 } });
    wrapper
      .instance()
      .handleCardCategoryChange({ target: { value: "TestCategory" } });
    wrapper
      .instance()
      .handleCardRetailerChange({ target: { value: "TestRetailer" } });
    wrapper
      .instance()
      .handleCardExpiryDateChange({ target: { value: "2019-02-02" } });
    wrapper.instance().handleCardCountChange({ target: { value: 10 } });
    wrapper
      .instance()
      .handleCardImageChange({ target: { value: "https://test.png" } });
    wrapper
      .instance()
      .handleCardVendorChange({ target: { value: "TestVendor" } });
    wrapper
      .instance()
      .handleCardShortDescChange({ target: { value: "TestDescription" } });
    wrapper
      .instance()
      .handleCardLongDescChange({ target: { value: "TestDescription" } });
    wrapper.update();
    const state = wrapper.state();
    expect(state).toMatchObject({
      cardNameValue: "TestCard",
      cardPointsValue: 10,
      cardCategoryValue: "TestCategory",
      cardRetailerValue: "TestRetailer",
      cardExpiryDateValue: "2019-02-02",
      cardCountValue: 10,
      cardImageValue: "https://test.png",
      cardVendorValue: "TestVendor",
      cardShortDescValue: "TestDescription",
      cardLongDescValue: "TestDescription"
    });
  });

  it("All input fields error value", () => {
    const wrapper = shallow(
      <AddUpdateForm giftCards={[{}, {}, {}]} match={{ params: { id: 1 } }} />
    );
    wrapper.instance().handleCardNameChange({ target: { value: 1 } });
    wrapper.instance().handleCardPointsChange({ target: { value: "a" } });
    wrapper.instance().handleCardCategoryChange({ target: { value: 1 } });
    wrapper.instance().handleCardRetailerChange({ target: { value: 1 } });
    wrapper
      .instance()
      .handleCardExpiryDateChange({ target: { value: "2019-09-06" } });
    wrapper.instance().handleCardCountChange({ target: { value: "a" } });
    wrapper.instance().handleCardImageChange({ target: { value: 1 } });
    wrapper.instance().handleCardVendorChange({ target: { value: 1 } });
    wrapper.instance().handleCardShortDescChange({ target: { value: "" } });
    wrapper.instance().handleCardLongDescChange({ target: { value: "" } });
    wrapper.update();
    const state = wrapper.state();
    expect(state).toMatchObject({
      cardNameError: true,
      cardPointsError: true,
      cardCategoryError: true,
      cardRetailerError: true,
      cardExpiryDateError: true,
      cardCountError: true,
      cardImageError: true,
      cardVendorError: true,
      cardShortDescError: true,
      cardLongDescError: true
    });
  });
});
