import { Formik } from 'formik'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/client'
import Image from 'next/image'

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
import useStyles from '../../../styles/signinStyles'

import useToasty from '../../../src/contexts/Toasty'
import TemplateDefault from '../../../templates/Default'
import { initialValues, validationSchema } from '../../../src/formValues/signinFormValues'
import { Alert } from '@material-ui/lab'

const Signin = ({ NEXTAUTH_URL }) => {
  const classes = useStyles()
  const router = useRouter()
  const { setToasty } = useToasty()
  const [session] = useSession()

  console.log(NEXTAUTH_URL)

  const handleFormSubmit = async values => {
    signIn('credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: `${NEXTAUTH_URL}/user/dashboard`,
    })
  }

  const handleGoogleLogin = () => {
    signIn('google', {
      callbackUrl: `${NEXTAUTH_URL}/user/dashboard`,
    })
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

            <Box className={classes.googleBtn}>
              <Button
                variant="contained"
                color="primary"
                startIcon={
                  <Image
                    src="/images/logo_google.svg"
                    width={20}
                    height={20}
                    alt="Google login"
                  />
                }
                onClick={handleGoogleLogin}>Enter with Google</Button>
            </Box>

            <Box className={classes.orDivider}>
              <span>ou</span>
            </Box>

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
                      {
                        router.query.i === '1'
                          ? (
                            <Alert severity="error" className={classes.errorMessage}>
                              User or password invalid
                            </Alert>
                          )
                          : null
                      }
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
                          )
                          : (
                            <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              color="primary"
                              className={classes.submit}
                            >
                              Sign in
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

export async function getServerSideProps() {
  return {
    props: {
      NEXTAUTH_URL: process.env.NEXTAUTH_URL

    }
  }
}



export default Signin