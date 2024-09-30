import Ajv, { Schema } from "ajv";

const ajv = new Ajv();

export const ValidateRequest = <T>(requestBody: unknown, schema: Schema) => {
    const ValidatedData = ajv.compile<T>(schema);

    if (ValidatedData(requestBody)) {
        return false;
    }

    const errors = ValidatedData.errors?.map((err) => err.message);

    return errors && errors[0];
}