import {
    Box,
    Button,
    Container,
    Select,
    TextField,
    Typography,
    makeStyles
} from '@material-ui/core'
import TemplateDefault from '../../templates/Default'

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
    }
}))



const Publish = () => {
    const classes = useStyles()

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
                    <Button variant="contained" color="primary">
                        Publish advertisement
                    </Button>
                </Box >
            </Container>
        </TemplateDefault>
    )
}

export default Publish