describe("lambdas-global", () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  describe("getSalesLambdaProps", () => {
    it("should contain the correct properties", () => {
      process.env.LOCALE = "global";
      const { getSalesLambdaProps } = require("./lambdas");
      expect(getSalesLambdaProps).toMatchInlineSnapshot(`
Object {
  "bundling": Object {
    "externalModules": Array [
      "aws-sdk",
    ],
    "minify": true,
  },
  "description": "Global version of the getSalesLambdaProps handler",
  "entry": "/Users/leegilmore/Documents/git/serverless-internationalisation/sales/src/global/get-sales/get-sales.ts",
  "environment": Object {
    "LOCALE": "global",
  },
  "functionName": "getSalesLambdaProps",
  "handler": "handler",
  "memorySize": 512,
  "runtime": Runtime {
    "bundlingDockerImage": "public.ecr.aws/sam/build-nodejs14.x",
    "bundlingImage": "public.ecr.aws/sam/build-nodejs14.x",
    "family": 0,
    "name": "nodejs14.x",
    "supportsCodeGuruProfiling": false,
    "supportsInlineCode": true,
  },
}
`);
    });
  });
});
