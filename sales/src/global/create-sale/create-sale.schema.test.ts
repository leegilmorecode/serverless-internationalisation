import { validate } from "@shared/validate";

interface Sale {
  firstName?: string;
  surname?: string;
  id?: number;
}

describe("create-sale.schema", () => {
  const OLD_ENV = process.env;
  let sale: Sale = {
    firstName: "Lee",
    surname: "Gilmore",
    id: 111,
  };

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };

    sale = {
      firstName: "Lee",
      surname: "Gilmore",
      id: 111,
    };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it("should not have less than 3 properties", () => {
    process.env.LOCALE = "global";
    const { schema } = require("./create-sale.schema");

    delete sale.id;

    expect(() => validate(sale, schema)).toThrowErrorMatchingInlineSnapshot(
      `"Invalid: data must NOT have fewer than 3 properties, data must have required property 'id'"`
    );
  });

  it("should not have more than 3 properties", () => {
    process.env.LOCALE = "global";
    const { schema } = require("./create-sale.schema");

    const expected = {
      ...sale,
      extra: "extra",
    };

    expect(() => validate(expected, schema)).toThrowErrorMatchingInlineSnapshot(
      `"Invalid: data must NOT have more than 3 properties"`
    );
  });
});
