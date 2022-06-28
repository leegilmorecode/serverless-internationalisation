import * as cdk from "aws-cdk-lib";

import { SalesStack } from "./sales-stack";
import { Template } from "aws-cdk-lib/assertions";

describe("sales-stack", () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  describe("Global", () => {
    it("should generate the correct global lambdas", async () => {
      expect.assertions(2);

      process.env.LOCALE = "global";
      const { dynamicImport } = require("@shared/dynamic-imports");

      const { apiProps } = await dynamicImport("@lib/global/api-gateway");
      const { getSalesLambdaProps, createSaleLambdaProps } =
        await dynamicImport("@lib/global/lambdas");

      const app = new cdk.App();
      const stack = new SalesStack(app, "GlobalTestStack", {
        apiProps,
        getSalesLambdaProps,
        createSaleLambdaProps,
      });

      const template = Template.fromStack(stack);

      expect(
        template.findResources("AWS::Lambda::Function", {
          Properties: {
            FunctionName: "getSalesLambda",
          },
        })
      ).toMatchSnapshot({
        GetSalesD8890AF0: {
          Properties: {
            Code: {
              S3Key: expect.any(String),
            },
          },
        },
      });

      expect(
        template.findResources("AWS::Lambda::Function", {
          Properties: {
            FunctionName: "createSaleLambda",
          },
        })
      ).toMatchSnapshot({
        CreateSale7BE4C0B2: {
          Properties: {
            Code: {
              S3Key: expect.any(String),
            },
          },
        },
      });
    });

    it("should generate the correct global api gateway", async () => {
      process.env.LOCALE = "global";
      const { dynamicImport } = require("@shared/dynamic-imports");

      const { apiProps } = await dynamicImport("@lib/global/api-gateway");
      const { getSalesLambdaProps, createSaleLambdaProps } =
        await dynamicImport("@lib/global/lambdas");

      const app = new cdk.App();
      const stack = new SalesStack(app, "GlobalTestStack", {
        apiProps,
        getSalesLambdaProps,
        createSaleLambdaProps,
      });

      const template = Template.fromStack(stack);

      expect(
        template.findResources("AWS::ApiGateway::RestApi")
      ).toMatchSnapshot();
    });
  });

  describe("UK", () => {
    it("should generate the correct UK lambdas", async () => {
      expect.assertions(2);

      process.env.LOCALE = "UK";
      const { dynamicImport } = require("@shared/dynamic-imports");

      const { apiProps } = await dynamicImport("@lib/global/api-gateway");
      const { getSalesLambdaProps, createSaleLambdaProps } =
        await dynamicImport("@lib/global/lambdas");

      const app = new cdk.App();
      const stack = new SalesStack(app, "UKTestStack", {
        apiProps,
        getSalesLambdaProps,
        createSaleLambdaProps,
      });

      const template = Template.fromStack(stack);

      expect(
        template.findResources("AWS::Lambda::Function", {
          Properties: {
            FunctionName: "getSalesLambda",
          },
        })
      ).toMatchSnapshot({
        GetSalesD8890AF0: {
          Properties: {
            Code: {
              S3Key: expect.any(String),
            },
          },
        },
      });

      expect(
        template.findResources("AWS::Lambda::Function", {
          Properties: {
            FunctionName: "createSaleLambda",
          },
        })
      ).toMatchSnapshot({
        CreateSale7BE4C0B2: {
          Properties: {
            Code: {
              S3Key: expect.any(String),
            },
          },
        },
      });
    });

    it("should generate the correct UK api gateway", async () => {
      process.env.LOCALE = "UK";
      const { dynamicImport } = require("@shared/dynamic-imports");

      const { apiProps } = await dynamicImport("@lib/global/api-gateway");
      const { getSalesLambdaProps, createSaleLambdaProps } =
        await dynamicImport("@lib/global/lambdas");

      const app = new cdk.App();
      const stack = new SalesStack(app, "GlobalTestStack", {
        apiProps,
        getSalesLambdaProps,
        createSaleLambdaProps,
      });

      const template = Template.fromStack(stack);

      expect(
        template.findResources("AWS::ApiGateway::RestApi")
      ).toMatchSnapshot();
    });
  });
});
