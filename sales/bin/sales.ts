#!/usr/bin/env node

import "source-map-support/register";

import * as apigw from "aws-cdk-lib/aws-apigateway";
import * as cdk from "aws-cdk-lib";
import * as nodeLambda from "aws-cdk-lib/aws-lambda-nodejs";

import { SalesStack } from "@lib/sales-stack";
import { dynamicImport } from "@shared/dynamic-import";

(async () => {
  // dynamically pull in the locale specific props as overrides
  const { apiProps }: { apiProps: apigw.RestApiProps } = await dynamicImport(
    "@lib/global/api-gateway"
  );
  const {
    getSalesLambdaProps,
  }: { getSalesLambdaProps: nodeLambda.NodejsFunctionProps } =
    await dynamicImport("@lib/global/lambdas");

  // create the new stack with the locale specific props passed in
  const app = new cdk.App();
  new SalesStack(app, "SalesStack", {
    apiProps,
    getSalesLambdaProps,
  });
})();
