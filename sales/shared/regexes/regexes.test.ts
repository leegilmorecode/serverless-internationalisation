describe("regexes", () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it("should return the global object", () => {
    process.env.LOCALE = "global";
    const { regexes } = require("./regexes");
    expect(regexes).toMatchInlineSnapshot(`
Object {
  "firstName": "^[a-z A-Z]+$",
  "surname": "^[a-z A-Z]+$",
}
`);
  });

  it("should return the UK object", () => {
    process.env.LOCALE = "UK";
    const { regexes } = require("./regexes");
    expect(regexes).toMatchInlineSnapshot(`
Object {
  "firstName": "^[a-zŁą A-Z]+$",
  "surname": "^[a-zŁą A-Z]+$",
}
`);
  });

  it("should return the US object", () => {
    process.env.LOCALE = "US";
    const { regexes } = require("./regexes");
    expect(regexes).toMatchInlineSnapshot(`
Object {
  "firstName": "^[a-zŁą A-Z]+$",
  "surname": "^[a-zŁą A-Z]+$",
}
`);
  });
});
