import { apiProps } from "./api-gateway";

describe("api-gateway-uk", () => {
  it("should contain the correct properties", () => {
    expect(apiProps).toMatchInlineSnapshot(`
Object {
  "deploy": true,
  "deployOptions": Object {
    "dataTraceEnabled": true,
    "loggingLevel": "INFO",
    "metricsEnabled": true,
    "stageName": "prod",
    "tracingEnabled": true,
  },
  "description": "UK version of the Sales API",
  "restApiName": "sales-api",
}
`);
  });
});
