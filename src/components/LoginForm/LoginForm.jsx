import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { login } from '../../redux/auth/operations';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import toast, {Toaster} from 'react-hot-toast';
import css from './LoginForm.module.css';

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
              toast.success('Log in successful');
              console.log('Log in successful');
          })
          .catch(() => {
              toast.error('OOPS! An error occurred! Please, try again!');
              console.log('OOPS! An error occurred! Please, try again!');
          });
    resetForm();
  };

    return (
        <>
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
        <Form className={css.form} autoComplete="off">
            <div>
                <label className={css.label} htmlFor="email">
                    Email
                </label>
                <Field className={css.field}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="your_email@gmail.com"/>
                <ErrorMessage className={css.error} name="email" component="div" />
            </div>
                    
            <div>
                <label className={css.label} htmlFor="password">
                    Password
                </label>
                <Field className={css.field}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="your_password"
                />
                <ErrorMessage className={css.error} name="password" component="div" />
            </div>
            
            <button className={css.btn} type="submit">Login</button>
        </Form>
        </Formik>
        <Toaster/>
        </>
  );
};

export default LoginForm;