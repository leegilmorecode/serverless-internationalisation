import * as lambda from "aws-cdk-lib/aws-lambda";
import * as nodeLambda from "aws-cdk-lib/aws-lambda-nodejs";
import * as path from "path";

import { dynamicPath, getLocale } from "@shared/dynamic-imports";

export const getSalesLambdaProps: nodeLambda.NodejsFunctionProps = {
  runtime: lambda.Runtime.NODEJS_14_X,
  functionName: "getSalesLambda",
  // the entry point utilises our dynamic path generator
  // which allows us to swap out the lambda source code based
  // on locale being built too
  entry: path.join(
    __dirname,
    dynamicPath("/../../src/global/get-sales/get-sales.ts")
  ),
  memorySize: 1024,
  handler: "handler",
  description: "UK version of the getSalesLambdaProps handler",
  environment: {
    // this is used to determine which imports we use dynamically
    LOCALE: getLocale(),
  },
  bundling: {
    minify: true,
    externalModules: ["aws-sdk"],
  },
};

export const createSaleLambdaProps: nodeLambda.NodejsFunctionProps = {
  runtime: lambda.Runtime.NODEJS_14_X,
  functionName: "createSaleLambda",
  // the entry point utilises our dynamic path generator
  // which allows us to swap out the lambda source code based
  // on locale being built too
  entry: path.join(
    __dirname,
    dynamicPath("/../../src/global/create-sale/create-sale.ts")
  ),
  memorySize: 512,
  handler: "handler",
  description: "UK version of the createSaleLambdaProps handler",
  environment: {
    // this is used to determine which imports we use dynamically
    LOCALE: getLocale(),
  },
  bundling: {
    minify: true,
    externalModules: ["aws-sdk"],
  },
};
