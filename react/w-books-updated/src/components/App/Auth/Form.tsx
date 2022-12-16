import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { IFormValues } from '../../../interfaces/form';
import { signUpFormStructure } from '../../../constants/form';

import FormWrapper from './FormWrapper';
import styles from './Form.module.scss';
import Input from './Input';

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormValues>();
  const { t } = useTranslation();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
  };

  const formInputs = signUpFormStructure.map(({ label, name, type, pattern }) => (
    <Input
      key={name}
      name={name}
      label={label}
      type={type}
      register={register}
      errors={errors}
      pattern={pattern}
    />
  ));

  return (
    <FormWrapper>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {formInputs}
        <div className={styles.actions}>
          <button className={styles.signUp} type="submit">
            {t('SignUp:signUp')}
          </button>
          <button className={styles.login} type="button">
            {t('SignUp:login')}
          </button>
        </div>
      </form>
    </FormWrapper>
  );
}

export default Form;
