
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';

import style from './RegistrationForm.module.css';

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
      .unwrap()
      .then(() => {
        console.log('Registration successful! Welcome!');
      })
      .catch(error => {
        console.error('Registration error. Please try again.', error);
      });
    resetForm();
  };

  return (
    <div className={style.contRegLogForm}>
      <h2 className={style.titleRegLogForm}>Register,please!</h2>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={style.regLogForm} autoComplete="off">
          <div className={style.inputGroup}>
            <label className={style.regLoglabel} htmlFor="name">
              Name
            </label>
            <Field
              className={style.regLogInput}
              type="text"
              name="name"
              id="name"
            />
            <ErrorMessage className={style.error} name="name" component="div" />
          </div>
          <div className={style.inputGroup}>
            <label className={style.regLoglabel} htmlFor="email">
              Email
            </label>
            <Field
              className={style.regLogInput}
              type="email"
              name="email"
              id="email"
            />
            <ErrorMessage
              className={style.error}
              name="email"
              component="div"
            />
          </div>
          <div className={style.inputGroup}>
            <label className={style.regLoglabel} htmlFor="password">
              Password
            </label>
            <Field
              className={style.regLogInput}
              type="password"
              name="password"
              id="password"
            />
            <ErrorMessage
              className={style.error}
              name="password"
              component="div"
            />
          </div>
          <button className={style.regButton} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;




// import { useDispatch } from 'react-redux';
// import { register } from '../../redux/auth/operations';
// // import css from './RegisterForm.module.css';
// import css from './RegistrationForm.module.css'

// //export const RegisterForm = () => {
// export const RegistrationForm =() => {
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;

//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );

//     form.reset();
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
//       <label className={css.label}>
//         Username
//         <input type="text" name="name" required/>
//       </label>
//       <label className={css.label}>
//         Email
//         <input type="email" name="email" required/>
//       </label>
//       <label className={css.label}>
//         Password
//         <input type="password" name="password" minLength='6' required/>
//       </label>
//       <button type="submit">Register</button>
//     </form>
//   );
// };
