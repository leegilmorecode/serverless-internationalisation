export const stringFormat = (str: string, ...args: string[]) =>
  str.replace(/{(\d+)}/g, (match, index) => args[index] || "");
