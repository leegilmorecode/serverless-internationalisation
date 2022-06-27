interface Errors {
  [key: string]: any;
}

import { getLocale } from "../dynamic-imports";

const localeErrorMessages: Errors = {
  global: {
    itemNotFound: "{0} with ID {1} has not been found",
    notFound: "{0} have not been found Globally",
  },
  uk: {
    itemNotFound: "{0} with ID {1} has not been found",
    notFound: "{0} have not been found in UK",
  },
  us: {
    itemNotFound: "{0} with ID {1} has not been found",
    notFound: "{0} have not been found in US",
  },
};

// locale specific error messages are returned dynamically
export const errorMessages = localeErrorMessages[getLocale()];
