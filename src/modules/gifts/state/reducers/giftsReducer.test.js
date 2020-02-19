import {
  FETCH_CARDS,
  FETCH_CARD,
  FETCH_CARD_FILTER,
  UPDATE_CARD_COUNT,
  ADMIN_ADD_CARD,
  ADMIN_UPDATE_CARD
} from "../actions/types";
const STATE = {
  giftCards: [{ cardName: "Card1" }],
  giftCardsFiltered: ["filter1"],
  giftCard: { cardName: "card1" }
};
import giftsReducer from "./giftsReducer";

describe("Testing giftsReducer", () => {
  it("FETCH_CARD", () => {
    const returnState = giftsReducer(
      {},
      { type: FETCH_CARD, payload: { data: STATE } }
    );
    expect(returnState).toMatchObject({ giftCard: STATE });
  });

  it("FETCH_CARDS", () => {
    const returnState = giftsReducer(
      {},
      { type: FETCH_CARDS, payload: { data: STATE } }
    );
    expect(returnState).toMatchObject({ giftCards: STATE });
  });

  it("FETCH_CARD", () => {
    const returnState = giftsReducer(
      {},
      { type: FETCH_CARD, payload: { data: STATE } }
    );
    expect(returnState).toMatchObject({
      giftCard: STATE
    });
  });

  it("ADMIN_ADD_CARD", () => {
    const returnState = giftsReducer(
      {},
      { type: ADMIN_ADD_CARD, payload: STATE }
    );
    expect(returnState).toMatchObject({ giftCards: STATE });
  });

  it("FETCH_CARD_FILTER", () => {
    const returnState = giftsReducer(
      {},
      { type: FETCH_CARD_FILTER, payload: STATE }
    );
    expect(returnState).toMatchObject({ giftCardsFiltered: STATE });
  });

  it("UPDATE_CARD_COUNT", () => {
    const returnState = giftsReducer(
      {},
      { type: UPDATE_CARD_COUNT, payload: STATE }
    );
    expect(returnState).toMatchObject({ giftCard: STATE });
  });

  it("DEFAULT", () => {
    const returnState = giftsReducer(
      {},
      { type: "default", payload: { data: STATE } }
    );
    expect(returnState).toMatchObject({});
  });

  it("ADMIN_UPDATE_CARD", () => {
    const returnState = giftsReducer(
      { giftCards: [] },
      { type: ADMIN_UPDATE_CARD, payload: { data: STATE } }
    );
    expect(returnState).toMatchObject({ giftCards: [] });
  });
});
