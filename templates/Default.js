import { Box, makeStyles } from '@material-ui/core'

import Footer from '../src/components/Footer'
import Header from '../src/components/Header'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(6, 0, 6)
    }
}))

const Default = ({ children }) => {

    const classes = useStyles()

    return (
        <>
            <Header />
            <Box className={classes.container}>
                {children}
            </Box>
            <Footer />
        </>
    )
}

export default Default