import { FormProvider, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import React from 'react';
import cn from 'classnames';

import logo from '../../assets/LogoWolox.png';
import Input from '../Input';

import styles from './styles.module.scss';
// import { useMutation } from 'react-query';

import { FormSignup } from "../../utils/types";

import { registerService } from "../../services/users";

export default function SignUp() {
  const history = useHistory();
  const methods = useForm<FormSignup>({ mode: 'onSubmit' });
  const onSubmit =  () => {
    // eslint-disable-next-line no-console
    registerService({...methods.getValues(), locale:"en"})
    .then(response => console.log(response));

    // const mutation = useMutation(addTodo);
    // try {
    //   const todo = await mutation.mutateAsync(data);
    //   console.log(todo);
    // } catch (error) {
    //   console.error(error);
    // } finally {
    //   console.log('done');
    // }
    history.push('/home');
  };


  //AGREGAR VALIDACION LONGITUD PASSWORD Y PROBAR EL SERVICIO

  return (
    <div className={cn('master-container', styles.loginMasterContainer)}>
      <div className={styles.loginContainer}>
        <img className={styles.woloxLogo} src={logo} alt="wolox logo" />
        <FormProvider {...methods}>
          <form className={styles.loginForm}>         
            <Input type="name" id="nombre" name="first_name" required pattern={/^[A-Za-z]+$/i} label="Nombre" />
            <Input type="surname" id="apellido" name="last_name" required pattern={/^[A-Za-z]+$/i} label="Apellido" />
            <Input type="email" id="email" name="email" required pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g} label="Email" />
            <Input type="password" id="password" name="password" required minLength={6} label="password" />
            <Input type="password" id="confirmacionPassword" name="confirmacionPassword" required minLength={6} label="Confirmación de Password" 
                validate={{
                  equalsPassword: (value: string) => {
                    const { password } = methods.getValues();
                    return password === value || 'Passwords should match!';
                  }
                }}/>
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
