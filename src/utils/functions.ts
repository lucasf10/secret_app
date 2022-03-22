import { ObjectSchema } from 'yup';
import yupToObject from 'yup-to-object';

export const validateForm = (
    values: Record<string, string | boolean>,
    schema: ObjectSchema<Record<string, any>>,
  ): string => {
    try {
      schema.validateSync(values, { abortEarly: false });
      return '';
    } catch (err) {
      const object = yupToObject(err);
      const keys = Object.keys(object);
      return object[keys[0]];
    }
};
