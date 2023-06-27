import {
    Container,
    Paper,
    InputBase,
    IconButton,
    Typography,
    Grid,
    Box,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'

import TemplateDefault from '../../templates/Default'
import Card from '../../src/components/Card'

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    searchBox: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(0, 2),
        marginBottom: 20,
    },
}))

const List = () => {

    const classes = useStyles()

    return (
        <TemplateDefault>
            <Container maxWidth="lg">

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Paper component="form" className={classes.searchBox}>
                            <InputBase
                                placeholder="E. g. Dinner table"
                                fullWidth
                            />
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    <Box className={classes.box}>
                        <Typography component="h6" variant="h6" color="textPrimary">Advertisements</Typography>
                        <Typography component="span" variant="subtitle2">100 ads found</Typography>
                        <br /><br />
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card
                                    image={'https://source.unsplash.com/random?a=1'}
                                    title="Product XYZ"
                                    subtitle="$ 50"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                                <Card
                                    image={'https://source.unsplash.com/random?a=1'}
                                    title="Product XYZ"
                                    subtitle="$ 50"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                                <Card
                                    image={'https://source.unsplash.com/random?a=1'}
                                    title="Product XYZ"
                                    subtitle="$ 50"
                                />
                            </Grid>
                        </Grid>

                    </Box>
                </Grid>

            </Container>
        </TemplateDefault >
    )
}

export default List