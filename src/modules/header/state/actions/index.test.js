import { LOGIN, LOGOUT } from "./types";
import axiosWrapper from "../../../../apis/axiosCreate";
import { login, logout, createUser } from "./index";

describe("Testing header actions", () => {
  it("login", () => {
    const returnValue = login({ test: "Success" });
    expect(returnValue).toMatchObject({
      type: LOGIN,
      payload: { test: "Success" }
    });
  });

  it("Logout", () => {
    const returnValue = logout();
    expect(returnValue).toMatchObject({
      type: LOGOUT,
      payload: null
    });
  });

  it("CreateUser", async () => {
    axiosWrapper.post = jest.fn().mockImplementation(() => {
      return Promise.resolve({});
    });
    await createUser();
  });
});
