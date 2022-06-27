interface Regexes {
  [key: string]: any;
}

import { getLocale } from "../dynamic-imports";

const localeRegexes: Regexes = {
  global: {
    firstName: "global firstname",
    surname: "global surname",
  },
  uk: {
    firstName: "uk firstname",
    surname: "us surname",
  },
  us: {
    firstName: "us firstname",
    surname: "uk firstname",
  },
};

// locale specific regexes are returned dynamically
export const regexes = localeRegexes[getLocale()];
