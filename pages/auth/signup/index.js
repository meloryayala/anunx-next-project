import { Formik } from 'formik'

import {
    Container,
    Typography,
    Box,
    FormControl,
    InputLabel,
    Input,
    FormHelperText,
    Button,
} from '@material-ui/core'

import TemplateDefault from '../../../templates/Default'
import useStyles from './styles'
import { initialValues, validationSchema } from './formValues'

const Signup = () => {
    const classes = useStyles()

    return (
        <TemplateDefault>
            <Container maxWidth="sm" component="main" className={classes.container}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary">
                    Create an account
                </Typography>
                <Typography component="h5" variant="h5" align="center" color="textPrimary">
                    And sell all around the world
                </Typography>
                <br /><br />

                <Container maxWidth="md">
                    <Box className={classes.box}>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                console.log('form enviado', values)
                            }}
                        >
                            {
                                ({
                                    touched,
                                    values,
                                    errors,
                                    handleChange,
                                    handleSubmit,
                                    isSubmitting,
                                }) => {
                                    return (
                                        <form onSubmit={handleSubmit}>
                                            <FormControl fullWidth error={errors.name && touched.name} className={classes.formControl}>
                                                <InputLabel>Name</InputLabel>
                                                <Input
                                                    name="name"
                                                    value={values.name}
                                                    onChange={handleChange}
                                                />
                                                <FormHelperText>
                                                    {errors.name && touched.name ? errors.name : null}
                                                </FormHelperText>
                                            </FormControl>

                                            <FormControl fullWidth error={errors.email && touched.email} className={classes.formControl}>
                                                <InputLabel>E-mail</InputLabel>
                                                <Input
                                                    name="email"
                                                    type="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                />
                                                <FormHelperText>
                                                    {errors.email && touched.email ? errors.email : null}
                                                </FormHelperText>
                                            </FormControl>

                                            <FormControl fullWidth error={errors.password && touched.password} className={classes.formControl}>
                                                <InputLabel>Password</InputLabel>
                                                <Input
                                                    name="password"
                                                    type="password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                />
                                                <FormHelperText>
                                                    {errors.password && touched.password ? errors.password : null}
                                                </FormHelperText>
                                            </FormControl>


                                            <FormControl fullWidth error={errors.passwordConf && touched.passwordConf} className={classes.formControl}>
                                                <InputLabel>Confirm password</InputLabel>
                                                <Input
                                                    name="passwordConf"
                                                    type="password"
                                                    value={values.passwordConf}
                                                    onChange={handleChange}
                                                />
                                                <FormHelperText>
                                                    {errors.passwordConf && touched.passwordConf ? errors.passwordConf : null}
                                                </FormHelperText>
                                            </FormControl>

                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={classes.submit}
                                            >
                                                Signup
                                            </Button>
                                        </form>
                                    )
                                }
                            }
                        </Formik>
                    </Box>
                </Container>
            </Container>
        </TemplateDefault>
    )
}

export default Signup