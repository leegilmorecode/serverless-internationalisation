describe("lambdas-uk", () => {
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
      process.env.LOCALE = "uk";
      const { getSalesLambdaProps } = require("./lambdas");
      expect(getSalesLambdaProps).toMatchInlineSnapshot(`
Object {
  "bundling": Object {
    "externalModules": Array [
      "aws-sdk",
    ],
    "minify": true,
  },
  "description": "UK version of the getSalesLambdaProps handler",
  "entry": "/Users/leegilmore/Documents/git/serverless-internationalisation/sales/src/uk/get-sales/get-sales.ts",
  "environment": Object {
    "LOCALE": "uk",
  },
  "functionName": "getSalesLambda",
  "handler": "handler",
  "memorySize": 1024,
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
      process.env.LOCALE = "UK";
      const { createSaleLambdaProps } = require("./lambdas");
      expect(createSaleLambdaProps).toMatchInlineSnapshot(`
Object {
  "bundling": Object {
    "externalModules": Array [
      "aws-sdk",
    ],
    "minify": true,
  },
  "description": "UK version of the createSaleLambdaProps handler",
  "entry": "/Users/leegilmore/Documents/git/serverless-internationalisation/sales/src/uk/create-sale/create-sale.ts",
  "environment": Object {
    "LOCALE": "uk",
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
