import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useId } from 'react';
// import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

const validationSchema = Yup.object().shape({
  name:   Yup.string().min(2, "Too Short! Minimum - 2 ").max(50, "Too Long! Maximum - 50 ").required("Required"),
  number: Yup.string().min(6, "Too short! Minimum - 6 ").max(13, "Too long. Maximum - 13 ").required("Required"),
});

// const FormikForm = ({ submit }) => {
export default function FormikForm() {
    const nameFieldId = useId();
    const numberFieldId = useId();
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                // id: "",
                name: "",
                number: "",
            }}
            onSubmit={(values, actions) => {
                const newContact = {
                    // id: nanoid(4),
                    name: values.name,
                    number: values.number,
                }
                dispatch(addContact(newContact))
                actions.resetForm()
            }}
            validationSchema={validationSchema}>
            
            <Form className={css.form}>
                <label htmlFor={nameFieldId}>Name  </label>
                <Field type='text' name='name' id={nameFieldId} />
                <ErrorMessage className={css.error} name="name" component="span" />
                <br />

                <label htmlFor={numberFieldId}>Number</label>
                <Field type='text' name='number' id={numberFieldId} />
                <ErrorMessage className={css.error} name="number" component="span" />
                <br />
                <button className={css.btn_add} type='submit'>Add contact</button>
            </Form>
        </Formik>
    );
}