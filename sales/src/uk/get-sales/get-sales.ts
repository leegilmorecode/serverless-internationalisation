import {
  APIGatewayEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from "aws-lambda";

export const handler: APIGatewayProxyHandler =
  async ({}: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    try {
      console.log("worked UK!!");
      return {
        body: JSON.stringify("worked UK!!"),
        statusCode: 201,
      };
    } catch (error) {
      console.error(error);
      return {
        body: JSON.stringify(error),
        statusCode: 500,
      };
    }
  };
