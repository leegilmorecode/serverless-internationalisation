import { stringFormat } from "./string-format";

describe("string-format", () => {
  it("should return the correct string value", () => {
    const message = "{0} with ID {1} has not been found";
    expect(stringFormat(message, "Sale", "111")).toMatchInlineSnapshot(
      `"Sale with ID 111 has not been found"`
    );
  });
});
