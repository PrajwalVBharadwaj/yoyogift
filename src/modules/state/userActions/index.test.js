import { SENT_CARDS, RECEIVED_CARDS, USER_DETAILS, REDEEM_CARD } from "./types";
import axiosWrapper from "../../../apis/axiosCreate";
import {
  fetchReceivedCards,
  fetchSentCards,
  userDetails,
  updateTransact,
  updateUserBalance,
  redeemCard
} from "./index";

describe("Testing user actions", () => {
  it("fetchReceivedCards", async () => {
    axiosWrapper.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: { card: "kjsdf" } }));
    const dispatch = jest.fn().mockImplementation(args => {});
    const response = fetchReceivedCards("test");
    await response(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: RECEIVED_CARDS,
      payload: { card: "kjsdf" }
    });
  });
  it("fetchSentCards", async () => {
    axiosWrapper.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: { card: "kjsdf" } }));
    const dispatch = jest.fn().mockImplementation(args => {});
    const response = fetchSentCards("test");
    await response(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: SENT_CARDS,
      payload: { card: "kjsdf" }
    });
  });

  it("userDetails", async () => {
    axiosWrapper.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: { card: "kjsdf" } }));
    const dispatch = jest.fn().mockImplementation(args => {});
    const response = userDetails("test");
    await response(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: USER_DETAILS,
      payload: { card: "kjsdf" }
    });
  });

  it("redeemCard", async () => {
    axiosWrapper.post = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: { card: "kjsdf" } }));
    axiosWrapper.delete = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: { card: "kjsdf" } }));
    const dispatch = jest.fn().mockImplementation(args => {});
    const response = redeemCard(1, {});
    await response(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: REDEEM_CARD,
      payload: { card: "kjsdf" }
    });
  });
});
