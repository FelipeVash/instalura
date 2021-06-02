/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
import React from 'react';

export default function useForm({ initialValues, onSubmit }) {
  const [values, setValues] = React.useState(initialValues);

  const [isFormDisabled, setIsFormDisabled] = React.useState(true);

  React.useEffect(() => {
    if (values.usuario.length > 0) {
      console.log('Is field valid!');
      setIsFormDisabled(false);
    } else {
      console.log('Is field invalid!');
      setIsFormDisabled(true);
    }
  }, [values]);

  return {
    values,
    handleSubmit() {
      event.preventDefault();
      onSubmit(values);
    },
    handleChange(event) {
      const fieldName = event.target.getAttribute('name');
      const { value } = event.target;

      setValues((currentValues) => ({
        ...currentValues,
        [fieldName]: value,
      }));
    },
    isFormDisabled,
  };
}
