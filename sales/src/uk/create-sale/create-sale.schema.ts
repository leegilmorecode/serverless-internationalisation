import { regexes } from "@shared/regexes";

export const schema = {
  type: "object",
  required: ["id", "firstName", "surname", "age"],
  maxProperties: 4,
  minProperties: 4,
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
    age: {
      type: "number",
    },
  },
};
