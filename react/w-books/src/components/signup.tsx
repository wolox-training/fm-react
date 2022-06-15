import React from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';

import logo from '../assets/LogoWolox.png';

export default function SignUp() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <div className="master-container login-master-container">
        <div className="login-container">
                <img className="wolox-logo" src={logo} alt="wolox logo" />
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name" className="text"> Nombre </label>
            <input type="name" className="credentials-box" id="nombre" {...register('first_name')} />
            <label htmlFor="surname" className="text"> Apellido </label>
            </label>
            <input type="surname" className="credentials-box" id="apellido" {...register('last_name')} />
            <label htmlFor="email" className="text"> Email </label>
            <input type="email" className="credentials-box" id="email" {...register('email')} />
            <label htmlFor="password" className="text"> Password </label>
            <input type="password" className="credentials-box" id="password" {...register('password')} />
            <label htmlFor="password" className="text"> Confirmación de Password </label>
            <input type="password" className="credentials-box" id="confirmacionPassword" {...register('password_confirmation')} />
            <a className="button action-button">
                        Sign Up
                        </a>
          </form>
                <a href="login.html" className="button redirection-button">
            Login
                    </a>
              </div>
      </div>
    </div>
  );
}
