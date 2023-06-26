import {
    Box,
    Container,
    Grid,
    makeStyles,
    Typography,
    Chip,
    Card,
    CardHeader,
    Avatar,
    CardMedia,
} from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'

import TemplateDefault from '../templates/Default'

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    productName: {
        margin: '15px 0',
    },
    price: {
        fontWeight: 'bold',
        marginBottom: 15,
    },
    card: {
        height: '100%'
    },
    cardMedia: {
        paddingTop: '56%'
    }
}))

const Products = () => {

    const classes = useStyles()

    return (
        <TemplateDefault>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Box className={classes.box}>
                            <Carousel
                                navButtonsAlwaysVisible
                                autoPlay={false}
                                animation="slide"
                                navButtonsProps={{
                                    style: {
                                        color: 'white'
                                    }
                                }}
                            >
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random?a=1"
                                        title="Título"
                                    />
                                </Card>

                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random?a=2"
                                        title="Título"
                                    />
                                </Card>
                            </Carousel>
                        </Box>

                        <Box className={classes.box} textAlign="left">
                            <Typography component="span" variant="caption">Posted 16 July 2021</Typography>
                            <Typography component="h4" variant="h4" className={classes.productName}>Jaguar XE 2.0 D R-Spot Aut.</Typography>
                            <Typography component="h4" variant="h4" className={classes.price}>$ 50.000,00</Typography>
                            <Chip label="Category" />
                        </Box>

                        <Box className={classes.box} textAlign="left">
                            <Typography component="h6" variant="h6">Description</Typography>
                            <Typography component="p" variant="body2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus magna, ultrices in diam ut, imperdiet tincidunt sem. Suspendisse pellentesque justo a vulputate sollicitudin. Fusce fringilla scelerisque diam in pretium. Suspendisse cursus, orci et pretium commodo, ligula nisl facilisis odio, nec rhoncus velit erat quis neque. Cras lacinia ligula quis sagittis tincidunt. Cras ac porttitor urna. Ut posuere metus quis erat imperdiet, nec pharetra lorem cursus.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={4}>
                        <Card elevation={0} className={classes.box}>
                            <CardHeader
                                avatar={
                                    <Avatar>T</Avatar>
                                }
                                title="Melory Ayala"
                                subheader="melory.ayala@gmail.com"
                            />
                            <CardMedia
                                image="https://source.unsplash.com/random?a=1"
                                title="Melory Ayala"
                            />
                        </Card>

                        <Box className={classes.box}>
                            <Typography component="h6" variant="h6">
                                Location
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export default Products