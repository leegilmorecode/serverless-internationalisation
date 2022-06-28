interface Regexes {
  [key: string]: any;
}

import { getLocale } from "../dynamic-imports";

const localeRegexes: Regexes = {
  global: {
    firstName: "/^[a-z]+$/i",
    surname: "/^[a-z ,.'-]+$/i",
  },
  uk: {
    firstName: "/^[a-z ,.'-]+$/i",
    surname: "/^[a-z ,.'-]+$/i",
  },
  us: {
    firstName: "/^[a-zŁą ,.'-]+$/i",
    surname: "/^[a-zŁą ,.'-]+$/i",
  },
};

// locale specific regexes are returned dynamically
export const regexes = localeRegexes[getLocale()];
