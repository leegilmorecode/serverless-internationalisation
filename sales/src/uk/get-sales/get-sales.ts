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
      console.log("worked UK");

      // throw random error, this has the correct translated values per locale
      const errorMessage = stringFormat(errorMessages.notFound, "Sales");
      throw new Error(errorMessage);

      // you would have UK specific code here <--

      return {
        body: JSON.stringify("global return"),
        statusCode: 201,
      };
    } catch (error: any) {
      console.error(error);
      return {
        body: JSON.stringify(error.message),
        statusCode: 500,
      };
    }
  };
