import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import React from 'react';


import logo from '../../assets/LogoWolox.png';
import styles from './styles.module.scss';
import cn from 'classnames';

export default function SignUp() {
  const history = useHistory();
  const { register, handleSubmit, getValues } = useForm({ mode: 'onSubmit' });
  const onSubmit = (data: Record<string, any>) => {
    // eslint-disable-next-line no-console
    console.log(data);
    console.log(getValues());
    history.push('/home');
  };

  return (
      <div className={cn('master-container', styles.loginMasterContainer)}>
        <div className={styles.loginContainer}>
          <img className={styles.woloxLogo} src={logo} alt="wolox logo" />
          <form className={styles.loginForm}>
            <label htmlFor="name" className={styles.text}>
              {' '}
              Nombre
            </label>
            <input
              type="name"
              className={styles.credentialsBox}
              id="nombre"
              name="first_name"
              ref={register({ required: true, pattern: /^[A-Za-z]+$/i })}
            />
            <label htmlFor="surname" className={styles.text}>
              {' '}
              Apellido
            </label>
            <input
              type="surname"
              className={styles.credentialsBox}
              id="apellido"
              name="last_name"
              ref={register({ required: true, pattern: /^[A-Za-z]+$/i })}
            />
            <label htmlFor="email" className={styles.text}>
              {' '}
              Email
            </label>
            <input
              type="email"
              className={styles.credentialsBox}
              id="email"
              name="email"
              ref={register({ required: true })}
            />
            <label htmlFor="password" className={styles.text}>
              {' '}
              Password
            </label>
            <input
              type="password"
              className={styles.credentialsBox}
              id="password"
              name="password"
              ref={register({ required: true })}
            />
            <label htmlFor="password" className={styles.text}>
              {' '}
              Confirmación de Password
            </label>
            <input
              type="password"
              className={styles.credentialsBox}
              id="confirmacionPassword"
              name="confirmacionPassword"
              ref={register({
                required: true,
                validate: {
                  equalsPassword: value => {
                    const { password } = getValues('password');
                    return password === value || 'Passwords should match!';
                  }
                }
              })}
            />
            <button type="button" className={cn('button', 'action-button')} onClick={onSubmit}>Sign Up</button>
          </form>
          <button type="button" className={cn('button', 'redirection-button')}>Login</button>
        </div>
      </div>
  );
}
