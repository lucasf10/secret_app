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
      const originalKeys = Object.fromEntries(Object.entries(object).sort());
      const keys = Object.keys(originalKeys);
      return object[keys[0]];
    }
};

export const getRelativeTime = (date: Date): string => {
  const now = new Date();
  const differenceInMs = now.getTime() - date.getTime();
  const differenceInMinutes = differenceInMs / (1000 * 60);
  const differenceInHours = differenceInMinutes / 60;

  if (differenceInHours > 1) return `${Math.trunc(differenceInHours)}h ago`;
  else if (differenceInMinutes > 1) return `${Math.trunc(differenceInMinutes)}m ago`;
  else return 'a few seconds ago';
};
