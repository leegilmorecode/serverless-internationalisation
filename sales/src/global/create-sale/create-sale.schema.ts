import { regexes } from "@shared/regexes";

export const schema = {
  type: "object",
  required: ["id", "firstName", "surname"], // no age property in the global version
  maxProperties: 3,
  minProperties: 3,
  properties: {
    id: {
      type: "number",
    },
    firstName: {
      type: "string",
      pattern: regexes.firstName, // these are locale specific
    },
    surname: {
      type: "string",
      pattern: regexes.surname, // these are locale specific
    },
  },
};
