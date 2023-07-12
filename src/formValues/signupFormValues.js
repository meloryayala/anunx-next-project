import { object, string, ref } from "yup"

const initialValues = {
    name: '',
    email: '',
    password: '',
    passwordConf: '',
}

const validationSchema = object({
    name: string().required('Required field'),

    email: string().email().required('Required field'),

    password: string()
        .min(6, 'Write a password minimin of 6 characters')
        .required('Required field'),

    passwordConf: string()
        .required('Please, confirm your password')
        .oneOf([ref('password'), null], 'Passwords needs to be equal')
})


export {
    initialValues,
    validationSchema,
}