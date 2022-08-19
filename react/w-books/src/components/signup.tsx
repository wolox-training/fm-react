import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import React from 'react';

import logo from '../assets/LogoWolox.png';

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
    <div>
      <div className="master-container login-master-container">
        <div className="login-container">
          <img className="wolox-logo" src={logo} alt="wolox logo" />
          <form className="login-form">
            <label htmlFor="name" className="text">
              {' '}
              Nombre
            </label>
            <input
              type="name"
              className="credentials-box"
              id="nombre"
              name="first_name"
              ref={register({ required: true, pattern: /^[A-Za-z]+$/i })}
            />
            <label htmlFor="surname" className="text">
              {' '}
              Apellido
            </label>
            <input
              type="surname"
              className="credentials-box"
              id="apellido"
              name="last_name"
              ref={register({ required: true, pattern: /^[A-Za-z]+$/i })}
            />
            <label htmlFor="email" className="text">
              {' '}
              Email
            </label>
            <input
              type="email"
              className="credentials-box"
              id="email"
              name="email"
              ref={register({ required: true })}
            />
            <label htmlFor="password" className="text">
              {' '}
              Password
            </label>
            <input
              type="password"
              className="credentials-box"
              id="password"
              name="password"
              ref={register({ required: true })}
            />
            <label htmlFor="password" className="text">
              {' '}
              Confirmación de Password
            </label>
            <input
              type="password"
              className="credentials-box"
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
            <button type="button" className="button action-button" onClick={onSubmit}>Sign Up</button>
          </form>
          <button type="button" className="button redirection-button">Login</button>
        </div>
      </div>
    </div>
  );
}
