import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import React from 'react';
import cn from 'classnames';

import logo from '../../assets/LogoWolox.png';
import Input from '../Input';

import styles from './styles.module.scss';

export default function SignUp() {
  const history = useHistory();
  const { register, getValues } = useForm({ mode: 'onSubmit' });
  const onSubmit = (data: Record<string, any>) => {
    // eslint-disable-next-line no-console
    console.log(data);
    //mutateAsync(data);
    console.log(getValues());
    history.push('/home');
  };

  return (
    <div className={cn('master-container', styles.loginMasterContainer)}>
      <div className={styles.loginContainer}>
        <img className={styles.woloxLogo} src={logo} alt="wolox logo" />
        <form className={styles.loginForm}>         
          <Input type="name" id="nombre" name="first_name" required pattern={/^[A-Za-z]+$/i} label="Nombre" />
          <Input type="surname" id="apellido" name="last_name" required pattern={/^[A-Za-z]+$/i} label="Apellido" />
          <Input type="email" id="email" name="email" required pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g} label="Email" />
          <Input type="password" id="password" name="password" required label="password" />
          <Input type="password" id="confirmacionPassword" name="confirmacionPassword" required label="Confirmación de Password" 
              validate={{
                equalsPassword: (value: string) => {
                  const { password } = getValues('password');
                  return password === value || 'Passwords should match!';
                }
              }}/>
          <button type="button" className={cn('button', 'action-button')} onClick={onSubmit}>
            Sign Up
          </button>
        </form>
        <button type="button" className={cn('button', 'redirection-button')}>
          Login
        </button>
      </div>
    </div>
  );
}
