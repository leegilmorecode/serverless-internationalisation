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
  "functionName": "getSalesLambda",
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

  describe("createSaleLambdaProps", () => {
    it("should contain the correct properties", () => {
      process.env.LOCALE = "global";
      const { createSaleLambdaProps } = require("./lambdas");
      expect(createSaleLambdaProps).toMatchInlineSnapshot(`
Object {
  "bundling": Object {
    "externalModules": Array [
      "aws-sdk",
    ],
    "minify": true,
  },
  "description": "Global version of the createSaleLambdaProps handler",
  "entry": "/Users/leegilmore/Documents/git/serverless-internationalisation/sales/src/global/create-sale/create-sale.ts",
  "environment": Object {
    "LOCALE": "global",
  },
  "functionName": "createSaleLambda",
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
