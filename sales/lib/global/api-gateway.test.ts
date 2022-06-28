import { apiProps } from "./api-gateway";

describe("api-gateway-global", () => {
  it("should contain the correct properties", () => {
    expect(apiProps).toMatchInlineSnapshot(`
Object {
  "deploy": true,
  "deployOptions": Object {
    "dataTraceEnabled": false,
    "loggingLevel": "INFO",
    "metricsEnabled": false,
    "stageName": "prod",
    "tracingEnabled": false,
  },
  "description": "Global version of the Sales API",
  "restApiName": "sales-api",
}
`);
  });
});
