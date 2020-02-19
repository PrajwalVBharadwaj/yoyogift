import {
  RECEIVED_CARDS,
  SENT_CARDS,
  USER_DETAILS,
  REDEEM_CARD,
  UPDATE_BALANCE,
  UPDATE_TRANSACT
} from "./../userActions/types";
import userReducer from "./usersReducer";
const STATE = {
  cards: [{ test: "test1" }, { test: "test2" }],
  UserDetails: [{ name: "name1" }, { name: "name2" }]
};

describe("Testing userReduce", () => {
  it("RECEIVED_CARDS", () => {
    const returnState = userReducer(
      {},
      { type: RECEIVED_CARDS, payload: STATE }
    );
    expect(returnState.cards).toBe(STATE);
  });
  it("SENT_CARDS", () => {
    const returnState = userReducer({}, { type: SENT_CARDS, payload: STATE });
    expect(returnState.cards).toBe(STATE);
  });

  it("USER_DETAILS", () => {
    const returnState = userReducer({}, { type: USER_DETAILS, payload: STATE });
    expect(returnState.UserDetails).toBe(STATE);
  });

  it("UPDATE_BALANCE", () => {
    const returnState = userReducer(
      {},
      { type: UPDATE_BALANCE, payload: STATE }
    );
    expect(returnState.UserDetails).toBe(STATE);
  });

  it("UPDATE_TRANSACT", () => {
    const returnState = userReducer(
      {},
      { type: UPDATE_TRANSACT, payload: STATE }
    );
    expect(returnState.cards).toBe(STATE);
  });

  it("RECEIVED_CARDS", () => {
    const returnState = userReducer({}, { type: "default", payload: STATE });
    expect(JSON.stringify(returnState)).toBe(JSON.stringify({}));
  });

  it("REDEEM_CARD", () => {
    const returnState = userReducer(
      { cards: [{ id: 1 }, { id: 10 }] },
      { type: REDEEM_CARD, payload: { id: 1 } }
    );
    expect(returnState).toMatchObject({
      cards: [{ id: 1, isRedeemed: true }, { id: 10 }]
    });
  });
});
