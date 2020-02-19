import React from "react";
import { shallow, cardDetails } from "../../../Enzyme";
import { GiftShowContainer } from "./GiftShowContainer";
import { userDetails } from "../../user/state/actions";

jest.useFakeTimers();

describe("Testing GiftsShowContainer", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(
      <GiftShowContainer
        gift={cardDetails}
        match={{ params: { id: 1 } }}
        fetchCard={() => {}}
      />
    );
    wrapper.instance().componentDidCatch();
    expect(wrapper).toMatchSnapshot();
  });

  it("Test ValidateSend (positive)", async () => {
    const mockFn = (...arg) => {
      return Promise.resolve(() => {
        return {};
      });
    };
    const wrapper = shallow(
      <GiftShowContainer
        login={userDetails}
        data={[]}
        gift={{ ...cardDetails, cardPoints: 10, balance_points: 100 }}
        updateUserBalance={mockFn}
        updateTransact={mockFn}
        userDetails={mockFn}
        updateCardCount={mockFn}
        match={{ params: { id: 1 } }}
        fetchCard={() => {}}
        user={{ ...userDetails, balance_points: 1000 }}
      />
    );
    wrapper.setState({ cardPoints: 20, balance_points: 100 });
    await wrapper.instance().validateSend("test");
    wrapper.update();
    expect(wrapper.state().showSuccessSnackBar).toBe(false);
  });

  it("Test ValidateSend (negtive)", async () => {
    const mockFn = (...arg) => {
      return Promise.resolve(() => {
        return {};
      });
    };
    const wrapper = shallow(
      <GiftShowContainer
        login={userDetails}
        data={[]}
        gift={{ ...cardDetails, cardPoints: 10, balance_points: 100 }}
        updateUserBalance={mockFn}
        updateTransact={mockFn}
        userDetails={mockFn}
        updateCardCount={mockFn}
        match={{ params: { id: 1 } }}
        fetchCard={() => {}}
        user={{ ...userDetails, balance_points: 1000 }}
      />
    );
    wrapper.setState({ balance_points: 100 });
    await wrapper.instance().validateSend("test");
    wrapper.update();
    expect(wrapper.state().showSuccessSnackBar).toBe(false);
  });

  it("Gifts Loading", () => {
    const wrapper = shallow(
      <GiftShowContainer
        gift={{}}
        match={{ params: { id: 1 } }}
        fetchCard={() => {}}
      />
    );
    expect(wrapper.find({ dataTest: "progress" }).length).toBe(1);
  });
});
