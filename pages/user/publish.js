import {
    Box,
    Button,
    Container,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Select,
    TextField,
    Typography,
    makeStyles
} from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'
import { useDropzone } from 'react-dropzone'

import TemplateDefault from '../../templates/Default'
import { useState } from 'react'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(8, 0, 6)
    },
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
    }

}))

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
            <Container maxWidth="sm" className={classes.container}>
                <Typography component="h1" variant="h2" color="textPrimary" align="center">
                    Publish advertisement
                </Typography>
                <Typography component="h5" variant="h5" color="textPrimary" align="center">
                    More details the better!
                </Typography>
            </Container>
            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color="textPrimary">
                        Ads title
                    </Typography>
                    <TextField
                        label="e. g. Bike new Fyer"
                        size="small"
                        fullWidth
                    />
                    <br /> <br />
                    <Typography component="h6" variant="h6" color="textPrimary">
                        Category
                    </Typography>
                    <Select
                        native
                        value=""
                        fullWidth
                        onChange={() => { }}
                        inputProps={{
                            name: 'age',
                        }}
                    />
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
                    <Typography component="h6" variant="h6" color="textPrimary">
                        Description
                    </Typography>
                    <Typography component="div" variant="body2" color="textPrimary">
                        Write detailed what you are selling.
                    </Typography>
                    <TextField
                        multiline
                        rows={6}
                        variant="outlined"
                        fullWidth
                    />
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
                    <Button variant="contained" color="texPrimary">
                        Publish advertisement
                    </Button>
                </Box >
            </Container>
        </TemplateDefault>
    )
}

export default Publish