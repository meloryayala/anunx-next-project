import {
    Paper,
    Container,
    IconButton,
    InputBase,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import SearchIcon from '@material-ui/icons/Search'

import TemplateDefault from '../templates/Default'

const useStyles = makeStyles((theme) => ({
    searchContainer: {
        padding: theme.spacing(8, 10, 6),
    },
    searchBox: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(0, 2),
        marginTop: 20,
    },
    cardMedia: {
        paddingTop: '56%',
    },
}))

const Home = () => {
    const classes = useStyles()

    return (
        <TemplateDefault>
            <Container maxWidth="md" className={classes.searchContainer}>
                <Typography component="h1" variant="h3" align="center" color="primary">
                    What would you like to search?
                </Typography>
                <Paper className={classes.searchBox}>
                    <InputBase
                        placeholder="E. g. Dinner table"
                        fullWidth
                    />
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Container>
            <Container maxWidth="lg" className={classes.cardGrid}>
                <Typography component="h2" variant="h4" align="center" color="textPrimary">
                    Highlights
                </Typography>
                <br />
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                className={classes.cardMedia}
                                image={'https://source.unsplash.com/random'}
                                title="Title ads"
                            />
                            <CardContent>
                                <Typography component="h2" variant="h5">
                                    Product XYZ
                                </Typography>
                                <Typography>
                                    $ 50
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>


                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                className={classes.cardMedia}
                                image={'https://source.unsplash.com/random'}
                                title="Title ads"
                            />
                            <CardContent>
                                <Typography component="h2" variant="h5">
                                    Product XYZ
                                </Typography>
                                <Typography>
                                    $ 50
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>



                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                className={classes.cardMedia}
                                image={'https://source.unsplash.com/random'}
                                title="Title ads"
                            />
                            <CardContent>
                                <Typography component="h2" variant="h5">
                                    Product XYZ
                                </Typography>
                                <Typography>
                                    $ 50
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </Container>
        </TemplateDefault>
    )
}

export default Home