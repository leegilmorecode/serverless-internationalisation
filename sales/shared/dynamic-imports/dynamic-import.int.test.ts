describe("dynamic-imports", () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  describe("dynamicPath", () => {
    it("should return the correct path when locale is global", () => {
      process.env.LOCALE = "global";
      const path = "../tests/global/index.ts";
      const { dynamicPath } = require("./dynamic-import");
      expect(dynamicPath(path)).toEqual("../tests/global/index.ts");
    });

    it("should return the correct path when locale is uk and file exists", () => {
      process.env.LOCALE = "UK";
      const path = "../tests/global/index.ts";
      const { dynamicPath } = require("./dynamic-import");
      expect(dynamicPath(path)).toEqual("../tests/uk/index.ts");
    });

    it("should return the correct global fallback path if override is not there", () => {
      process.env.LOCALE = "UK";
      const path = "../tests/global/index2.ts";
      const { dynamicPath } = require("./dynamic-import");
      expect(dynamicPath(path)).toEqual("../tests/global/index2.ts");
    });
  });

  describe("dynamicImport", () => {
    it("should import the correct file when locale is global", async () => {
      expect.assertions(1);

      process.env.LOCALE = "global";
      const path = "../dynamic-imports/tests/global/index.ts";
      const { dynamicImport } = require("./dynamic-import");

      await expect(dynamicImport(path)).resolves.toMatchInlineSnapshot(`
Object {
  "default": Object {
    "global": "global",
  },
}
`);
    });
  });

  it("should import the correct file when locale is uk", async () => {
    expect.assertions(1);

    process.env.LOCALE = "uk";
    const path = "../dynamic-imports/tests/global/index.ts";
    const { dynamicImport } = require("./dynamic-import");

    await expect(dynamicImport(path)).resolves.toMatchInlineSnapshot(`
Object {
  "default": Object {
    "uk": "uk",
  },
}
`);
  });

  it("should fallback to the global version if there is no uk override", async () => {
    expect.assertions(1);

    process.env.LOCALE = "uk";
    const path = "../dynamic-imports/tests/global/index2.ts";
    const { dynamicImport } = require("./dynamic-import");

    await expect(dynamicImport(path)).resolves.toMatchInlineSnapshot(`
Object {
  "default": Object {
    "global": "global2",
  },
}
`);
  });

  it("should throw an error if the fallback version does not exist", async () => {
    expect.assertions(1);

    process.env.LOCALE = "uk";
    const path = "../dynamic-imports/tests/global/none.ts";
    const { dynamicImport } = require("./dynamic-import");

    await expect(
      dynamicImport(path)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"Cannot find module '../dynamic-imports/tests/global/none.ts' from 'shared/dynamic-imports/dynamic-import.ts'"`
    );
  });
});
