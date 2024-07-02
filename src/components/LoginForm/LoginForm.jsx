import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { login } from '../../redux/auth/operations';
import { Formik, Field, ErrorMessage, Form } from 'formik';

import style from './LoginForm.module.css';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Must be at least 6 characters')
    .required('Required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {
        console.log('login success');
      })
      .catch(() => {
        console.log('login error');
      });
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form} autoComplete="off">
        <div>
          <label className={style.label} htmlFor="email">
            Email
          </label>
          <Field type="email" name="email" id="email" />
          <ErrorMessage name="email" component="div" />
        </div>
        <div>
          <label className={style.label} htmlFor="password">
            Password
          </label>
          <Field type="password" name="password" id="password" />
          <ErrorMessage name="password" component="div" />
        </div>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;


// import { useDispatch } from 'react-redux';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import toast from 'react-hot-toast';
// import { useId } from 'react';
// import { login } from '../../redux/auth/operations';
// import css from './LoginForm.module.css';

// const validationSchema = Yup.object().shape({
//   email:   Yup.string().required("This field is required"),
//   password: Yup.string().required("This field is required"),
// });

// // export default function LoginForm() {
// export const LoginForm = () => {
//     const dispatch = useDispatch();
//     const emailFieldId = useId();
//     const passwordFieldId = useId();


//     return (
//         <Formik
//             initialValues={{ email: '', password: '', }}
//             validationSchema = { validationSchema } 
//             onSubmit={(values, actions) => {
//                 dispatch(
//                     login({
//                     email: values.email,
//                     password: values.password,
//                 })
//                 )
                    
//                 .unwrap()
//                 .then(() => {
//                     toast.success('login success');
//                 })
//                 .catch(() => {
//                     toast.error('login error');
//                 });
//                 actions.resetForm();
// }}
//         > 
            
//             <Form className={css.form}>
//                 <label className={css.label} htmlFor={emailFieldId}>Email</label>
//                 <Field type="email" name="email" id={emailFieldId} />
//                 <ErrorMessage className={css.error} name="email" component="span" />
//                 <br />

//                 <label htmlFor={passwordFieldId}>Password</label>
//                 <Field type='password' name='password' id={passwordFieldId} />
//                 <ErrorMessage className={css.error} name="password" component="span" />
//                 <br />
                
//                 <button className={css.btn} type='submit'>Login</button>

//             </Form>
//         </Formik>
//         );
// }



// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         const form = e.currentTarget;

// //         dispatch(
// //             login({
// //                 email: form.elements.email.value,
// //                 password: form.elements.password.value,
// //             })
// //         )
// //       .unwrap()
// //       .then(() => {
// //         console.log('login success');
// //       })
// //       .catch(() => {
// //         console.log('login error');
// //       });

// //     form.reset();
// //   };







// // import { useDispatch } from 'react-redux';
// // // import { logIn } from '../../redux/auth/operations';
// // import { login } from '../../redux/auth/operations';
// // import css from './LoginForm.module.css';

// // export const LoginForm = () => {
// //   const dispatch = useDispatch();

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const form = e.currentTarget;

// //     dispatch(
// //         //   logIn({
// //         login({
// //         email: form.elements.email.value,
// //         password: form.elements.password.value,
// //       })
// //     )
// //       .unwrap()
// //       .then(() => {
// //         console.log('login success');
// //       })
// //       .catch(() => {
// //         console.log('login error');
// //       });

// //     form.reset();
// //   };

// //   return (
// //     <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
// //       <label className={css.label}>
// //         Email
// //         <input type="email" name="email" />
// //       </label>
// //       <label className={css.label}>
// //         Password
// //         <input type="password" name="password" />
// //       </label>
// //       <button type="submit">Log In</button>
// //     </form>
// //   );
// // };
