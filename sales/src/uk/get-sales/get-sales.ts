import {
  APIGatewayEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from "aws-lambda";

// we import these values which are locale aware
import { errorMessages } from "@shared/error-messages";
import { stringFormat } from "@shared/string-format";

export const handler: APIGatewayProxyHandler =
  async ({}: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    try {
      console.log("UK");
      // throw random error, this has the correct translated values per locale
      // which you will see in the return value from api gateway
      const errorMessage = stringFormat(errorMessages.notFound, "Sales");
      throw new Error(errorMessage);

      // you would have UK code here, returning data from the db <--

      return {
        body: JSON.stringify([]),
        statusCode: 200,
      };
    } catch (error: any) {
      console.error(error);
      return {
        body: JSON.stringify(error.message),
        statusCode: 500,
      };
    }
  };
