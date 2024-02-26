import css from "./ContactForm.module.css";
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useId } from "react";
import * as Yup from 'yup';

const userSchema = Yup.object().shape({
    
    name: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too long!')
        .required('Required!'),
    
    number: Yup.string()
        .min(3, 'Too short')
        .max(10, 'Too Long')
        .matches(
            /^[0-9]{3}-[0-9]{3}-[0-9]{2}$/,
            'Is not valid, valid number is: xxx-xxx-xx'
        )
        .required('Phone number is required')
});

export default function ContactForm({ addContact }) {
    const forName = useId();
    const forPhone = useId();
    
    return (
        <Formik
            initialValues={{
                name: "",
                number: "",
            }}
            onSubmit={(values, action) => {
                action.resetForm();
                addContact(values);
            }}
            validationSchema={userSchema}
        >
            <Form className={css.form}>
                <label htmlFor={forName} className={css.label}>Name</label>
                <Field type="text" name="name" id={forName} className={css.input} />
                <ErrorMessage name="name" component="span" className={css.error} />

                <label htmlFor={forPhone} className={css.label}>Phone</label>
                <Field type="text" name="number" id={forPhone} className={css.input} />
                <ErrorMessage name="number" component="span" className={css.error} />
                
                <button type="submit" className={css.button}>Add contact</button>
            </Form>
        </Formik>
    );
}
