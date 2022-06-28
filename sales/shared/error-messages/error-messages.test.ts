describe("error-messages", () => {
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
    const { errorMessages } = require("./error-messages");
    expect(errorMessages).toMatchInlineSnapshot(`
Object {
  "invalidBody": "{0} has no body",
  "itemNotFound": "{0} with ID {1} has not been found",
  "notFound": "{0} have not been found Globally",
}
`);
  });

  it("should return the UK object", () => {
    process.env.LOCALE = "UK";
    const { errorMessages } = require("./error-messages");
    expect(errorMessages).toMatchInlineSnapshot(`
Object {
  "invalidBody": "The {0} has no body",
  "itemNotFound": "{0} with ID {1} has not been found",
  "notFound": "{0} have not been found in UK",
}
`);
  });

  it("should return the US object", () => {
    process.env.LOCALE = "US";
    const { errorMessages } = require("./error-messages");
    expect(errorMessages).toMatchInlineSnapshot(`
Object {
  "invalidBody": "{0} with ID {1} has no body",
  "itemNotFound": "{0} with ID {1} has not been found",
  "notFound": "{0} have not been found in US",
}
`);
  });
});
