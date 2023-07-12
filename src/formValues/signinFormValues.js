import { object, string, ref } from "yup"

const initialValues = {
    email: '',
    password: '',
}

const validationSchema = object({

    email: string().email().required('Required field'),

    password: string()
        .min(6, 'Write a password minimin of 6 characters')
        .required('Required field'),
})


export {
    initialValues,
    validationSchema,
}