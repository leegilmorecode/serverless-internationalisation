interface Regexes {
  [key: string]: any;
}

import { getLocale } from "../dynamic-imports";

const localeRegexes: Regexes = {
  global: {
    firstName: "^[a-z A-Z]+$",
    surname: "^[a-z A-Z]+$",
  },
  uk: {
    firstName: "^[a-zŁą A-Z]+$", // different regexes for the UK
    surname: "^[a-zŁą A-Z]+$",
  },
  us: {
    firstName: "^[a-zŁą A-Z]+$",
    surname: "^[a-zŁą A-Z]+$",
  },
};

// locale specific regexes are returned dynamically
export const regexes = localeRegexes[getLocale()];
