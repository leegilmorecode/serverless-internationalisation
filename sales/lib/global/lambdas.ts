import * as lambda from "aws-cdk-lib/aws-lambda";
import * as nodeLambda from "aws-cdk-lib/aws-lambda-nodejs";
import * as path from "path";

import { dynamicPath } from "@shared/dynamic-import";

export const getSalesLambdaProps: nodeLambda.NodejsFunctionProps = {
  runtime: lambda.Runtime.NODEJS_14_X,
  // the entry point utilises our dynamic path generator
  entry: path.join(
    __dirname,
    dynamicPath("/../../src/global/get-sales/get-sales.ts")
  ),
  memorySize: 512,
  handler: "handler",
  bundling: {
    minify: true,
    externalModules: ["aws-sdk"],
  },
};
