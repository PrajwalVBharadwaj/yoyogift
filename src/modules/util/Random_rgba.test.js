import { Random_rgba } from "./Random_rgba";

describe("Testing Random_rgba func", () => {
  it("Function return value", () => {
    const returnValue = Random_rgba();
    expect(returnValue).toContain("rgba");
  });
});
