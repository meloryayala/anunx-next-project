import {
    Paper,
    Container,
    IconButton,
    InputBase,
    Typography,
    Grid,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'

import Card from '../src/components/Card'
import TemplateDefault from '../templates/Default'

const useStyles = makeStyles((theme) => ({
    searchBox: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(0, 2),
        marginTop: 20,
    },
    cardGrid: {
        marginTop: 50,
    }
}))

const Home = () => {
    const classes = useStyles()

    return (
        <TemplateDefault>
            <Container maxWidth="md">
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
                        <Card
                            image={'https://source.unsplash.com/random'}
                            title="Product XYZ"
                            subtitle="$ 50"
                        />
                    </Grid>
                    
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            image={'https://source.unsplash.com/random'}
                            title="Product XYZ"
                            subtitle="$ 50"
                        />
                    </Grid>
                    
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            image={'https://source.unsplash.com/random'}
                            title="Product XYZ"
                            subtitle="$ 50"
                        />
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export default Home