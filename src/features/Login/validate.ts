import * as yup from 'yup';
import _ from 'lodash';

const convertYupErrorsToFieldErrors = (yupErrors: any) => {
  return yupErrors.inner.reduce(
    (errors: any, { path, message }: { path: string; message: string }) => {
      if (_.get(errors, path)) {
        _.set(errors, path, _.get(errors, path) + ' ' + message);
      } else {
        _.set(errors, path, message);
      }
      return errors;
    },
    {}
  );
};

export function makeValidate<T>(validator: yup.Schema<T>) {
  return async (values: T) => {
    try {
      await validator.validate(values, { abortEarly: false });
    } catch (err) {
      return convertYupErrorsToFieldErrors(err);
    }
  };
}

export const schema = yup.object().shape<any>({
  email: yup.string().required().email(),
});
