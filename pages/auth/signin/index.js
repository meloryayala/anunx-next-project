import { Formik } from 'formik'
import axios from 'axios'
import { useRouter } from 'next/router'

import {
  Container,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  CircularProgress,
} from '@material-ui/core'
import useStyles from './styles'

import useToasty from '../../../src/contexts/Toasty'
import TemplateDefault from '../../../templates/Default'
import { initialValues, validationSchema } from './formValues'

const Signin = () => {
  const classes = useStyles()
  const router = useRouter()
  const { setToasty } = useToasty()

  const handleFormSubmit = async values => {

  }

  return (
    <TemplateDefault>
      <Container maxWidth="sm" component="main" className={classes.container}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary">
          Access your account
        </Typography>

        <br /><br />

        <Container maxWidth="md">
          <Box className={classes.box}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleFormSubmit}
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

                      {
                        isSubmitting
                          ? (
                            <CircularProgress className={classes.loading} />
                          ) : (
                            <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              color="primary"
                              className={classes.submit}
                            >
                              Signup
                            </Button>
                          )
                      }

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

export default Signin