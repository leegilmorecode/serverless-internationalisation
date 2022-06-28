import * as apigw from "aws-cdk-lib/aws-apigateway";
import * as nodeLambda from "aws-cdk-lib/aws-lambda-nodejs";

import { Stack, StackProps } from "aws-cdk-lib";

import { Construct } from "constructs";

interface SalesProps extends StackProps {
  apiProps: apigw.RestApiProps;
  getSalesLambdaProps: nodeLambda.NodejsFunctionProps;
  createSaleLambdaProps: nodeLambda.NodejsFunctionProps;
}

export class SalesStack extends Stack {
  constructor(scope: Construct, id: string, props?: SalesProps) {
    super(scope, id, props);

    // lambda resources
    const getSalesHandler: nodeLambda.NodejsFunction =
      new nodeLambda.NodejsFunction(this, "GetSales", {
        ...props?.getSalesLambdaProps,
      });

    const createSaleHandler: nodeLambda.NodejsFunction =
      new nodeLambda.NodejsFunction(this, "CreateSale", {
        ...props?.createSaleLambdaProps,
      });

    // api gateway resource
    const salesApi: apigw.RestApi = new apigw.RestApi(this, "SalesAPI", {
      ...props?.apiProps,
    });

    const sales: apigw.Resource = salesApi.root.addResource("sales");
    sales.addMethod(
      "GET",
      new apigw.LambdaIntegration(getSalesHandler, {
        proxy: true,
        allowTestInvoke: true,
      })
    );

    sales.addMethod(
      "POST",
      new apigw.LambdaIntegration(createSaleHandler, {
        proxy: true,
        allowTestInvoke: true,
      })
    );
  }
}
