import Ajv from "ajv";

export function validate(obj: any, schema: any) {
  const ajv = new Ajv({
    allErrors: true,
  });

  const validator = ajv.compile(schema);
  const valid = validator(obj);

  if (!valid) {
    const errorMessage = `Invalid: ${ajv.errorsText(validator.errors)}`;
    console.error(errorMessage);

    throw new Error(errorMessage);
  }
}
