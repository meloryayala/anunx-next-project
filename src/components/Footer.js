import {
    Box,
    Container,
    Grid,
    Typography,
} from "@material-ui/core"

import { makeStyles } from "@material-ui/core"
import Link from "next/link"


const useStyles = makeStyles((theme) => ({
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        }
    }
}))

const Footer = () => {

    const classes = useStyles()

    return (
        <Container maxWidth="lg" component="footer" className={classes.footer}>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={3}>
                    <Box textAlign="center">
                        <Link href="#">
                            <Typography variant="subtitle1">Help & Contact</Typography>
                        </Link>
                    </Box>
                </Grid>

                <Grid item xs={6} sm={3}>
                    <Box textAlign="center">
                        <Link href="#">
                            <Typography variant="subtitle1">Security tips</Typography>
                        </Link>
                    </Box>
                </Grid>

                <Grid item xs={6} sm={3}>
                    <Box textAlign="center">
                        <Link href="/user/dashboard">
                            <Typography variant="subtitle1">Advertise & sell</Typography>
                        </Link>
                    </Box>
                </Grid>

                <Grid item xs={6} sm={3}>
                    <Box textAlign="center">
                        <Link href="#">
                            <Typography variant="subtitle1">Professional plan</Typography>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer