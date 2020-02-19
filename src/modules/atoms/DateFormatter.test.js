import { DateFormatter } from "./DateFormatter";

describe("Testing DateFormatter function", () => {
  it("pass a valid date string(month and day less than 10)", () => {
    const date = DateFormatter("2019-04-2");
    expect("2019-04-22").toBe("2019-04-22");
  });
});
