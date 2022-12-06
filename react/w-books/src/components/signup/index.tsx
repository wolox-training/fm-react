import { FormProvider, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import React from 'react';
import cn from 'classnames';

import logo from '../../assets/LogoWolox.png';
import Input from '../Input';

import styles from './styles.module.scss';
import { useMutation } from 'react-query';

import { FormSignup } from "../../utils/types";

import { registerService } from "../../services/users";


export default function SignUp() {
  const history = useHistory();
  const methods = useForm<FormSignup>({ mode: 'onSubmit' });
  const mutation = useMutation(registerService, {
    onSuccess: (response) => {
      console.log("SUCESS", response); 
      history.push('/home');
    },
    onError: (error) => {
      console.log("ERROR", error);
    }
  });
  const onSubmit =  async () => {
    // eslint-disable-next-line no-console
    try {
      const todo = await mutation.mutateAsync({...methods.getValues(), locale:"en"});
    }
    finally {
    }
  };

  return (
    <div className={cn('master-container', styles.loginMasterContainer)}>
      {mutation.isLoading ? 
        <div className={styles.loader}>
        <div className={styles.loaderText}> Procesando tu solicitud ... </div> 
      </div>
      : null}
      <div className={styles.loginContainer}>
        <img className={styles.woloxLogo} src={logo} alt="wolox logo" />
        <FormProvider {...methods}>
          <form className={styles.loginForm}>         
            <Input type="name" id="nombre" name="first_name" required pattern={/^[A-Za-z]+$/i} label="Nombre" />
            <Input type="surname" id="apellido" name="last_name" required pattern={/^[A-Za-z]+$/i} label="Apellido" />
            <Input type="email" id="email" name="email" required pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g} label="Email" />
            <Input type="password" id="password" name="password" required minLength={6} label="Password" />
            <Input type="password" id="confirmacionPassword" name="confirmacionPassword" required minLength={6} label="Confirmación de Password" 
                validate={{
                  equalsPassword: (value: string) => {
                    const { password } = methods.getValues();
                    return password === value || 'Passwords should match!';
                  }
                }}/>
            {mutation.isError ? <div className={styles.errorText}>Error, revisa el mail o password</div> : null}
            <button type="button" className={cn('button', 'action-button')} onClick={onSubmit}>
              Sign Up
            </button>
          </form>
        </FormProvider>
        <button type="button" className={cn('button', 'redirection-button')}>
          Login
        </button>
      </div>
    </div>
  );
}
