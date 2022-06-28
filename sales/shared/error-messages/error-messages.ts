interface Errors {
  [key: string]: any;
}

import { getLocale } from "../dynamic-imports";

// each of these could have different languages or messages
// specific to the locale
const localeErrorMessages: Errors = {
  global: {
    itemNotFound: "{0} with ID {1} has not been found",
    notFound: "{0} have not been found Globally",
    invalidBody: "{0} has no body",
  },
  uk: {
    itemNotFound: "{0} with ID {1} has not been found",
    notFound: "{0} have not been found in UK",
    invalidBody: "The {0} has no body",
  },
  us: {
    itemNotFound: "{0} with ID {1} has not been found",
    notFound: "{0} have not been found in US",
    invalidBody: "{0} with ID {1} has no body",
  },
};

// locale specific error messages are returned dynamically
export const errorMessages = localeErrorMessages[getLocale()];
