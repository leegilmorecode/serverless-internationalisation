import { validate } from "@shared/validate";

interface Sale {
  firstName?: string;
  surname?: string;
  id?: number;
  age?: number;
}

describe("create-sale.schema", () => {
  const OLD_ENV = process.env;
  let sale: Sale = {
    firstName: "Lee",
    surname: "Gilmore",
    id: 111,
    age: 32,
  };

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };

    sale = {
      firstName: "Lee",
      surname: "Gilmore",
      id: 111,
      age: 32,
    };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it("should not have less than 4 properties", () => {
    process.env.LOCALE = "UK";
    const { schema } = require("./create-sale.schema");

    delete sale.id;

    expect(() => validate(sale, schema)).toThrowErrorMatchingInlineSnapshot(
      `"Invalid: data must NOT have fewer than 4 properties, data must have required property 'id'"`
    );
  });

  it("should not have more than 4 properties", () => {
    process.env.LOCALE = "UK";
    const { schema } = require("./create-sale.schema");

    const expected = {
      ...sale,
      extra: "extra",
    };

    expect(() => validate(expected, schema)).toThrowErrorMatchingInlineSnapshot(
      `"Invalid: data must NOT have more than 4 properties"`
    );
  });
});
