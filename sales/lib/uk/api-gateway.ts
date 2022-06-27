import * as apigw from "aws-cdk-lib/aws-apigateway";

export const apiProps: apigw.RestApiProps = {
  restApiName: "sales-api",
  description: "UK version of the Sales API",
  deploy: true,
  deployOptions: {
    stageName: "prod",
    dataTraceEnabled: true,
    loggingLevel: apigw.MethodLoggingLevel.INFO,
    tracingEnabled: true,
    metricsEnabled: true,
  },
};
