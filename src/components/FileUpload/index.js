import {
    Box,
    IconButton,
    Typography,
} from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'

import { useDropzone } from 'react-dropzone'
import useStyles from './styles'

const FileUpload = ({ files, errors, touched, setFieldValue }) => {

    const classes = useStyles()

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
                ...files,
                ...newFiles,
            ])
        }
    })

    const handleRemoveFile = fileName => {
        const newFileState = files.filter(file => file.name !== fileName)
        setFieldValue('files', newFileState)
    }

    return (
        <>
            <Typography component="h6" variant="h6" color={errors && touched ? "error" : "textPrimary"}>
                Images
            </Typography>
            <Typography component="div" variant="body2" color={errors && touched ? "error" : "textPrimary"}>
                The first image will be the first advertisement image.
            </Typography>
            {
                errors && touched
                    ? <Typography variant="body2" color="error" gutterBottom>{errors}</Typography>
                    : null
            }
            <Box className={classes.thumbsContainer}>
                <Box className={classes.dropzone} {...getRootProps()}>
                    <input name="files" {...getInputProps()} />
                    <Typography variant="body2" color={errors && touched ? "error" : "textPrimary"}>
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

        </>
    )
}

export default FileUpload