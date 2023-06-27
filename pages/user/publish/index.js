import { Formik } from 'formik'
import { useDropzone } from 'react-dropzone'

import {
    Box,
    Button,
    Container,
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    Typography,
    FormControl,
    FormHelperText,
    Input
} from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'

import TemplateDefault from '../../../templates/Default'
import { initialValues, validateSchema } from './formValues'
import useStyles from './styles'

const Publish = () => {
    const classes = useStyles()

    return (
        <TemplateDefault>
            <Formik
                initialValues={initialValues}
                validationSchema={validateSchema}
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
                        setFieldValue,
                    }) => {
                        const { getRootProps, getInputProps } = useDropzone({
                            accept: 'image/*',
                            onDrop: (acceptedFile) => {
                                const newFiles = acceptedFile.map(file => {
                                    return Object.assign(file, {
                                        preview: URL.createObjectURL(file)
                                    })
                                })


                                //setFieldValue('nome', 'value')
                                setFieldValue('files', [
                                    ...values.files,
                                    ...newFiles,
                                ])
                            }
                        })

                        const handleRemoveFile = fileName => {
                            const newFileState = values.files.filter(file => file.name !== fileName)
                            setFieldValue('files', newFileState)
                        }

                        return (
                            <form onSubmit={handleSubmit}>
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
                                        <Typography component="h6" variant="h6" color={errors.files ? "error" : "textPrimary"}>
                                            Images
                                        </Typography>
                                        <Typography component="div" variant="body2" color={errors.files ? "error" : "textPrimary"}>
                                            The first image will be the first advertisement image.
                                        </Typography>
                                        {
                                            errors.files
                                                ? <Typography variant="body2" color="error" gutterBottom>{errors.files}</Typography>
                                                : null
                                        }
                                        <Box className={classes.thumbsContainer}>
                                            <Box className={classes.dropzone} {...getRootProps()}>
                                                <input name="files" {...getInputProps()} />
                                                <Typography variant="body2" color={errors.files ? "error" : "textPrimary"}>
                                                    Click to add or drag an image here.
                                                </Typography>
                                            </Box>
                                            {
                                                values.files.map((file, index) => (
                                                    <Box
                                                        key={file.name}
                                                        className={classes.thumb}
                                                        style={{ backgroundImage: `url(${file.preview})` }}
                                                    >
                                                        {
                                                            index === 0 ?
                                                                <Box className={classes.adsCover}>
                                                                    <Typography variant="body" color="primary">
                                                                        Ads cover
                                                                    </Typography>
                                                                </Box>
                                                                : null
                                                        }
                                                        <Box className={classes.mask}>
                                                            <IconButton color="secondary" onClick={() => handleRemoveFile(file.name)}>
                                                                <DeleteForever fontSize="large" />
                                                            </IconButton>
                                                        </Box>
                                                    </Box>
                                                ))
                                            }

                                        </Box>
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
                                        <Button type="submit" variant="contained" color="primary">
                                            Publish advertisement
                                        </Button>
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

export default Publish