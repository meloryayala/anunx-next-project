import {
    Button,
    Card as CardMUI,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    cardMedia: {
        paddingTop: '56%',
    }
}))

const Card = ({ image, title, subtitle, actions }) => {

    const classes = useStyles()

    return (
        <CardMUI>
            <CardMedia
                className={classes.cardMedia}
                image={image}
                title="Title ads"
            />
            <CardContent>
                <Typography component="h2" variant="h5">
                    {title}
                </Typography>
                <Typography>
                    {subtitle}
                </Typography>
            </CardContent>
            {
                actions
                    ? (
                        <CardActions>
                            {actions}
                        </CardActions>
                    ) : null
            }
        </CardMUI>
    )
}

export default Card