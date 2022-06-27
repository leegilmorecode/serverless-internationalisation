import * as apigw from "aws-cdk-lib/aws-apigateway";

export const apiProps: apigw.RestApiProps = {
  restApiName: "sales-api",
  description: "Global version of the Sales API",
  deploy: true,
  deployOptions: {
    stageName: "prod",
    dataTraceEnabled: false,
    loggingLevel: apigw.MethodLoggingLevel.INFO,
    tracingEnabled: false,
    metricsEnabled: false,
  },
};
