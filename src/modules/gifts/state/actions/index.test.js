import {
  FETCH_CARDS,
  FETCH_CARD,
  FETCH_CARD_FILTER,
  ADMIN_ADD_CARD,
  UPDATE_CARD_COUNT,
  ADMIN_UPDATE_CARD
} from "./types";
import axiosWrapper from "../../../../apis/axiosCreate";
import {
  fetchCard,
  fetchCards,
  adminAddCard,
  adminUpdateCard,
  fetchCardFilter,
  updateCardCount
} from "./index";

describe("Testing gifts actions", () => {
  it("fetchCards", async () => {
    axiosWrapper.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ card: "kjsdf" }));
    const dispatch = jest.fn().mockImplementation(args => {});
    const response = fetchCards();
    await response(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: FETCH_CARDS,
      payload: { card: "kjsdf" }
    });
  });

  it("fetchCard", async () => {
    axiosWrapper.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: { card: "kjsdf" } }));
    const dispatch = jest.fn().mockImplementation(args => {});
    const response = fetchCard("id");
    await response(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: FETCH_CARD,
      payload: { data: { card: "kjsdf" } }
    });
  });

  it("adminUpdateCard", async () => {
    axiosWrapper.patch = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: { card: "kjsdf" } }));
    const dispatch = jest.fn().mockImplementation(args => {});
    const response = adminUpdateCard("id", {});
    await response(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: ADMIN_UPDATE_CARD,
      payload: { data: { card: "kjsdf" } }
    });
  });

  it("fetchCardFilter", async () => {
    const dispatch = jest.fn().mockImplementation(args => {});
    const response = fetchCardFilter({ test: "test" });
    await response(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: FETCH_CARD_FILTER,
      payload: { test: "test" }
    });
  });

  it("adminAddCard", async () => {
    axiosWrapper.post = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: { card: "kjsdf" } }));
    const dispatch = jest.fn().mockImplementation(args => {});
    const response = adminAddCard({});
    await response(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: ADMIN_ADD_CARD,
      payload: { data: { card: "kjsdf" } }
    });
  });

  it("updateCardCount", async () => {
    axiosWrapper.patch = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: { card: "kjsdf" } }));
    const dispatch = jest.fn().mockImplementation(args => {});
    const response = updateCardCount("id", 2);
    await response(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: UPDATE_CARD_COUNT,
      payload: { card: "kjsdf" }
    });
  });
});
