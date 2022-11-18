import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './styles.module.scss';

interface Props {
  label: string;
  type: string;
  name: string;
  id: string;
  required?: boolean;
  pattern?: RegExp;
  validate?: Record<string,any>;
}

export default function Input({ type, label, required, pattern, validate, ...props }: Props) {
  const { register } = useForm();

  return (
    <>
      <label htmlFor={type} className={styles.text}>
        {' '}
        {label}
      </label>
      <input className={styles.credentialsBox} {...props} ref={register({ required, pattern, validate })} />
    </>
  );
}
