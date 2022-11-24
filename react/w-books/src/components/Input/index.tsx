import React from 'react';
import { useForm, useFormContext } from 'react-hook-form';

import styles from './styles.module.scss';

interface Props {
  label: string;
  type: string;
  name: string;
  id: string;
  required?: boolean;
  pattern?: RegExp;
  validate?: Record<string,any>;
  minLength?: number;
}

export default function Input({ type, label, required, pattern, validate, minLength, ...props }: Props) {
  const { register } = useFormContext();

  return (
    <>
      <label htmlFor={type} className={styles.text}>
        {' '}
        {label}
      </label>
      <input className={styles.credentialsBox} {...props} ref={register({ required, pattern, validate, minLength })} />
    </>
  );
}
