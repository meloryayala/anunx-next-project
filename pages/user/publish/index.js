import { Formik } from 'formik'
import axios from 'axios'
import { useRouter } from 'next/router'

import {
    Box,
    Button,
    Container,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    Typography,
    FormControl,
    FormHelperText,
    Input,
    CircularProgress,
} from '@material-ui/core'

import useStyles from '../../../styles/publishStyles'
import TemplateDefault from '../../../templates/Default'
import { initialValues, validateSchema } from '../../../src/formValues/publishFormValues'
import FileUpload from '../../../src/components/FileUpload'
import useToasty from '../../../src/contexts/Toasty'
import { getSession } from 'next-auth/client'

const Publish = ({ userId, image }) => {
    const classes = useStyles()
    const { setToasty } = useToasty()
    const router = useRouter()

    const formValues = {
        ...initialValues,
        userId,
        image,
    }

    const handleSuccess = () => {
        setToasty({
            open: true,
            text: 'Advertisement registered successfully',
            severity: 'success',
        })

        router.push('/user/dashboard')
    }

    const handleError = () => {
        setToasty({
            open: true,
            text: 'Ooops, an error has ocurred, try again.',
            severity: 'error',
        })
    }

    const handleFormSubmit = (values) => {
        const formData = new FormData()

        for (let field in values) {
            if (field === 'files') {
                values.files.forEach(file => {
                    formData.append('files', file)
                })
            } else {
                formData.append(field, values[field])
            }
        }

        axios.post('/api/products/post', formData)
            .then(handleSuccess)
            .catch(handleError)
    }


    return (
        <TemplateDefault>
            <Formik
                initialValues={formValues}
                validationSchema={validateSchema}
                onSubmit={handleFormSubmit}
            >
                {
                    ({
                        touched,
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
                        setFieldValue,
                        isSubmitting,
                    }) => {

                        return (
                            <form onSubmit={handleSubmit}>
                                <Input type="hidden" name={userId} value={values.userId} />
                                <Input type="hidden" name={image} value={values.image} />

                                <Container maxWidth="sm">
                                    <Typography component="h1" variant="h3" color="textPrimary" align="center">
                                        Publish advertisement
                                    </Typography>
                                    <Typography component="h5" variant="h5" color="textPrimary" align="center">
                                        More details the better!
                                    </Typography>
                                </Container>

                                <br /><br />

                                <Container maxWidth="md" className={classes.boxContainer}>
                                    <Box className={classes.box}>
                                        <FormControl error={errors.title && touched.title} fullWidth>
                                            <InputLabel className={classes.inputLabel}>What are you selling?</InputLabel>
                                            <Input
                                                name="title"
                                                value={values.title}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.title && touched.title ? errors.title : null}
                                            </FormHelperText>
                                        </FormControl>

                                        <br /> <br />

                                        <FormControl error={errors.category && touched.category} fullWidth>
                                            <InputLabel className={classes.inputLabel}>Category</InputLabel>
                                            <Select
                                                name="category"
                                                value={values.category}
                                                fullWidth
                                                onChange={handleChange}
                                            >
                                                <MenuItem value="Baby & Kids">Baby & Kids</MenuItem>
                                                <MenuItem value="Agriculture">Agriculture</MenuItem>
                                                <MenuItem value="Cars, Motos & Boats">Cars, Motos & Boats</MenuItem>
                                                <MenuItem value="Services">Services</MenuItem>
                                                <MenuItem value="Leisure">Leisure</MenuItem>
                                                <MenuItem value="Animals">Animals</MenuItem>
                                                <MenuItem value="Furniture, House & Garden">Furniture, House & Garden</MenuItem>
                                                <MenuItem value="Tools">Tools</MenuItem>
                                                <MenuItem value="Phones & Tablets">Phones & Tablets</MenuItem>
                                                <MenuItem value="Sports">Sports</MenuItem>
                                                <MenuItem value="Technology">Technology</MenuItem>
                                                <MenuItem value="Job">Job</MenuItem>
                                                <MenuItem value="Others">Others</MenuItem>
                                            </Select>
                                            <FormHelperText>
                                                {errors.category && touched.category ? errors.category : null}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>

                                <Container maxWidth="md" className={classes.boxContainer}>
                                    <Box className={classes.box}>
                                        <FileUpload
                                            files={values.files}
                                            errors={errors.files}
                                            touched={touched.files}
                                            setFieldValue={setFieldValue}
                                        />
                                    </Box>
                                </Container>

                                <Container maxWidth="md" className={classes.boxContainer}>
                                    <Box className={classes.box}>
                                        <FormControl error={errors.description && touched.description} fullWidth>
                                            <InputLabel className={classes.inputLabel}>Write detailed about what you are selling:</InputLabel>
                                            <Input
                                                name="description"
                                                multiline
                                                rows={6}
                                                variant="outlined"
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.description && touched.description ? errors.description : null}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>

                                <Container maxWidth="md" className={classes.boxContainer}>
                                    <Box className={classes.box}>
                                        <FormControl error={errors.price && touched.price} fullWidth>
                                            <InputLabel className={classes.inputLabel}>Price</InputLabel>
                                            <Input
                                                name="price"
                                                value={values.price}
                                                onChange={handleChange}
                                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                            />
                                            <FormHelperText>
                                                {errors.price && touched.price ? errors.price : null}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>

                                <Container maxWidth="md" className={classes.boxContainer}>
                                    <Box className={classes.box}>
                                        <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                                            Contact details
                                        </Typography>

                                        <FormControl error={errors.name && touched.name} fullWidth>
                                            <InputLabel className={classes.inputLabel}>Name</InputLabel>
                                            <Input
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.name && touched.name ? errors.name : null}
                                            </FormHelperText>
                                        </FormControl>

                                        <br /><br />

                                        <FormControl error={errors.email && touched.email} fullWidth>
                                            <InputLabel className={classes.inputLabel}>E-mail</InputLabel>
                                            <Input
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.email && touched.email ? errors.email : null}
                                            </FormHelperText>
                                        </FormControl>

                                        <br /><br />

                                        <FormControl error={errors.phone && touched.phone} fullWidth>
                                            <InputLabel className={classes.inputLabel}>Phone</InputLabel>
                                            <Input
                                                name="phone"
                                                value={values.phone}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.phone && touched.phone ? errors.phone : null}
                                            </FormHelperText>
                                        </FormControl>

                                    </Box>
                                </Container>
                                <Container maxWidth="md">
                                    <Box>
                                        {
                                            isSubmitting
                                                ? (
                                                    <CircularProgress className={classes.loading} />
                                                )
                                                : (

                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                        color="primary"
                                                        className={classes.submit}
                                                    >
                                                        Publish advertisement
                                                    </Button>
                                                )
                                        }
                                    </Box >
                                </Container>
                            </form>
                        )
                    }
                }
            </Formik>
        </TemplateDefault>
    )
}

Publish.requireAuth = true

export async function getServerSideProps({ req }) {
    const { userId, user } = await getSession({ req })

    return {
        props: {
            userId,
            image: user.image,
        }
    }
}

export default Publish