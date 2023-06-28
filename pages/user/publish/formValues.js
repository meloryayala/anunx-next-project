import { object, string, number, array } from 'yup'

const initialValues = {
    title: '',
    category: '',
    description: '',
    price: '',
    email: '',
    name: '',
    phone: '',
    files: [],
}

const validateSchema = object({
    title: string()
        .min(6, 'Write a title more detailed')
        .max(11, 'Title is too big')
        .required('Required field'),

    category: string().required('Required field'),

    description: string()
        .min(50, 'Write a description minimun of 50 characters')
        .required('Required field'),

    price: number().required('Required field'),

    email: string()
        .email('Write a valid e-mail')
        .required(),

    name: string().required('Required field'),

    phone: number().required('Required field'),

    files: array().min(1, 'Upload at least one image').required('Required field'),

})

export {
    initialValues,
    validateSchema,
}