import * as fs from "fs";
import * as path from "path";

function rootDir(): string {
  return `${__dirname}/sales/`;
}

// function to return the locale lowercase
export function getLocale(): string {
  if (!process.env.LOCALE) {
    throw new Error("Locale has not been set");
  }
  const { LOCALE: locale } = process.env;
  return locale.toLowerCase();
}

// function to replace the global path
function replaceGlobalPath(importPath: string, locale: string) {
  return importPath.replace("global", locale);
}

// function to return the global path
function returnGlobalPath(importPath: string, locale: string) {
  return importPath.replace(locale, "global");
}

// function to return a dynamic path based on the locale
// being built for. It will check if an override file exists
// and if not will fall back to the global version of the file
export function dynamicPath(importPath: string): string {
  const locale = getLocale();

  if (locale !== "global") {
    const nonGlobalPath = replaceGlobalPath(importPath, locale);

    // if the non global file exists then return it
    if (fs.existsSync(path.join(rootDir(), nonGlobalPath))) {
      return nonGlobalPath;
    }
  }

  return importPath;
}

// function to dynamically import the correct files based on
// the locale being built for. If an ovveride file does not
// exist then it will fall back to the global version.
export async function dynamicImport(importPath: string) {
  const locale = getLocale();

  try {
    const updatedPath =
      locale !== "global" ? replaceGlobalPath(importPath, locale) : importPath;

    // check if there is a non global file i.e. overide version for a specific locale
    if (locale !== "global") {
      try {
        // try and return a locale specific version of it exists
        return await import(updatedPath);
      } catch (error) {
        // return the global version as it may not have been overriden
        return await import(returnGlobalPath(importPath, locale));
      }
    }
    // return the global version as it may not have been overriden
    return await import(returnGlobalPath(importPath, locale));
  } catch (error) {
    console.error(error);
    throw error;
  }
}
