
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';

import css from './RegistrationForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Error - email address').required('Required'),
  password: Yup.string()
    .min(6, 'Minimum then 6 characters')
    .required('Required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log('Submitting values:', values);
    dispatch(register(values))
    resetForm();
  };

  return (
    <div className={css.contRegLogForm}>
      <h2 className={css.title}>Register, please!</h2>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <div className={css.inputGroup}>
            <label className={css.label} htmlFor="name">
              Name
            </label>
            <Field
                className={css.field}
                type="text"
                name="name"
                id="name"
                placeholder="your_name"
            />
            <ErrorMessage className={css.error} name="name" component="div" />
          </div>
          <div className={css.inputGroup}>
            <label className={css.label} htmlFor="email">
              Email
            </label>
            <Field
                className={css.field}
                type="email"
                name="email"
                id="email"
                placeholder="your_email@gmail.com"
            />
            <ErrorMessage className={css.error} name="email" component="div" />
          </div>
          <div className={css.inputGroup}>
            <label className={css.label} htmlFor="password">
              Password
            </label>
            <Field
                className={css.field}
                type="password"
                name="password"
                id="password"
                placeholder="your_password - letter & number"
            />
            <ErrorMessage className={css.error} name="password" component="div" />
          </div>
          <button className={css.btn} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;