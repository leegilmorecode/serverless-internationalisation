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
      process.env.LOCALE = "global";
      const { dynamicImport } = require("@shared/dynamic-imports");

      const { apiProps } = await dynamicImport("@lib/global/api-gateway");
      const { getSalesLambdaProps } = await dynamicImport(
        "@lib/global/lambdas"
      );

      const app = new cdk.App();
      const stack = new SalesStack(app, "GlobalTestStack", {
        apiProps,
        getSalesLambdaProps,
      });

      const template = Template.fromStack(stack);

      expect(
        template.findResources("AWS::Lambda::Function", {
          Properties: {
            FunctionName: "getSalesLambdaProps",
          },
        })
      ).toMatchSnapshot();
    });

    it("should generate the correct global api gateway", async () => {
      process.env.LOCALE = "global";
      const { dynamicImport } = require("@shared/dynamic-imports");

      const { apiProps } = await dynamicImport("@lib/global/api-gateway");
      const { getSalesLambdaProps } = await dynamicImport(
        "@lib/global/lambdas"
      );

      const app = new cdk.App();
      const stack = new SalesStack(app, "GlobalTestStack", {
        apiProps,
        getSalesLambdaProps,
      });

      const template = Template.fromStack(stack);

      expect(
        template.findResources("AWS::ApiGateway::RestApi")
      ).toMatchSnapshot();
    });
  });

  describe("UK", () => {
    it("should generate the correct UK lambdas", async () => {
      process.env.LOCALE = "UK";
      const { dynamicImport } = require("@shared/dynamic-imports");

      const { apiProps } = await dynamicImport("@lib/global/api-gateway");
      const { getSalesLambdaProps } = await dynamicImport(
        "@lib/global/lambdas"
      );

      const app = new cdk.App();
      const stack = new SalesStack(app, "UKTestStack", {
        apiProps,
        getSalesLambdaProps,
      });

      const template = Template.fromStack(stack);

      expect(
        template.findResources("AWS::Lambda::Function", {
          Properties: {
            FunctionName: "getSalesLambdaProps",
          },
        })
      ).toMatchSnapshot();
    });

    it("should generate the correct UK api gateway", async () => {
      process.env.LOCALE = "UK";
      const { dynamicImport } = require("@shared/dynamic-imports");

      const { apiProps } = await dynamicImport("@lib/global/api-gateway");
      const { getSalesLambdaProps } = await dynamicImport(
        "@lib/global/lambdas"
      );

      const app = new cdk.App();
      const stack = new SalesStack(app, "GlobalTestStack", {
        apiProps,
        getSalesLambdaProps,
      });

      const template = Template.fromStack(stack);

      expect(
        template.findResources("AWS::ApiGateway::RestApi")
      ).toMatchSnapshot();
    });
  });
});
