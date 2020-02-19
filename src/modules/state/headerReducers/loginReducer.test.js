import { LOGIN, LOGOUT } from "../headerActions/types";
import loginReducer from "./loginReducer";

describe("Testing Header reducers", () => {
  it("LOGIN", () => {
    const returnValue = loginReducer({}, { type: LOGIN, payload: "TestPass" });
    expect(returnValue).toMatchObject({
      loginStatus: true,
      detailsObject: "TestPass"
    });
  });
  it("LOGOUT", () => {
    const returnValue = loginReducer({}, { type: LOGOUT });
    expect(returnValue).toMatchObject({
      loginStatus: false,
      detailsObject: {}
    });
  });

  it("DEFAULT", () => {
    const returnValue = loginReducer({}, { type: "default" });
    expect(returnValue).toMatchObject({});
  });
});
