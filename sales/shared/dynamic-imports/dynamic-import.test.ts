describe("dynamic-imports", () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  describe("getLocale", () => {
    it("should return the correct global locale", () => {
      process.env.LOCALE = "global";
      const { getLocale } = require("./dynamic-import");
      expect(getLocale()).toEqual("global");
    });

    it("should return the correct UK locale lowercase", () => {
      process.env.LOCALE = "UK";
      const { getLocale } = require("./dynamic-import");
      expect(getLocale()).toEqual("uk");
    });

    it("should throw an error when no locale supplied", () => {
      delete process.env.LOCALE;
      const { getLocale } = require("./dynamic-import");
      expect(getLocale).toThrowErrorMatchingInlineSnapshot(
        `"Locale has not been set"`
      );
    });
  });
});
