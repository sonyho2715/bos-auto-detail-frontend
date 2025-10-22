// src/hooks/useFormValidation.ts
import { useState, useCallback } from 'react';

type ValidationRules = {
  [key: string]: (value: any) => string | null;
};

export function useFormValidation(initialState: any, rules: ValidationRules) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validate = useCallback((fieldName: string, value: any) => {
    if (rules[fieldName]) {
      return rules[fieldName](value);
    }
    return null;
  }, [rules]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value, type } = e.target;
      const inputValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

      setValues((prev: any) => ({ ...prev, [name]: inputValue }));

      const error = validate(name, inputValue);
      setErrors((prev: any) => ({
        ...prev,
        [name]: error || '',
      }));
    },
    [validate]
  );

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  }, []);

  const validateAll = useCallback(() => {
    const newErrors: { [key: string]: string } = {};
    Object.keys(rules).forEach((fieldName) => {
      const error = validate(fieldName, values[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [rules, values, validate]);

  const reset = useCallback(() => {
    setValues(initialState);
    setErrors({});
    setTouched({});
  }, [initialState]);

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateAll,
    reset,
    setValues,
  };
}
