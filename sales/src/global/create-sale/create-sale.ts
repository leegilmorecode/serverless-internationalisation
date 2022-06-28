import {
  APIGatewayEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from "aws-lambda";

// we import these values which are locale aware
import { errorMessages } from "@shared/error-messages";
import { schema } from "./create-sale.schema";
import { stringFormat } from "@shared/string-format";
import { validate } from "@shared/validate";

export const handler: APIGatewayProxyHandler = async ({
  body,
}: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  try {
    console.log("GLOBAL");
    if (!body) {
      // we return the correct error message based on locale i.e. global
      throw new Error(stringFormat(errorMessages.invalidBody, "sale"));
    }

    const sale = JSON.parse(body);

    // we validate the payload of the global sale object
    validate(sale, schema);

    // you would have global code here, writing to the db <--

    return {
      body: JSON.stringify(sale),
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
