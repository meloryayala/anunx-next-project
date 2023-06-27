import { useState } from 'react'
import { Formik } from 'formik'
import { useDropzone } from 'react-dropzone'
import { object, string, number, date, InferType } from 'yup'

import {
    Box,
    Button,
    Container,
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    TextField,
    Typography,
    FormControl,
    FormHelperText,
    makeStyles,
    Input
} from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'

import TemplateDefault from '../../templates/Default'

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3)
    },
    boxContainer: {
        paddingBottom: theme.spacing(3)
    },
    thumbsContainer: {
        display: 'flex',
        marginTop: 15,
        flexWrap: 'wrap'
    },
    dropzone: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '10px',
        margin: '0 15px 15px 0',
        width: 200,
        height: 150,
        backgroundColor: theme.palette.background.default,
        border: '2px dashed black',

    },
    thumb: {
        width: 200,
        height: 150,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        position: 'relative',
        margin: '0 15px 15px 0',

        '&:hover $mask': {
            display: 'flex'
        }
    },
    mask: {
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: '100%',
        width: '100%',
    },
    adsCover: {
        backgroundColor: theme.palette.secondary.mark,
        position: 'absolute',
        padding: '6px 10px',
        bottom: 0,
        left: 0,
    },
    inputLabel: {
        fontWeight: 400,
        color: theme.palette.primary.main,
    }

}))

const validateSchema = object({
    title: string()
        .min(6, 'Write a title more detailed')
        .max(11, 'Title is too big')
        .required('Required field'),

    category: string().required('Required field'),

    description: string()
        .min(50, 'Write a description minimun of 50 caracteries')
        .required('Required field'),
})

const Publish = () => {
    const classes = useStyles()
    const [files, setFiles] = useState([])

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFile) => {
            const newFiles = acceptedFile.map(file => {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            })

            setFiles([
                ...files,
                ...newFiles,
            ])
        }
    })

    const handleRemoveFile = fileName => {
        const newFileState = files.filter(file => file.name !== fileName)
        setFiles(newFileState)
    }

    return (
        <TemplateDefault>
            <Formik
                initialValues={{
                    title: '',
                    category: '',
                    description: '',
                }}
                validationSchema={validateSchema}
                onSubmit={(values) => {
                    console.log('ok enviou form', values)
                }}
            >
                {
                    ({
                        values,
                        errors,
                        handleChange,
                        handleSubmit
                    }) => {
                        console.log(errors)
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
                                        <FormControl error={errors.title} fullWidth>
                                            <InputLabel className={classes.inputLabel}>What are you selling?</InputLabel>
                                            <Input
                                                name="title"
                                                value={values.title}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.title}
                                            </FormHelperText>
                                        </FormControl>

                                        <br /> <br />

                                        <FormControl error={errors.category} fullWidth>
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
                                                {errors.category}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>

                                <Container maxWidth="md" className={classes.boxContainer}>
                                    <Box className={classes.box}>
                                        <Typography component="h6" variant="h6" color="textPrimary">
                                            Images
                                        </Typography>
                                        <Typography component="div" variant="body2" color="textPrimary">
                                            The first image will be the first advertisement image.
                                        </Typography>
                                        <Box className={classes.thumbsContainer}>
                                            <Box className={classes.dropzone} {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                <Typography variant="body2" color="">
                                                    Click to add or drag an image here.
                                                </Typography>
                                            </Box>
                                            {
                                                files.map((file, index) => (
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
                                        <FormControl error={errors.description} fullWidth>
                                            <InputLabel className={classes.inputLabel}>Write detailed about what you are selling:</InputLabel>
                                            <Input
                                                name="description"
                                                multiline
                                                rows={6}
                                                variant="outlined"
                                            />
                                            <FormHelperText>
                                                {errors.description}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>

                                <Container maxWidth="md" className={classes.boxContainer}>
                                    <Box className={classes.box}>
                                        <Typography component="h6" variant="h6" color="textPrimary">
                                            Price
                                        </Typography>
                                        <br />
                                        <FormControl fullWidth variant="outlined">
                                            <InputLabel>Amount</InputLabel>
                                            <OutlinedInput
                                                onChange={() => { }}
                                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                                labelWidth={60}
                                            />
                                        </FormControl>
                                    </Box>
                                </Container>

                                <Container maxWidth="md" className={classes.boxContainer}>
                                    <Box className={classes.box}>
                                        <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                                            Contact data
                                        </Typography>
                                        <TextField
                                            label="Name"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                        <br /><br />
                                        <TextField
                                            label="E-mail"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                        <br /><br />
                                        <TextField
                                            label="Phone"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                        />
                                    </Box>
                                </Container>
                                <Container maxWidth="md">
                                    <Box>
                                        <Button type="submit" variant="contained" color="texPrimary">
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